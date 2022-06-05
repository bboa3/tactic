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
    'xai-xai': getPeople(data[145]),
    'bilene': getPeople(data[146]),
    'chibuto': getPeople(data[147]),
    'chicualacuala': getPeople(data[148]),
    'chugubo': getPeople(data[149]),
    'chokwe': getPeople(data[150]),
    'guija': getPeople(data[151]),
    'mabalane': getPeople(data[152]),
    'manjacaze': getPeople(data[153]),
    'massangena': getPeople(data[154]),
    'massingir': getPeople(data[155]),
    'limpopo': getPeople(data[156]),
    'chongoene': getPeople(data[157]),
    'mapai': getPeople(data[158])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['gaza'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}