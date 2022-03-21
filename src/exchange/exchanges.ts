import { resolve } from "path"
import fs from 'fs/promises'
import { DownloaderHelper } from 'node-downloader-helper';
import getExchangeRates from '@src/exchange/exchangeRates/getExchangeRates';
import { PDFNet } from '@pdftron/pdfnet-node';
import xml2js from 'xml2js'

const dest = resolve(__dirname, '..', '..', 'files');
const exchangesPath = resolve(__dirname, '..', '..', 'files', 'currencies', 'exchanges.json');

export const exchanges = async (date: string) => {
  const dat = date.split('-').join('')
  const ratesPath = resolve(__dirname, '..', '..', 'files', `ZMCI213_${dat}.pdf`)
  const url = `https://www.bancomoc.mz/Files/TCMD/ZMCI213_${dat}.pdf`

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
  
      exchangeRates[date] = exchanges

      await fs.writeFile(exchangesPath, JSON.stringify(exchangeRates))
    }).catch(err => console.log(err))
  })
  
  return dl.start()
}
