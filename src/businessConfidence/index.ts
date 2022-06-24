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

  const businessConfidenceData: BusinessConfidenceData =  {
    line2: data[2],
    line3: data[3],
    line4: data[4],
    line5: data[5],
    line7: data[7],
    line8: data[8],
    line9: data[9],
    line10: data[10],
    line12: data[12],
    line13: data[13],
    line14: data[14],
    line15: data[15],
    line17: data[17],
    line18: data[18],
    line19: data[19],
    line20: data[20],
    line22: data[22],
    line23: data[23],
    line24: data[24],
    line25: data[25],
  }

  const businessConfidence = businessConfidenceFormatter(businessConfidenceData)

  await fs.writeFile(dest, JSON.stringify(businessConfidence))

  response.status(200).json(businessConfidence)
}
