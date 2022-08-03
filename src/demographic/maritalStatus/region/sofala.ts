import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getSofala = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        gender: 'homens',
        status: [
          {
            name: 'solteiros',
            value: pop[8]
          },
          {
            name: 'casados',
            value: pop[9]
          },
          {
            name: 'união marital',
            value: pop[10]
          },
          {
            name: 'divorciados/separados',
            value:  pop[11]
          },
          {
            name: 'viúvos',
            value: pop[12]
          },
        ]
      },
      {
        gender: 'mulheres',
        status: [
          {
            name: 'solteiras',
            value: pop[14]
          },
          {
            name: 'casadas',
            value: pop[15]
          },
          {
            name: 'união marital',
            value: pop[16]
          },
          {
            name: 'divorciadas/separadas',
            value:  pop[17]
          },
          {
            name: 'viúvas',
            value: pop[18]
          }
        ]
      }
    ]
  }

  const people = {
    'cidade da beira': getPeople(data[122]),
    'buzi': getPeople(data[123]),
    'caia': getPeople(data[124]),
    'chemba': getPeople(data[125]),
    'cheringoma': getPeople(data[126]),
    'chibabava': getPeople(data[127]),
    'dondo': getPeople(data[128]),
    'gorongosa': getPeople(data[129]),
    'machanga': getPeople(data[130]),
    'maringue': getPeople(data[131]),
    'marromeu': getPeople(data[132]),
    'muanza': getPeople(data[133]),
    'nhamatanda': getPeople(data[134])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}