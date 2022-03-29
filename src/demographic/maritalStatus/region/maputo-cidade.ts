import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'maputo-cidade.json')

export const getMaputoCidade = async (data: any) => {
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
    'DISTRITO Kampfumo': getPeople(data[177]),
    'DISTRITO Nlhamankulu': getPeople(data[178]),
    'DISTRITO KaMaxakeni': getPeople(data[179]),
    'DISTRITO Kamavota': getPeople(data[180]),
    'DISTRITO KaMubukwana': getPeople(data[181]),
    'DISTRITO Katembe': getPeople(data[182]),
    'DISTRITO Kanyaka': getPeople(data[183]),
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}