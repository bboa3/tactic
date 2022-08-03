import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getNiassa = async (data: any) => {
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
    'lichinga': getPeople(data[7]),
    'cuamba': getPeople(data[8]),
    'lago': getPeople(data[9]),
    'chimbunila': getPeople(data[10]),
    'majune': getPeople(data[11]),
    'mandimba': getPeople(data[12]),
    'marrupa': getPeople(data[13]),
    'maua': getPeople(data[14]), 
    'mavago': getPeople(data[15]),
    'mecanhelas': getPeople(data[16]),
    'mecula': getPeople(data[17]),
    'metarica': getPeople(data[18]),
    'muembe': getPeople(data[19]),
    'ngauma': getPeople(data[20]),
    'nipepe': getPeople(data[21]),
    'sanga': getPeople(data[22])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}