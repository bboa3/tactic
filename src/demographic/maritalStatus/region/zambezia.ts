import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getZambezia = async (data: any) => {
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
    'quelimane': getPeople(data[68]),
    'alto molocue': getPeople(data[69]),
    'chinde': getPeople(data[70]),
    'gile': getPeople(data[71]),
    'gurue': getPeople(data[72]),
    'ile': getPeople(data[73]),
    'inhassunge': getPeople(data[74]),
    'lugela': getPeople(data[75]),
    'maganja da costa': getPeople(data[76]),
    'milange': getPeople(data[77]),
    'mocuba': getPeople(data[78]),
    'mopeia': getPeople(data[79]),
    'morrumbala': getPeople(data[80]),
    'namacurra': getPeople(data[81]),
    'namarroi': getPeople(data[82]),
    'nicoadala': getPeople(data[83]),
    'pebane': getPeople(data[84]),
    'derre': getPeople(data[85]),
    'luabo': getPeople(data[86]),
    'mocubela': getPeople(data[87]),
    'molumbo': getPeople(data[88]),
    'mulevala': getPeople(data[89]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['zambezia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}