import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { TurnoverIndexLines, turnoverIndexFormatter } from '@src/turnoverIndex/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'turnoverIndex', 'indices-volume-de-negócios.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'turnoverIndex', 'turnover-index.json')

export interface TurnoverIndex {
  _id: string
  name: string
  type: string
  values: {
    date: {
      year: number
      month: number
    },
    value: number
  }[],
}

export const turnoverIndex = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName2016 = file.SheetNames[0]
  const tabName2017 = file.SheetNames[1]
  const tabName2018 = file.SheetNames[2]
  const tabName2019 = file.SheetNames[3]
  const tabName2020 = file.SheetNames[4]
  const tabName2021 = file.SheetNames[5]
  const tabName2022 = file.SheetNames[6]

  const tabNames = [
    tabName2016,
    tabName2017,
    tabName2018,
    tabName2019,
    tabName2020,
    tabName2021,
    tabName2022
  ]

  let formatted: TurnoverIndex[] = []

  for (const tabName of tabNames) {
    const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
      blankrows: false,
      header: 1,
    }) 

    const year = Number(tabName)

    const turnoverIndexLines: TurnoverIndexLines = {
      turnoverIndexLine2: data[2],
      turnoverIndexLine3: data[3],
      turnoverIndexLine4: data[4],
      turnoverIndexLine5: data[5],
      turnoverIndexLine6: data[6],
      turnoverIndexLine7: data[7],
      turnoverIndexLine8: data[8]
    }

    const newFormatted = turnoverIndexFormatter({ year, turnoverIndexLines })

    let index = 0
    for (const industry of newFormatted) {
      if (!formatted[0]) {
        formatted = newFormatted
      } else {
        industry.values = [...formatted[index].values, ...industry.values]
        formatted[index] = industry
      }
      
      index++
    }
  }

  await fs.writeFile(dest, JSON.stringify(formatted))

  response.status(200).json(formatted)
}
