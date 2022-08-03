import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getTete = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'electricidade',
        value: pop[2]
      },
      {
        name: 'gerador/placa solar',
        value: pop[3]
      },
      {
        name: 'gás',
        value: pop[4]
      },
      {
        name: 'petróleo/parafina/querosene',
        value: pop[5]
      },
      {
        name: 'velas',
        value: pop[6]
      },
      {
        name: 'baterias',
        value: pop[7]
      },
      {
        name: 'lenha',
        value: pop[8]
      },
      {
        name: 'pilhas',
        value: pop[9]
      },
      {
        name: 'outras',
        value: pop[10]
      },
      {
        name: 'desconhecida',
        value: pop[11]
      }
    ]
  }

  const people = {
    'cidade de tete': getPeople(data[87]),
    'angonia': getPeople(data[88]),
    'cahora-bassa': getPeople(data[89]),
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