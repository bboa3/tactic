import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'manica.json')

export const getManica = async (data: any) => {
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
    'DISTRITO Chimoio': getPeople(data[108]),
    'DISTRITO Barue': getPeople(data[109]),
    'DISTRITO Gondola': getPeople(data[110]),
    'DISTRITO Guro': getPeople(data[111]),
    'DISTRITO Machaze': getPeople(data[112]),
    'DISTRITO Macossa': getPeople(data[113]),
    'DISTRITO Manica': getPeople(data[114]),
    'DISTRITO Mussorize': getPeople(data[115]),
    'DISTRITO Sussundenga': getPeople(data[116]),
    'DISTRITO Tambara': getPeople(data[117]),
    'DISTRITO Macate': getPeople(data[118]),
    'DISTRITO Vanduzi': getPeople(data[119]),
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}