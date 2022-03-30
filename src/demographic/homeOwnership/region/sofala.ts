import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getSofala = async (data: any) => {
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
    'DISTRITO Cidade da Beira': getPeople(data[122]),
    'DISTRITO Buzi': getPeople(data[123]),
    'DISTRITO Caia': getPeople(data[124]),
    'DISTRITO Chemba': getPeople(data[125]),
    'DISTRITO Cheringoma': getPeople(data[126]),
    'DISTRITO Chibabava': getPeople(data[127]),
    'DISTRITO Dondo': getPeople(data[128]),
    'DISTRITO Gorongosa': getPeople(data[129]),
    'DISTRITO Machanga': getPeople(data[130]),
    'DISTRITO Maringue': getPeople(data[131]),
    'DISTRITO Marromeu': getPeople(data[132]),
    'DISTRITO Muanza': getPeople(data[133]),
    'DISTRITO Nhamatanda': getPeople(data[134])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}