import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'gaza.json')

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
    'DISTRITO DE XAI-XAI': getPeople(data[152]),
    'DISTRITO BILENE': getPeople(data[153]),
    'DISTRITO de CHIBUTO': getPeople(data[154]),
    'DISTRITO CHICUALACUALA': getPeople(data[155]),
    'DISTRITO CHIGUBO': getPeople(data[156]),
    'DISTRITO Chokwe': getPeople(data[157]),
    'DISTRITO Guija': getPeople(data[158]),
    'DISTRITO Mabalane': getPeople(data[159]),
    'DISTRITO Mandlakaze': getPeople(data[160]),
    'DISTRITO Massangena': getPeople(data[161]),
    'DISTRITO Massingir': getPeople(data[162]),
    'DISTRITO Limpopo': getPeople(data[163]),
    'DISTRITO Chongoene': getPeople(data[164]),
    'DISTRITO Mapai': getPeople(data[165])
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}