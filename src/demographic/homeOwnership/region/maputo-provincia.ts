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
    'DISTRITO Cidade da Matola': getPeople(data[168]),
    'DISTRITO Boane': getPeople(data[169]),
    'DISTRITO Magude': getPeople(data[170]),
    'DISTRITO Manhica': getPeople(data[171]),
    'Distrito de MARRACUENE': getPeople(data[172]),
    'Distrito MATUTUINE': getPeople(data[173]),
    'Distrito MOAMBA': getPeople(data[174]),
    'Distrito NAMAACHA': getPeople(data[175])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}