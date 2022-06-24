import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { BusinessConfidenceData, businessConfidenceFormatter } from "@src/businessConfidence/formatter"

const path = resolve(__dirname, '..', '..', 'files', 'businessConfidence', 'confiaca-empresarial.xls')
const dest = resolve(__dirname, '..', '..', 'files', 'businessConfidence', 'business-confidence.json')

export const businessConfidence = async (_request: Request, response: Response) => {
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
    line4: removeFirstElement(data[4]),
    line5: removeFirstElement(data[5]),
    line7: removeFirstElement(data[7]),
    line8: removeFirstElement(data[8]),
    line9: removeFirstElement(data[9]),
    line10: removeFirstElement(data[10]),
    line12: removeFirstElement(data[12]),
    line13: removeFirstElement(data[13]),
    line14: removeFirstElement(data[14]),
    line15: removeFirstElement(data[15]),
    line17: removeFirstElement(data[17]),
    line18: removeFirstElement(data[18]),
    line19: removeFirstElement(data[19]),
    line20: removeFirstElement(data[20]),
    line22: removeFirstElement(data[22]),
    line23: removeFirstElement(data[23]),
    line24: removeFirstElement(data[24]),
    line25: removeFirstElement(data[25]),
  }

  const businessConfidence = businessConfidenceFormatter(businessConfidenceData)

  await fs.writeFile(dest, JSON.stringify(businessConfidence))

  response.status(200).json(businessConfidence)
}
