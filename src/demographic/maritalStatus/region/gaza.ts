import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'marital-status.json')

export const getGaza = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        Solteiros: pop[8],
        Casados: pop[9],
        'União Marital':pop[10],
        'Divorciados/Separados': pop[11],
        Viúvos: pop[12]
      },
      mulheres: {
        Solteiras: pop[14],
        Casadas: pop[15],
        'União Marital': pop[16],
        'Divorciadas/Separadas': pop[17],
        Viúvas: pop[18]
      }
    }
  }

  const people = {
    'DISTRITO DE XAI-XAI': getPeople(data[153]),
    'DISTRITO BILENE': getPeople(data[154]),
    'DISTRITO de CHIBUTO': getPeople(data[155]),
    'DISTRITO CHICUALACUALA': getPeople(data[156]),
    'DISTRITO CHIGUBO': getPeople(data[157]),
    'DISTRITO Chokwe': getPeople(data[158]),
    'DISTRITO Guija': getPeople(data[159]),
    'DISTRITO Mabalane': getPeople(data[160]),
    'DISTRITO Mandlakaze': getPeople(data[161]),
    'DISTRITO Massangena': getPeople(data[162]),
    'DISTRITO Massingir': getPeople(data[163]),
    'DISTRITO Limpopo': getPeople(data[164]),
    'DISTRITO Chongoene': getPeople(data[165]),
    'DISTRITO Mapai': getPeople(data[166])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['gaza'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}