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
    'DISTRITO Cidade de Tete': getPeople(data[87]),
    'DISTRITO Angonia': getPeople(data[88]),
    'DISTRITO Cahora-Bassa': getPeople(data[89]),
    'DISTRITO Changara': getPeople(data[90]),
    'DISTRITO Chifunde': getPeople(data[91]),
    'DISTRITO Chiuta': getPeople(data[92]),
    'DISTRITO Macanga': getPeople(data[93]),
    'DISTRITO Magoe': getPeople(data[94]),
    'DISTRITO Maravia': getPeople(data[95]),
    'DISTRITO Moatize': getPeople(data[96]),
    'DISTRITO Mutarara': getPeople(data[97]),
    'DISTRITO Tsangano': getPeople(data[98]),
    'DISTRITO Zumbo': getPeople(data[99]),
    'DISTRITO Doa': getPeople(data[100]),
    'DISTRITO Marara': getPeople(data[101])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}