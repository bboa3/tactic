import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getTete = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'própria': pop[2],
      'alugada': pop[3],
      'cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
    }
  }

  const people = {
    'cidade de tete': getPeople(data[87]),
    'angonia': getPeople(data[88]),
    'cahora-Bassa': getPeople(data[89]),
    'changara': getPeople(data[90]),
    'chifunde': getPeople(data[91]),
    'chiuta': getPeople(data[92]),
    'macanga': getPeople(data[93]),
    'magoe': getPeople(data[94]),
    'maravia': getPeople(data[95]),
    'moatize': getPeople(data[96]),
    'mutarara': getPeople(data[97]),
    'tsangano': getPeople(data[98]),
    'zumbo': getPeople(data[99]),
    'doa': getPeople(data[100]),
    'marara': getPeople(data[101])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}