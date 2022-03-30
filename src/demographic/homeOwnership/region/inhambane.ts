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