import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { CreditByActivitySectorLines, creditByActivitySectorFormatter } from '@src/creditByActivitySector/formatter'

const path = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-activity-sector.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'credit', 'credit-by-activity-sector.json')

export interface CreditByActivitySector {
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

export const creditByActivitySector = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[2]


  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  }) 

  const filterData = (row: number[]) => row.splice(1)

  const creditByActivitySectorLines: CreditByActivitySectorLines = {
    creditByActivitySectorLine4: filterData(data[4]),
    creditByActivitySectorLine5: filterData(data[5]),
    creditByActivitySectorLine6: filterData(data[6]),
    creditByActivitySectorLine7: filterData(data[7]),
    creditByActivitySectorLine8: filterData(data[8]),
    creditByActivitySectorLine9: filterData(data[9]),
    creditByActivitySectorLine10: filterData(data[10]),
    creditByActivitySectorLine11: filterData(data[11])
  }

  const formatted = creditByActivitySectorFormatter({ creditByActivitySectorLines })


  await fs.writeFile(dest, JSON.stringify(formatted))

  response.status(200).json(formatted)
}
