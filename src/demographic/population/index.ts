import { Request, Response } from "express"
import { resolve } from "path"
import xlsx from 'xlsx'
import { countTotal } from "@src/demographic/population/count-total"
import { getGaza } from "./region/gaza"
import { getNampula } from "./region/nampula"
import { getTete } from "./region/tete"
import { getCaboDelgado } from "./region/cabo-delgado"
import { getInhambane } from "./region/inhambane"
import { getManica } from "./region/manica"
import { getMaputoCidade } from "./region/maputo-cidade"
import { getMaputoProvincia } from "./region/maputo-provincia"
import { getNiassa } from "./region/niassa"
import { getSofala } from "./region/sofala"
import { getZambezia } from "./region/zambezia"

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

  const niassaTabName = file.SheetNames[2];
  const caboDelgadoTabName = file.SheetNames[3];
  const nampulaTabName = file.SheetNames[4];
  const zambeziaTabName = file.SheetNames[5];
  const teteTabName = file.SheetNames[6];
  const manicaTabName = file.SheetNames[7];
  const sofalaTabName = file.SheetNames[8];
  const inhambaneTabName = file.SheetNames[9];
  const gazaTabName = file.SheetNames[10];
  const maputoProvinciaTabName = file.SheetNames[11];
  const maputoCidadeTabName = file.SheetNames[12];
    
  const niassaData: any = xlsx.utils.sheet_to_json(file.Sheets[niassaTabName], {
    blankrows: false,
    header: 1,
  })  
  const caboDelgadoData: any = xlsx.utils.sheet_to_json(file.Sheets[caboDelgadoTabName], {
    blankrows: false,
    header: 1,
  })  
  const nampulaData: any = xlsx.utils.sheet_to_json(file.Sheets[nampulaTabName], {
    blankrows: false,
    header: 1,
  })  
  const zambeziaData: any = xlsx.utils.sheet_to_json(file.Sheets[zambeziaTabName], {
    blankrows: false,
    header: 1,
  })  
  const teteData: any = xlsx.utils.sheet_to_json(file.Sheets[teteTabName], {
    blankrows: false,
    header: 1,
  })  
  const manicaData: any = xlsx.utils.sheet_to_json(file.Sheets[manicaTabName], {
    blankrows: false,
    header: 1,
  })  
  const sofalaData: any = xlsx.utils.sheet_to_json(file.Sheets[sofalaTabName], {
    blankrows: false,
    header: 1,
  })  
  const inhambaneData: any = xlsx.utils.sheet_to_json(file.Sheets[inhambaneTabName], {
    blankrows: false,
    header: 1,
  })  
  const gazaData: any = xlsx.utils.sheet_to_json(file.Sheets[gazaTabName], {
    blankrows: false,
    header: 1,
  })  
  const maputoProvinciaData: any = xlsx.utils.sheet_to_json(file.Sheets[maputoProvinciaTabName], {
    blankrows: false,
    header: 1,
  })  
  const maputoCidadeData: any = xlsx.utils.sheet_to_json(file.Sheets[maputoCidadeTabName], {
    blankrows: false,
    header: 1,
  })

  const niassa = await getNiassa(niassaData)
  const caboDelgado = await getCaboDelgado(caboDelgadoData)
  const nampula = await getNampula(nampulaData)
  const zambezia = await getZambezia(zambeziaData)
  const tete = await getTete(teteData)
  const manica = await getManica(manicaData)
  const sofala = await getSofala(sofalaData)
  const inhambane = await getInhambane(inhambaneData)
  const gaza = await getGaza(gazaData)
  const maputoProvincia = await getMaputoProvincia(maputoProvinciaData)
  const maputoCidade = await getMaputoCidade(maputoCidadeData)

  response.status(200).json(countTotal(zambezia))
}