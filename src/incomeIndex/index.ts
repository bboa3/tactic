import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { IILines, IIFormatter } from '@src/incomeIndex/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'incomeIndex', 'indice-de-remuneracoes.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'incomeIndex', 'employment-index.json')

interface IIs {
  id: number
  name: string
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

  const IIs: Entity = {
    aggregate: [],
    industries: []
  }

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
      IILine7: data[7],
      IILine9: data[9],
      IILine10: data[10],
      IILine11: data[11],
      IILine12: data[12],
      IILine13: data[13],
      IILine14: data[14],
      IILine15: data[15],
      IILine16: data[16],
      IILine17: data[17],
      IILine18: data[18],
      IILine19: data[19],
      IILine20: data[20],
      IILine21: data[21],
      IILine22: data[22],
      IILine23: data[23],
      IILine24: data[24],
      IILine25: data[25],
      IILine26: data[26],
      IILine27: data[27],
      IILine28: data[28],
      IILine29: data[29],
      IILine30: data[30],
      IILine31: data[31],
      IILine32: data[32],
      IILine33: data[33],
      IILine34: data[34],
      IILine35: data[35],
      IILine36: data[36],
      IILine37: data[37],
      IILine38: data[38],
      IILine39: data[39],
      IILine40: data[40],
      IILine41: data[41],
      IILine42: data[42],
      IILine43: data[43],
      IILine44: data[44],
      IILine45: data[45],
      IILine46: data[46],
      IILine47: data[47],
      IILine48: data[48],
      IILine49: data[49],
    }

    const { aggregate: newAggregate, industries: newIndustries } = IIFormatter({ year, IiLines })

    const { aggregate, industries } = IIs

    let index = 0
    for (const industry of newAggregate) {
      if (!aggregate[0]) {
        IIs.aggregate = newAggregate
      } else {
        industry.values = [...aggregate[index].values, ...industry.values]
        IIs.aggregate[index] = industry
        index++
      }
    }

    if (year >= 2020) {
      let index = 0
      for (const industry of newIndustries) {
        if (!industries[0]) {
          IIs.industries = newIndustries
        } else {
          industry.values = [...industries[index].values, ...industry.values]
          IIs.industries[index] = industry
          index++
        }
      }
    }
  }

  await fs.writeFile(dest, JSON.stringify(IIs))

  response.status(200).json(IIs)
}
