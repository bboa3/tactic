import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getMaputoProvincia = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'casa própria': pop[2],
      'casa alugada': pop[3],
      'casa cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
    }
  }

  const people = {
    'DISTRITO Cidade da Matola': getPeople(data[160]),
    'DISTRITO Boane': getPeople(data[161]),
    'DISTRITO Magude': getPeople(data[162]),
    'DISTRITO Manhica': getPeople(data[163]),
    'Distrito de MARRACUENE': getPeople(data[164]),
    'Distrito MATUTUINE': getPeople(data[165]),
    'Distrito MOAMBA': getPeople(data[166]),
    'Distrito NAMAACHA': getPeople(data[167])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}