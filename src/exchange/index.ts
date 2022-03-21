import dayjs from "dayjs"
import fs from 'fs/promises'
import { Request, Response } from "express";
import { resolve } from "path"
import { exchanges } from "@src/exchange/exchanges";

const datePath = resolve(__dirname, '..', '..', 'files', 'date.txt');

export const exchangeRates = async (_request: Request, response: Response) => {
  await fs.writeFile(datePath, '01-02-2016')
  let isBefore = true

  do {
    const lastD = (await fs.readFile(datePath, 'utf8')).split('-')
    const day = Number(lastD[0])
    const month = Number(lastD[1]) - 1
    const year = Number(lastD[2])
    
    const lastDate = dayjs(new Date(year, month, day))

    const today = dayjs()

    const newDate = lastDate.add(1, 'day').format('DD-MM-YYYY')

    await exchanges(newDate)

    await fs.writeFile(datePath, newDate)

    isBefore = lastDate.isBefore(today)
  } while (isBefore)

  response.status(200).json('Done')
}
