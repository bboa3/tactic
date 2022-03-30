import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getSofala = async (data: any) => {
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
    'distrito cidade da beira': getPeople(data[116]),
    'distrito buzi': getPeople(data[117]),
    'distrito caia': getPeople(data[118]),
    'distrito chemba': getPeople(data[119]),
    'distrito cheringoma': getPeople(data[120]),
    'distrito chibabava': getPeople(data[121]),
    'distrito dondo': getPeople(data[122]),
    'distrito gorongosa': getPeople(data[123]),
    'distrito machanga': getPeople(data[124]),
    'distrito maringue': getPeople(data[125]),
    'distrito marromeu': getPeople(data[126]),
    'distrito muanza': getPeople(data[127]),
    'distrito nhamatanda': getPeople(data[128])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}