import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'casa própria': pop[2],
      'casa alugada': pop[3],
      'casa cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
    }
  }

  const people = {
    'DISTRITO Cidade de Inhambane': getPeople(data[130]),
    'DISTRITO Funhalouro': getPeople(data[131]),
    'DISTRITO Govuro': getPeople(data[132]),
    'DISTRITO Homoine': getPeople(data[133]),
    'DISTRITO Inharrime': getPeople(data[134]),
    'DISTRITO Inhassoro': getPeople(data[135]),
    'DISTRITO Jangamo': getPeople(data[136]),
    'DISTRITO Mabote': getPeople(data[137]),
    'DISTRITO Massinga': getPeople(data[138]),
    'DISTRITO Cidade de Maxixe': getPeople(data[139]),
    'DISTRITO Morrumbene': getPeople(data[140]),
    'DISTRITO Panda': getPeople(data[141]),
    'DISTRITO Vilankulo': getPeople(data[142]),
    'DISTRITO Zavala': getPeople(data[143])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['inhambane'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}