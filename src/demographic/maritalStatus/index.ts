import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { getZambezia } from "@src/demographic/maritalStatus/region/zambezia"
import { getNiassa } from "@src/demographic/maritalStatus/region/niassa"
import { getCaboDelgado } from "@src/demographic/maritalStatus/region/cabo-delgado"
import { getNampula } from "@src/demographic/maritalStatus/region/nampula"
import { getTete } from "@src/demographic/maritalStatus/region/tete"
import { getManica } from "@src/demographic/maritalStatus/region/manica"
import { getSofala } from "@src/demographic/maritalStatus/region/sofala"
import { getInhambane } from "@src/demographic/maritalStatus/region/inhambane"
import { getGaza } from "@src/demographic/maritalStatus/region/gaza"
import { getMaputoProvincia } from "@src/demographic/maritalStatus/region/maputo-provincia"
import { getMaputoCidade } from "@src/demographic/maritalStatus/region/maputo-cidade"

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

export const meritalStatus = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[1];
    
  const data: any = xlsx.utils.sheet_to_json(file.Sheets[firstTabName], {
    blankrows: false,
    header: 1,
  })

  const niassa = await getNiassa(data)
  const caboDelgado = await getCaboDelgado(data)
  const nampula = await getNampula(data)
  const zambezia = await getZambezia(data)
  const tete = await getTete(data)
  const manica = await getManica(data)
  const sofala = await getSofala(data)
  const inhambane = await getInhambane(data)
  const gaza = await getGaza(data)
  const maputoProvincia = await getMaputoProvincia(data)
  const maputoCidade = await getMaputoCidade(data)

  response.status(200).json(maputoCidade)
}