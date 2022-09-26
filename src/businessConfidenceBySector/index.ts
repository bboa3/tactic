import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { BusinessConfidenceData, businessConfidenceFormatter } from "@src/businessConfidenceBySector/formatter"

const path = resolve(__dirname, '..', '..', 'files', 'businessConfidence', 'confiaca-empresarial.xls')
const dest = resolve(__dirname, '..', '..', 'files', 'businessConfidence', 'business-confidence-by-sector.json')

export const businessConfidenceBySector = async (_request: Request, response: Response) => {
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
    line2: removeFirstElement(data[2]),
    line3: removeFirstElement(data[3]),
    line4: removeFirstElement(data[4])
  }

  const businessConfidence = businessConfidenceFormatter(businessConfidenceData)

  await fs.writeFile(dest, JSON.stringify(businessConfidence))

  response.status(200).json(businessConfidence)
}
