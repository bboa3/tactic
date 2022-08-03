import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getTete = async (data: any) => {
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
    'cidade de tete': getPeople(data[92]),
    'angonia': getPeople(data[93]),
    'cahora-Bassa': getPeople(data[94]),
    'changara': getPeople(data[95]),
    'chifunde': getPeople(data[96]),
    'chiuta': getPeople(data[97]),
    'macanga': getPeople(data[98]),
    'magoe': getPeople(data[99]),
    'maravia': getPeople(data[100]),
    'moatize': getPeople(data[101]),
    'mutarara': getPeople(data[102]),
    'tsangano': getPeople(data[103]),
    'zumbo': getPeople(data[104]),
    'doa': getPeople(data[105]),
    'marara': getPeople(data[106])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}