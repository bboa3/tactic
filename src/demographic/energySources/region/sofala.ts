import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getSofala = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'electricidade': pop[2],
      'gerador/placa solar': pop[3],
      'gás': pop[4],
      'petróleo/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
    }
  }

  const people = {
    'distrito cidade da Beira': getPeople(data[116]),
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