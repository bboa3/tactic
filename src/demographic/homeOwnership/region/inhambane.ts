import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getInhambane = async (data: any) => {
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