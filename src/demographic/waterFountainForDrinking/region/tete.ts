import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getTete = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'canalizada': pop[2],
      'fontanário/torneira pública': pop[6],
      'furo/poço com bomba manual': pop[7],
      'poço sem bomba manual': pop[8],
      'nascente/rio/lago/lagoa': pop[11],
      'chuva': pop[14],
      'tanques camiões/carregada em tambores': pop[15],
      'mineral/engarrafada': pop[16],
      'outra': pop[17],
      'desconhecida': pop[18]
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