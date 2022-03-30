import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getGaza = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'canalizada': pop[2],
      'fontanário/torneira pública': pop[6],
      'furo/poço com bomba manual': pop[7],
      'poço sem bomba manual': pop[8],
      'nascente/rio/lago/lagoa': pop[11],
      'chuva': pop[14],
      'tanques camiões/carregada em tambores': pop[15],
      'mineral/engarrafada': pop[16],
      'outra': pop[17],
      'desconhecida': pop[18]
    }
  }

  const people = {
    'DISTRITO DE XAI-XAI': getPeople(data[145]),
    'DISTRITO BILENE': getPeople(data[146]),
    'DISTRITO de CHIBUTO': getPeople(data[147]),
    'DISTRITO CHICUALACUALA': getPeople(data[148]),
    'DISTRITO CHIGUBO': getPeople(data[149]),
    'DISTRITO Chokwe': getPeople(data[150]),
    'DISTRITO Guija': getPeople(data[151]),
    'DISTRITO Mabalane': getPeople(data[152]),
    'DISTRITO Mandlakaze': getPeople(data[153]),
    'DISTRITO Massangena': getPeople(data[154]),
    'DISTRITO Massingir': getPeople(data[155]),
    'DISTRITO Limpopo': getPeople(data[156]),
    'DISTRITO Chongoene': getPeople(data[157]),
    'DISTRITO Mapai': getPeople(data[158])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['gaza'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}