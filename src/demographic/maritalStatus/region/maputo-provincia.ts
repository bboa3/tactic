import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getMaputoProvincia = async (data: any) => {
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
    'cidade da matola': getPeople(data[169]),
    'boane': getPeople(data[170]),
    'magude': getPeople(data[171]),
    'manhica': getPeople(data[172]),
    'marracuene': getPeople(data[173]),
    'matutuine': getPeople(data[174]),
    'moamba': getPeople(data[175]),
    'namaacha': getPeople(data[176])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}