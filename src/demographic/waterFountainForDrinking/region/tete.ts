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
    'distrito cidade de tete': getPeople(data[87]),
    'distrito angonia': getPeople(data[88]),
    'distrito cahora-Bassa': getPeople(data[89]),
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