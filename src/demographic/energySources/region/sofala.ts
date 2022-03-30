import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getSofala = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'electricidade': pop[2],
      'gerador/placa solar': pop[3],
      'gás': pop[4],
      'petróleoa/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
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