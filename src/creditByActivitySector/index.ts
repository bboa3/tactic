import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { CreditByActivitySectorLines, creditByActivitySectorFormatter } from '@src/creditByActivitySector/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-activity-sector.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-activity-sector.json')

interface Locale {
  pt: string
  en: string
}

export interface CreditByActivitySector {
  _id: string
  name: Locale
  type: Locale
  unit: string
  values: {
    date: {
      year: number
      month: number
    },
    value: number
  }[],
}

export const creditByActivitySector = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[0]

  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  }) 

  const filterData = (row: number[]) => row.splice(5)

  const creditByActivitySectorLines: CreditByActivitySectorLines = {
    agriculture: filterData(data[4]),
    livestock: filterData(data[5]),
    silvicultAndForestExpl: filterData(data[6]),
    fisheries: filterData(data[7]),
    extractiveIndustry: filterData(data[8]),
    manufacturingIndustry: filterData(data[9]),
    electricityGasAndWater: filterData(data[10]),
    construction: filterData(data[11]),
    tourismIndustry: filterData(data[12]),
    trading: filterData(data[13]),
    transportAndCommunication: filterData(data[14]),
    financialInstitutions: filterData(data[15]),
    otherSector: filterData(data[16]),
    total: filterData(data[20])
  }

  const formatted = creditByActivitySectorFormatter({ creditByActivitySectorLines })


  await fs.writeFile(dest, JSON.stringify(formatted))

  response.status(200).json(formatted)
}
