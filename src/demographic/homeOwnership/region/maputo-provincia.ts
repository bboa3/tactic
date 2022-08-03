import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getMaputoProvincia = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'própria',
        value: pop[2]
      },
      {
        name: 'alugada',
        value: pop[3]
      },
      {
        name: 'cedida/emprestada temporariamente',
        value: pop[4]
      },
      {
        name: 'outra',
        value: pop[5]
      },
      {
        name: 'desconhecido',
        value: pop[6]
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