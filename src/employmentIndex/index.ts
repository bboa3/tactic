import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { EILines, EIFormatter } from '@src/employmentIndex/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'employmentIndex', 'indice-de-emprego.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'employmentIndex', 'employment-index.json')

export interface EIs {
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

export const employmentIndex = async (_request: Request, response: Response) => {
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

  let formatted: EIs[] = []

  for (const tabName of tabNames) {
    const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
      blankrows: false,
      header: 1,
    }) 

    const year = Number(tabName)

    const eiLines: EILines = {
      EILine2: data[2],
      EILine3: data[3],
      EILine4: data[4],
      EILine5: data[5],
      EILine6: data[6],
      EILine7: data[7]
    }

    const newFormatted = EIFormatter({ year, eiLines })

    let index = 0
    for (const indicator of newFormatted) {
      if (!formatted[0]) {
        formatted = newFormatted
      } else {
        indicator.values = [...formatted[index].values, ...indicator.values]
        formatted[index] = indicator
      }

      index++
    }
  }

  await fs.writeFile(dest, JSON.stringify(formatted))

  response.status(200).json(formatted)
}
