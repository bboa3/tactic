import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getTete = async (data: any) => {
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
    'cidade de tete': getPeople(data[87]),
    'angonia': getPeople(data[88]),
    'cahora-Bassa': getPeople(data[89]),
    'changara': getPeople(data[90]),
    'chifunde': getPeople(data[91]),
    'chiuta': getPeople(data[92]),
    'macanga': getPeople(data[93]),
    'magoe': getPeople(data[94]),
    'maravia': getPeople(data[95]),
    'moatize': getPeople(data[96]),
    'mutarara': getPeople(data[97]),
    'tsangano': getPeople(data[98]),
    'zumbo': getPeople(data[99]),
    'doa': getPeople(data[100]),
    'marara': getPeople(data[101])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}