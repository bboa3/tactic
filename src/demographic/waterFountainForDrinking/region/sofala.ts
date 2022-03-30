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
    'DISTRITO Cidade da Beira': getPeople(data[116]),
    'DISTRITO Buzi': getPeople(data[117]),
    'DISTRITO Caia': getPeople(data[118]),
    'DISTRITO Chemba': getPeople(data[119]),
    'DISTRITO Cheringoma': getPeople(data[120]),
    'DISTRITO Chibabava': getPeople(data[121]),
    'DISTRITO Dondo': getPeople(data[122]),
    'DISTRITO Gorongosa': getPeople(data[123]),
    'DISTRITO Machanga': getPeople(data[124]),
    'DISTRITO Maringue': getPeople(data[125]),
    'DISTRITO Marromeu': getPeople(data[126]),
    'DISTRITO Muanza': getPeople(data[127]),
    'DISTRITO Nhamatanda': getPeople(data[128])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}