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
    'distrito cidade de tete': getPeople(data[87]),
    'distrito angonia': getPeople(data[88]),
    'distrito cahora-bassa': getPeople(data[89]),
    'distrito changara': getPeople(data[90]),
    'distrito chifunde': getPeople(data[91]),
    'distrito chiuta': getPeople(data[92]),
    'distrito macanga': getPeople(data[93]),
    'distrito magoe': getPeople(data[94]),
    'distrito maravia': getPeople(data[95]),
    'distrito moatize': getPeople(data[96]),
    'distrito mutarara': getPeople(data[97]),
    'distrito tsangano': getPeople(data[98]),
    'distrito zumbo': getPeople(data[99]),
    'distrito doa': getPeople(data[100]),
    'distrito marara': getPeople(data[101])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}