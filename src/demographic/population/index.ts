import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { countTotal } from "@src/demographic/population/count-total"
import { getGaza } from "./region/gaza"
import { getNampula } from "./region/nampula"
import { getTete } from "./region/tete"

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

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'population', 'moçambique-em-bairros.xlsx');

export const demographics = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[6];
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[firstTabName], {
    blankrows: false,
    header: 1,
  })

  const people = await getTete(data)

  response.status(200).json(countTotal(people))
}