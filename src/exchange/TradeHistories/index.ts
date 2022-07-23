import pdfTableExtractor from '@florpor/pdf-table-extractor'
import { exchangeRatesHistoriesDB } from "@src/exchange/TradeHistories/db"
import { exchangeRatesHistoriesFormatter } from '@src/exchange/TradeHistories/formatter'
import { Request, Response } from 'express'
import fs from 'fs'
import https from 'https'
import { resolve } from "path"


export const exchangeRatesHistories = async (_request: Request, response: Response) => {
  const filename = 'ZMCI213_22072022.pdf'
  const path = resolve(__dirname, '..', '..', '..', 'files', filename)
  const url = `https://www.bancomoc.mz/Files/TCMD/${filename}`

  const fileDownloader = https.get(url, (res) => {
    const fileStream = fs.createWriteStream(path)
    res.pipe(fileStream)

    fileStream.on('error', err => console.log(err)) 

    fileStream.on('finish', async () => {
      fileStream.close()
        
      const extractedFile = await pdfTableExtractor(path)


      const tables: string[][] = extractedFile.pageTables[0].tables
      let data: string[] = []

      for (const table of tables) {
        const rows  = table[0].split('\n')

        data = [...data, ...rows]
      }
    
      const formattedTrades = exchangeRatesHistoriesFormatter(data)
      const trades = await exchangeRatesHistoriesDB(formattedTrades)

      response.status(201).json(trades)
    })
  })

  fileDownloader.on('error', err => console.log(err))

  fs.unlink(path, err => console.log(err))
}

