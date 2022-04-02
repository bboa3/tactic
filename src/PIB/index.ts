import { Request, Response } from "express"
import { resolve } from "path"
import fs from 'fs/promises'
import xlsx from 'xlsx'

export interface Props {
  ages: string[]
  men: string[]
  women: string[]
}

export interface PeopleNum {
  idade: string,
  homens: number,
  mulheres: number
}

const path = resolve(__dirname, '..', '..', 'files', 'PIB', 'optica-de-produção.xlsx')
const dest = resolve(__dirname, '..', '..', 'files', 'PIB', 'pib.json')

export const PIB = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const tabName = file.SheetNames[0]
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[tabName], {
    blankrows: false,
    header: 1,
  }) 

  const years: string[] = data[2].filter((_value, index) => index !== 0)
  const pib: number[] = data[29].filter((_value, index) => index !== 0)

  const PIB = years.map((year, index) => {
    return {
      ano: Number(year),
      pib: pib[index]
    }
  })

  await fs.writeFile(dest, JSON.stringify(PIB))

  response.status(200).json(PIB)
}