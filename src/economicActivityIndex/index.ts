import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { EAILines, EAIFormatter } from '@src/economicActivityIndex/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'economicActivityIndex', 'indice-de-actividade-economica.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'economicActivityIndex', 'eai.json')

export const economicActivityIndex = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName2016 = file.SheetNames[0]
  const tabName2017 = file.SheetNames[1]
  const tabName2018 = file.SheetNames[2]
  const tabName2019 = file.SheetNames[3]
  const tabName2020 = file.SheetNames[4]
  const tabName2021 = file.SheetNames[5]
  const tabName2022 = file.SheetNames[6]

  const tabNames = [
    tabName2019,
    tabName2020,
    tabName2021,
    tabName2022
  ]

  const EAIs = {
    aggregateIndex: [],
    industryIndex: []
  }

  for (const tabName of tabNames) {
    const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
      blankrows: false,
      header: 1,
    }) 

    const year = Number(tabName)

    const eaiLines: EAILines = {
      EAILine2: data[2],
      EAILine3: data[3],
      EAILine4: data[4],
      EAILine5: data[5],
      EAILine6: data[6],
      EAILine7: data[7],
      EAILine8: data[8],
      EAILine10: data[10],
      EAILine11: data[11],
      EAILine12: data[12],
      EAILine13: data[13],
      EAILine14: data[14],
      EAILine15: data[15],
      EAILine16: data[16],
      EAILine17: data[17],
      EAILine18: data[18],
      EAILine19: data[19],
      EAILine20: data[20],
      EAILine21: data[21],
      EAILine22: data[22],
      EAILine23: data[23],
      EAILine24: data[24],
      EAILine25: data[25],
      EAILine26: data[26],
      EAILine27: data[27],
      EAILine28: data[28],
      EAILine29: data[29],
      EAILine30: data[30],
      EAILine31: data[31],
      EAILine32: data[32],
      EAILine33: data[33],
      EAILine34: data[34],
      EAILine35: data[35],
      EAILine36: data[36],
      EAILine37: data[37],
      EAILine38: data[38],
      EAILine39: data[39],
      EAILine40: data[40],
      EAILine41: data[41],
      EAILine42: data[42],
      EAILine43: data[43],
      EAILine44: data[44],
      EAILine45: data[45],
      EAILine46: data[46],
      EAILine47: data[47],
      EAILine48: data[48],
      EAILine49: data[49],
    }

    const { aggregateIndex: newAggregateIndex, industryIndex: newIndustryIndex } = EAIFormatter({ year, eaiLines })
    

    const { aggregateIndex, industryIndex } = EAIs

    EAIs.aggregateIndex = [...aggregateIndex, ...newAggregateIndex]
    EAIs.industryIndex = [...industryIndex, ...newIndustryIndex]
  }

  await fs.writeFile(dest, JSON.stringify(EAIs))

  response.status(200).json(EAIs)
}
