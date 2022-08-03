import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getMaputoCidade = async (data: any) => {
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
    'kampfumo': getPeople(data[178]),
    'nlhamankulu': getPeople(data[179]),
    'kaMaxakeni': getPeople(data[180]),
    'kamavota': getPeople(data[181]),
    'kaMubukwana': getPeople(data[182]),
    'katembe': getPeople(data[183]),
    'kanyaka': getPeople(data[184]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo cidade'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}