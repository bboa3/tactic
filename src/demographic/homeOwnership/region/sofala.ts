import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getSofala = async (data: any) => {
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
    'cidade da beira': getPeople(data[116]),
    'buzi': getPeople(data[117]),
    'caia': getPeople(data[118]),
    'chemba': getPeople(data[119]),
    'cheringoma': getPeople(data[120]),
    'chibabava': getPeople(data[121]),
    'dondo': getPeople(data[122]),
    'gorongosa': getPeople(data[123]),
    'machanga': getPeople(data[124]),
    'maringue': getPeople(data[125]),
    'marromeu': getPeople(data[126]),
    'muanza': getPeople(data[127]),
    'nhamatanda': getPeople(data[128])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}