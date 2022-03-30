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