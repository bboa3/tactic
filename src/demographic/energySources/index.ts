import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { getZambezia } from "@src/demographic/energySources/region/zambezia"
import { getNiassa } from "@src/demographic/energySources/region/niassa"
import { getCaboDelgado } from "@src/demographic/energySources/region/cabo-delgado"
import { getNampula } from "@src/demographic/energySources/region/nampula"
import { getTete } from "@src/demographic/energySources/region/tete"
import { getManica } from "@src/demographic/energySources/region/manica"
import { getSofala } from "@src/demographic/energySources/region/sofala"
import { getInhambane } from "@src/demographic/energySources/region/inhambane"
import { getGaza } from "@src/demographic/energySources/region/gaza"
import { getMaputoProvincia } from "@src/demographic/energySources/region/maputo-provincia"
import { getMaputoCidade } from "@src/demographic/energySources/region/maputo-cidade"

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'habitacao-atlas.xlsx');

export const energySources = async (_request: Request, response: Response) => {
  const file = xlsx.readFile(path);

  const firstTabName = file.SheetNames[7];
    
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