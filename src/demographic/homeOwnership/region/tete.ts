import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getTete = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'casa própria': pop[2],
      'casa alugada': pop[3],
      'casa cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
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