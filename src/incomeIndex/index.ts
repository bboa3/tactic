import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { IILines, IIFormatter } from '@src/incomeIndex/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'incomeIndex', 'indice-de-remuneracoes.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'incomeIndex', 'income-index.json')

export interface IIs {
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

interface Entity {
  aggregate: IIs[]
  industries: IIs[]
}

export const incomeIndex = async (_request: Request, response: Response) => {
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

  let formatted: IIs[] = []

  for (const tabName of tabNames) {
    const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
      blankrows: false,
      header: 1,
    }) 

    const year = Number(tabName)

    const IiLines: IILines = {
      IILine2: data[2],
      IILine3: data[3],
      IILine4: data[4],
      IILine5: data[5],
      IILine6: data[6],
      IILine7: data[7]
    }

    const newFormatted = IIFormatter({ year, IiLines })

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
