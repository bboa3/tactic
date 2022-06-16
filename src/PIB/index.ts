import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { PIBData, PIBFormatter } from "@src/PIB/formatter"

const path = resolve(__dirname, '..', '..', 'files', 'PIB', 'optica-de-produção.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'PIB', 'pib.json')

export const PIB = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[2]
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  }) 

  const years: number[] = data[2].filter((_, index) => index !== 0)
  const pibData: PIBData =  {
    pibLine3: data[3],
    pibLine4: data[4],
    pibLine5: data[5],
    pibLine6: data[6],
    pibLine7: data[7],
    pibLine8: data[8],
    pibLine9: data[9],
    pibLine10: data[10],
    pibLine11: data[11],
    pibLine12: data[12],
    pibLine13: data[13],
    pibLine14: data[14],
    pibLine15: data[15],
    pibLine16: data[16],
    pibLine17: data[17],
    pibLine18: data[18],
    pibLine19: data[19],
    pibLine20: data[20],
    pibLine21: data[21],
    pibLine22: data[22],
    pibLine23: data[23],
    pibLine24: data[24],
    pibLine25: data[25],
    pibLine26: data[26],
    pibLine27: data[27],
    pibLine28: data[28],
    pibLine29: data[29]
  }

  const PIB = PIBFormatter(years, pibData)

  await fs.writeFile(dest, JSON.stringify(PIB))

  response.status(200).json(PIB)
}
