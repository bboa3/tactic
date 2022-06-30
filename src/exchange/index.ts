import { Request, Response } from "express";
import { resolve } from "path"
import { formatter } from '@src/exchange/formatter'
import { saveTrades } from "@src/exchange/db"
import { PDFNet } from '@pdftron/pdfnet-node'
import xml2js from 'xml2js'
import fs from 'fs'
import https from 'https'

const filename = 'ZMMIREFR.pdf'
const path = resolve(__dirname, '..', '..', 'files', filename)
const url = 'https://www.bancomoc.mz/Files/REFR/ZMMIREFR.pdf'

export const exchangeRates = async () => {
  const fileDownloader = https.get(url, (res) => {
    const fileStream = fs.createWriteStream(path)
    res.pipe(fileStream)

    fileStream.on('error', err => console.log(err)) 

    fileStream.on('finish', () => {
      fileStream.close()

      const extractText = async () => {
        const doc = await PDFNet.PDFDoc.createFromFilePath(path);
        await doc.initSecurityHandler();
        
        const page = await doc.getPage(1);
        if(!page)
        return console.log('page not found');
        
        const txt = await PDFNet.TextExtractor.create();
        
        const rect = new PDFNet.Rect(0, 0, 612, 794);
        
        txt.begin(page, rect);
        
        const xml = await txt.getAsXML();
    
        const parser = new xml2js.Parser(/* options */);
        const exchanges = await parser.parseStringPromise(xml)
        
        const formattedTrades = formatter(exchanges)
        const trades = await saveTrades(formattedTrades)
    
        return trades
      }
        
      PDFNet.runWithCleanup(extractText, process.env.PDF_KEY).then((exchanges) => {
      }).catch(err => console.log(err))
    })
  })

  fileDownloader.on('error', err => console.log(err))
}

