import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { countTotal } from "@src/demographic/population/count-total"
import { getZambezia } from "@src/demographic/population/region/zambezia"
import { getNiassa } from "./region/niassa"
import { getCaboDelgado } from "@src/demographic/population/region/cabo-delgado"
import { getNampula } from "@src/demographic/population/region/nampula"
import { getTete } from "@src/demographic/population/region/tete"
import { getManica } from "@src/demographic/population/region/manica"
import { getSofala } from "@src/demographic/population/region/sofala"
import { getInhambane } from "@src/demographic/population/region/inhambane"
import { getGaza } from "@src/demographic/population/region/gaza"
import { getMaputoProvincia } from "@src/demographic/population/region/maputo-provincia"
import { getMaputoCidade } from "@src/demographic/population/region/maputo-cidade"

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

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'estado-civil.xlsx');

export const demographics = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[2];
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[firstTabName], {
    blankrows: false,
    header: 1,
  })

  // const niassa = await getNiassa(data)
  // const caboDelgado = await getCaboDelgado(data)
  // const nampula = await getNampula(data)
  // const zambezia = await getZambezia(data)
  // const tete = await getTete(data)
  // const manica = await getManica(data)
  // const sofala = await getSofala(data)
  // const inhambane = await getInhambane(data)
  // const gaza = await getGaza(data)
  // const maputoProvincia = await getMaputoProvincia(data)
  // const maputoCidade = await getMaputoCidade(data)

  response.status(200).json(data)
}