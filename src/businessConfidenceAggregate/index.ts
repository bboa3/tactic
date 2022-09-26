import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { BusinessConfidenceData, businessConfidenceFormatter } from "@src/businessConfidenceAggregate/formatter"

const path = resolve(__dirname, '..', '..', 'files', 'businessConfidence', 'confiaca-empresarial.xls')
const dest = resolve(__dirname, '..', '..', 'files', 'businessConfidence', 'business-confidence-aggregate.json')

export const businessConfidenceAggregate = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[2]
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  }) 

  const removeFirstElement = (ns: number[]) => {
    const values = []
    let i = 0

    for (const n of ns) {
      if (i !== 0) {
        values.push(n)
      }
      i++
    }

    return values
  }

  const businessConfidenceData: BusinessConfidenceData =  {
    line5: removeFirstElement(data[5]),
    line10: removeFirstElement(data[10]),
    line15: removeFirstElement(data[15]),
    line20: removeFirstElement(data[20]),
    line25: removeFirstElement(data[25]),
  }

  const businessConfidence = businessConfidenceFormatter(businessConfidenceData)

  await fs.writeFile(dest, JSON.stringify(businessConfidence))

  response.status(200).json(businessConfidence)
}
