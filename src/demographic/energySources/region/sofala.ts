import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getSofala = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'electricidade',
        value: pop[2]
      },
      {
        name: 'gerador/placa solar',
        value: pop[3]
      },
      {
        name: 'gás',
        value: pop[4]
      },
      {
        name: 'petróleo/parafina/querosene',
        value: pop[5]
      },
      {
        name: 'velas',
        value: pop[6]
      },
      {
        name: 'baterias',
        value: pop[7]
      },
      {
        name: 'lenha',
        value: pop[8]
      },
      {
        name: 'pilhas',
        value: pop[9]
      },
      {
        name: 'outras',
        value: pop[10]
      },
      {
        name: 'desconhecida',
        value: pop[11]
      }
    ]
  }

  const people = {
    'cidade da Beira': getPeople(data[116]),
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