import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { countTotal } from "@src/demographic/count-total"
import { getZambezia } from "@src/demographic/region/zambezia"
import { getNiassa } from "./region/niassa"
import { getCaboDelgado } from "./region/cabo-delgado"
import { getNampula } from "./region/nampula"
import { getTete } from "./region/tete"
import { getManica } from "./region/manica"
import { getSofala } from "./region/sofala"
import { getInhambane } from "./region/inhambane"
import { getGaza } from "./region/gaza"
import { getMaputoProvincia } from "./region/maputo-provincia"
import { getMaputoCidade } from "./region/maputo-cidade"

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

export const demographics = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[12];
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[firstTabName], {
    blankrows: false,
    header: 1,
  })

  const people = await getMaputoCidade(data)

  response.status(200).json(countTotal(people))
}