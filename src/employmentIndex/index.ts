import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { EILines, EIFormatter } from '@src/employmentIndex/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'employmentIndex', 'indice-de-emprego.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'employmentIndex', 'employment-index.json')

interface EIs {
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
  aggregate: EIs[]
  industries: EIs[]
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

  const EIs: Entity = {
    aggregate: [],
    industries: []
  }

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
      EILine7: data[7],
      EILine9: data[9],
      EILine10: data[10],
      EILine11: data[11],
      EILine12: data[12],
      EILine13: data[13],
      EILine14: data[14],
      EILine15: data[15],
      EILine16: data[16],
      EILine17: data[17],
      EILine18: data[18],
      EILine19: data[19],
      EILine20: data[20],
      EILine21: data[21],
      EILine22: data[22],
      EILine23: data[23],
      EILine24: data[24],
      EILine25: data[25],
      EILine26: data[26],
      EILine27: data[27],
      EILine28: data[28],
      EILine29: data[29],
      EILine30: data[30],
      EILine31: data[31],
      EILine32: data[32],
      EILine33: data[33],
      EILine34: data[34],
      EILine35: data[35],
      EILine36: data[36],
      EILine37: data[37],
      EILine38: data[38],
      EILine39: data[39],
      EILine40: data[40],
      EILine41: data[41],
      EILine42: data[42],
      EILine43: data[43],
      EILine44: data[44],
      EILine45: data[45],
      EILine46: data[46],
      EILine47: data[47],
      EILine48: data[48],
      EILine49: data[49]
    }

    const { aggregate: newAggregate, industries: newIndustries } = EIFormatter({ year, eiLines })

    const { aggregate, industries } = EIs

    let index = 0
    for (const industry of newAggregate) {
      if (!aggregate[0]) {
        EIs.aggregate = newAggregate
      } else {
        industry.values = [...aggregate[index].values, ...industry.values]
        EIs.aggregate[index] = industry
        index++
      }
    }

    if (year >= 2020) {
      let index = 0
      for (const industry of newIndustries) {
        if (!industries[0]) {
          EIs.aggregate = newIndustries
        } else {
          industry.values = [...industries[index].values, ...industry.values]
          EIs.industries[index] = industry
          index++
        }
      }
    }
  }

  await fs.writeFile(dest, JSON.stringify(EIs))

  response.status(200).json(EIs)
}
