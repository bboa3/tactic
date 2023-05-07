import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { CreditByPurposeLines, creditByPurposeFormatter } from '@src/creditByPurpose/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-purpose.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-purpose.json')

interface Locale {
  pt: string
  en: string
}

export interface CreditByPurpose {
  _id: string
  name: Locale
  type: Locale
  unit: string
  values: {
    date: {
      year: number
      month: number
    }
    circul: number
    investment: number
    total: number
  }[],
}

export const creditByPurpose = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[0]

  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  })


  const filterData = (row: number[]) => row.splice(6)

  const creditByPurposeLines: CreditByPurposeLines = {
    agriculture: filterData(data[4]),
    livestock: filterData(data[12]),
    silvicultAndForestExpl: filterData(data[13]),
    fisheries: filterData(data[14]),
    extractiveIndustry: filterData(data[15]),
    manufacturingIndustry: filterData(data[18]),
    electricityGasAndWater: filterData(data[24]),
    construction: filterData(data[25]),
    tourismIndustry: filterData(data[26]),
    trading: filterData(data[27]),
    transportAndCommunication: filterData(data[28]),
    financialInstitutions: filterData(data[33]),
    otherSector: filterData(data[34]),
    total: filterData(data[38])
  }

  const formatted = creditByPurposeFormatter({ creditByPurposeLines })

  await fs.writeFile(dest, JSON.stringify(formatted))

  response.status(200).json(formatted)
}
