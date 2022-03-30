import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getTete = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'electricidade': pop[2],
      'gerador/placa solar': pop[3],
      'gás': pop[4],
      'petróleoa/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
    }
  }

  const people = {
    'DISTRITO cidade de tete': getPeople(data[87]),
    'DISTRITO angonia': getPeople(data[88]),
    'DISTRITO cahora-bassa': getPeople(data[89]),
    'DISTRITO changara': getPeople(data[90]),
    'DISTRITO chifunde': getPeople(data[91]),
    'DISTRITO chiuta': getPeople(data[92]),
    'DISTRITO macanga': getPeople(data[93]),
    'DISTRITO magoe': getPeople(data[94]),
    'DISTRITO maravia': getPeople(data[95]),
    'DISTRITO moatize': getPeople(data[96]),
    'DISTRITO mutarara': getPeople(data[97]),
    'DISTRITO tsangano': getPeople(data[98]),
    'DISTRITO zumbo': getPeople(data[99]),
    'DISTRITO doa': getPeople(data[100]),
    'DISTRITO marara': getPeople(data[101])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}