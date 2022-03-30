import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'marital-status.json')

export const getTete = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        solteiros: pop[8],
        sasados: pop[9],
        'união marital':pop[10],
        'divorciados/separados': pop[11],
        viúvos: pop[12]
      },
      mulheres: {
        solteiras: pop[14],
        sasadas: pop[15],
        'união marital': pop[16],
        'divorciadas/separadas': pop[17],
        viúvas: pop[18]
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

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}