import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getGaza = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'canalizada',
        value: pop[2]
      },
      {
        name: 'fontanário/torneira pública',
        value: pop[6]
      },
      {
        name: 'furo/poço com bomba manual',
        value: pop[7]
      },
      {
        name: 'poço sem bomba manual',
        value: pop[8]
      },
      {
        name: 'nascente/rio/lago/lagoa',
        value: pop[11]
      },
      {
        name: 'chuva',
        value: pop[14]
      },
      {
        name: 'tanques camiões/carregada em tambores',
        value: pop[15]
      },
      {
        name: 'mineral/engarrafada',
        value: pop[16]
      },
      {
        name: 'outra',
        value: pop[17]
      },
      {
        name: 'desconhecida',
        value: pop[18]
      }
    ]
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