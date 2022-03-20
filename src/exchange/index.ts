import { resolve } from "path";
import { DownloaderHelper } from 'node-downloader-helper';
import { Request, Response } from "express";
import getExchangeRates from '@src/exchange/exchangeRates/getExchangeRates';
import dayjs from "dayjs";
import { PDFNet } from '@pdftron/pdfnet-node';
import xml2js from 'xml2js'

const ratesPath = resolve(__dirname, '..', '..', 'files', 'ZMCI213_01022016.pdf');
const dest = resolve(__dirname, '..', '..', 'files');
const url = 'https://www.bancomoc.mz/Files/TCMD/ZMCI213_01022016.pdf';

export const bancoRates = (_request: Request, response: Response) => {
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

      var parser = new xml2js.Parser(/* options */);
      const exchanges = await parser.parseStringPromise(xml)
      
      const exchangeRates = {}   
      const date = dayjs(new Date(2016, 1, 1)).format('DD-MM-YYYY') 
      
      exchangeRates[date] = getExchangeRates(exchanges)
      
      response.status(200).json(exchangeRates)
    }
      
    PDFNet.runWithCleanup(extractText, process.env.PDF_KEY).then(() => {
      
    }).catch(err => console.log(err))
  })
  
  dl.start()
}
