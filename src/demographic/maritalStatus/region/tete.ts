import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'tete.json')

export const getTete = async (data: any) => {
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
    'DISTRITO Cidade de Tete': getPeople(data[92]),
    'DISTRITO Angonia': getPeople(data[93]),
    'DISTRITO Cahora-Bassa': getPeople(data[94]),
    'DISTRITO Changara': getPeople(data[95]),
    'DISTRITO Chifunde': getPeople(data[96]),
    'DISTRITO Chiuta': getPeople(data[97]),
    'DISTRITO Macanga': getPeople(data[98]),
    'DISTRITO Magoe': getPeople(data[99]),
    'DISTRITO Maravia': getPeople(data[100]),
    'DISTRITO Moatize': getPeople(data[101]),
    'DISTRITO Mutarara': getPeople(data[102]),
    'DISTRITO Tsangano': getPeople(data[103]),
    'DISTRITO Zumbo': getPeople(data[104]),
    'DISTRITO Doa': getPeople(data[105]),
    'DISTRITO Marara': getPeople(data[106])
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}