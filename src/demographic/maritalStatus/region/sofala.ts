import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'sofala.json')

export const getSofala = async (data: any) => {
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
    'DISTRITO Cidade da Beira': getPeople(data[122]),
    'DISTRITO Buzi': getPeople(data[123]),
    'DISTRITO Caia': getPeople(data[124]),
    'DISTRITO Chemba': getPeople(data[125]),
    'DISTRITO Cheringoma': getPeople(data[126]),
    'DISTRITO Chibabava': getPeople(data[127]),
    'DISTRITO Dondo': getPeople(data[128]),
    'DISTRITO Gorongosa': getPeople(data[129]),
    'DISTRITO Machanga': getPeople(data[130]),
    'DISTRITO Maringue': getPeople(data[131]),
    'DISTRITO Marromeu': getPeople(data[132]),
    'DISTRITO Muanza': getPeople(data[133]),
    'DISTRITO Nhamatanda': getPeople(data[134])
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}