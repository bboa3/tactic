import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { getCaboDelgado } from "@src/demographic/region/cabo-delgado"
import { getNiassa } from "@src/demographic/region/niassa"

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

const path = resolve(__dirname, '..', '..', 'files', 'demographic', 'moçambique-em-bairros.xlsx');

export const demographics = async (request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[3];
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[firstTabName], {
    blankrows: false,
    header: 1,
  })

  const people = await getCaboDelgado(data)

  response.status(200).json(people)
}