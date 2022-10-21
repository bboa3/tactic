import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { CreditByPurposeLines, creditByPurposeFormatter } from '@src/creditByPurpose/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-purpose.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-purpose.json')

export interface CreditByPurpose {
  _id: string
  name: string
  type: string
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

  const filterData = (row: number[]) => row.splice(1)

  const creditByPurposeLines: CreditByPurposeLines = {
    creditByPurposeLine4: filterData(data[4]),
    creditByPurposeLine12: filterData(data[12]),
    creditByPurposeLine13: filterData(data[13]),
    creditByPurposeLine14: filterData(data[14]),
    creditByPurposeLine15: filterData(data[15]),
    creditByPurposeLine18: filterData(data[18]),
    creditByPurposeLine24: filterData(data[24]),
    creditByPurposeLine25: filterData(data[25]),
    creditByPurposeLine26: filterData(data[26]),
    creditByPurposeLine27: filterData(data[27]),
    creditByPurposeLine28: filterData(data[28]),
    creditByPurposeLine33: filterData(data[33]),
    creditByPurposeLine34: filterData(data[34]),
    creditByPurposeLine38: filterData(data[38])  }

  const formatted = creditByPurposeFormatter({ creditByPurposeLines })

  await fs.writeFile(dest, JSON.stringify(formatted))

  response.status(200).json(formatted)
}
