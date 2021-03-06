import { resolve } from "path"
import { currentExchangeRatesFormatter } from '@src/exchange/currentTrades/formatter'
import { currentExchangeRatesDB } from "@src/exchange/currentTrades/db"
import { Request, Response } from 'express'
import pdfTableExtractor from '@florpor/pdf-table-extractor'
import fs from 'fs'
import https from 'https'

const filename = 'ZMMIREFR.pdf'
const path = resolve(__dirname, '..', '..', '..', 'files', filename)
const url = 'https://www.bancomoc.mz/Files/REFR/ZMMIREFR.pdf'

export const currentExchangeRates = async (request: Request, response: Response) => {
  const fileDownloader = https.get(url, (res) => {
    const fileStream = fs.createWriteStream(path)
    res.pipe(fileStream)

    fileStream.on('error', err => console.log(err)) 

    fileStream.on('finish', async () => {
      fileStream.close()
        
      const extractedFile = await pdfTableExtractor(path)

      const tables: string[][] = extractedFile.pageTables[0].tables
      const byUnitTable  = tables[2][0].split('\n')
      const by1000UnitsTable = tables[6][0].split('\n')

      const formattedTrades = currentExchangeRatesFormatter({ byUnitTable, by1000UnitsTable })
      const trades = await currentExchangeRatesDB(formattedTrades)

      response.json(trades)
    })
  })

  fileDownloader.on('error', err => console.log(err))
}

