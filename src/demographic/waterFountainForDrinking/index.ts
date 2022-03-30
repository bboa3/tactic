import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { getZambezia } from "@src/demographic/waterFountainForDrinking/region/zambezia"
import { getNiassa } from "@src/demographic/waterFountainForDrinking/region/niassa"
import { getCaboDelgado } from "@src/demographic/waterFountainForDrinking/region/cabo-delgado"
import { getNampula } from "@src/demographic/waterFountainForDrinking/region/nampula"
import { getTete } from "@src/demographic/waterFountainForDrinking/region/tete"
import { getManica } from "@src/demographic/waterFountainForDrinking/region/manica"
import { getSofala } from "@src/demographic/waterFountainForDrinking/region/sofala"
import { getInhambane } from "@src/demographic/waterFountainForDrinking/region/inhambane"
import { getGaza } from "@src/demographic/waterFountainForDrinking/region/gaza"
import { getMaputoProvincia } from "@src/demographic/waterFountainForDrinking/region/maputo-provincia"
import { getMaputoCidade } from "@src/demographic/waterFountainForDrinking/region/maputo-cidade"

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'habitacao-atlas.xlsx');

export const waterFountainForDrinking = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[4];
    
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

  response.status(200).json({ 
    niassa,
    caboDelgado,
    nampula, 
    zambezia,
    tete,
    manica,
    sofala,
    inhambane,
    gaza,
    maputoProvincia,
    maputoCidade
  })
}