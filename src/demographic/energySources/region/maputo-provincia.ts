import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getMaputoProvincia = async (data: any) => {
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
    'cidade da matola': getPeople(data[160]),
    'boane': getPeople(data[161]),
    'magude': getPeople(data[162]),
    'manhica': getPeople(data[163]),
    'marracuene': getPeople(data[164]),
    'matutuine': getPeople(data[165]),
    'moamba': getPeople(data[166]),
    'namaacha': getPeople(data[167])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}