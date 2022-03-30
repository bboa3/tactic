import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getMaputoProvincia = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'própria': pop[2],
      'alugada': pop[3],
      'cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
    }
  }

  const people = {
    'distrito cidade da matola': getPeople(data[160]),
    'distrito boane': getPeople(data[161]),
    'distrito magude': getPeople(data[162]),
    'distrito manhica': getPeople(data[163]),
    'distrito de marracuene': getPeople(data[164]),
    'distrito matutuine': getPeople(data[165]),
    'distrito moamba': getPeople(data[166]),
    'distrito namaacha': getPeople(data[167])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}