import { resolve } from "path"
import fs from 'fs/promises'
import { DownloaderHelper } from 'node-downloader-helper';
import getExchangeRates from '@src/exchange/exchangeRates/getExchangeRates';
import { PDFNet } from '@pdftron/pdfnet-node';
import xml2js from 'xml2js'

const dest = resolve(__dirname, '..', '..', 'files');
const exchangesPath = resolve(__dirname, '..', '..', 'files', 'currencies', 'exchanges.json');
const url = 'https://www.bancomoc.mz/Files/REFR/ZMMIREFR.pdf'
const ratesPath = resolve(__dirname, '..', '..', 'files', 'ZMMIREFR.pdf')
import { Request, Response } from "express";
import dayjs from "dayjs";

export const exchangeRates = async (request: Request, response: Response) => {
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
      
      const doc = await PDFNet.PDFDoc.createFromFilePath(ratesPath);
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
      
      return getExchangeRates(exchanges)
    }
      
    PDFNet.runWithCleanup(extractText, process.env.PDF_KEY).then(async (exchanges) => {
      const exchangeRates = JSON.parse((await fs.readFile(exchangesPath, 'utf8')))

      const date = dayjs().format('DD-MM-YYYY')
  
      exchangeRates[date] = exchanges

      response.send(exchanges)
    }).catch(err => console.log(err))
  })
  
  return dl.start()
}
