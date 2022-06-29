import { resolve } from "path"
import { DownloaderHelper } from 'node-downloader-helper'
import { formatter } from '@src/exchange/formatter'
import { saveTrades } from "@src/exchange/db"
import { PDFNet } from '@pdftron/pdfnet-node'
import xml2js from 'xml2js'
import { Request, Response } from "express";

const dest = resolve(__dirname, '..', '..', 'files');
const filePath = resolve(__dirname, '..', '..', 'files', 'ZMMIREFR.pdf')
const url = 'https://www.bancomoc.mz/Files/REFR/ZMMIREFR.pdf'

export const exchangeRates = async (_request: Request, response: Response) => {
  const dl = new DownloaderHelper(url, dest, {
    retry: {
      maxRetries: 3,
      delay: 1000
    },
    override: true
  });
  
  dl.on('retry', () => console.log('I am trying...'))
  dl.on('error', err => console.log(err))
  
  dl.on('end', async () => {
    const extractText = async () => {
      
      const doc = await PDFNet.PDFDoc.createFromFilePath(filePath);
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
      
    PDFNet.runWithCleanup(extractText, process.env.PDF_KEY).then(async (exchanges) => {
      response.send(exchanges)
    }).catch(err => console.log(err))
  })
  
  return dl.start()
}
