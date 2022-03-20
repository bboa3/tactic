import { resolve } from "path";
import { DownloaderHelper } from 'node-downloader-helper';
import { PDFNet } from '@pdftron/pdfnet-node';
import { Request, Response } from "express";
import { parseString } from 'xml2js'
import getDateRates from '@src/exchange/exchangeRates/getDate';
import getExchangeRates from '@src/exchange/exchangeRates/getExchangeRates';


const ratesPath = resolve(__dirname, '..', '..', 'files', 'ZMCI213_16032022.pdf');
const dest = resolve(__dirname, '..', '..', 'files');
const url = 'https://www.bancomoc.mz/Files/TCMD/ZMCI213_16032022.pdf';

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
  
  dl.on('end', () => {
    const extractText = async () => {
      
      const doc = await PDFNet.PDFDoc.createFromFilePath(ratesPath);
      await doc.initSecurityHandler();
      
      const page = await doc.getPage(1);
      if(!page)
      return console.log('page not found');
      
      const txt = await PDFNet.TextExtractor.create();
      
      const rect = new PDFNet.Rect(0, 0, 612, 794);
      
      txt.begin(page, rect);
      
      const text = await txt.getAsXML();

      parseString(text, (err, result) => {
        if(err) return console.log(err)
        
        response.status(200).json(result)
      })
      
      const date = getDateRates(text);  
      const exchangeRates = {}   
      
      exchangeRates[date] = getExchangeRates(text)
      
      return exchangeRates
    }
    
    PDFNet.runWithCleanup(extractText, process.env.PDF_KEY).then((exchangeRates) => {
      // response.status(200).json(exchangeRates)
      
    }).catch(err => console.log(err))
  });
  
  dl.start();
}