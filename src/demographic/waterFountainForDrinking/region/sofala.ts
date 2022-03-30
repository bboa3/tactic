import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getSofala = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'canalizada': pop[2],
      'fontanário/torneira pública': pop[6],
      'furo/poço com bomba manual': pop[7],
      'poço sem bomba manual': pop[8],
      'nascente/rio/lago/lagoa': pop[11],
      'chuva': pop[14],
      'tanques camiões/carregada em tambores': pop[15],
      'mineral/engarrafada': pop[16],
      'outra': pop[17],
      'desconhecida': pop[18]
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