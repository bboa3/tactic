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
    'distrito cidade de inhambane': getPeople(data[130]),
    'distrito funhalouro': getPeople(data[131]),
    'distrito govuro': getPeople(data[132]),
    'distrito homoine': getPeople(data[133]),
    'distrito inharrime': getPeople(data[134]),
    'distrito inhassoro': getPeople(data[135]),
    'distrito jangamo': getPeople(data[136]),
    'distrito mabote': getPeople(data[137]),
    'distrito massinga': getPeople(data[138]),
    'distrito cidade de maxixe': getPeople(data[139]),
    'distrito morrumbene': getPeople(data[140]),
    'distrito panda': getPeople(data[141]),
    'distrito vilankulo': getPeople(data[142]),
    'distrito zavala': getPeople(data[143])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}