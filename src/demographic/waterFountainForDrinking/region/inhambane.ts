import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getInhambane = async (data: any) => {
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
    'cidade de inhambane': getPeople(data[130]),
    'funhalouro': getPeople(data[131]),
    'govuro': getPeople(data[132]),
    'homoine': getPeople(data[133]),
    'inharrime': getPeople(data[134]),
    'inhassoro': getPeople(data[135]),
    'jangamo': getPeople(data[136]),
    'mabote': getPeople(data[137]),
    'massinga': getPeople(data[138]),
    'cidade de maxixe': getPeople(data[139]),
    'morrumbene': getPeople(data[140]),
    'panda': getPeople(data[141]),
    'vilankulo': getPeople(data[142]),
    'zavala': getPeople(data[143])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}