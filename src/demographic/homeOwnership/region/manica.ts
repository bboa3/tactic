import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getManica = async (data: any) => {
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
    'DISTRITO Chimoio': getPeople(data[103]),
    'DISTRITO Barue': getPeople(data[104]),
    'DISTRITO Gondola': getPeople(data[105]),
    'DISTRITO Guro': getPeople(data[106]),
    'DISTRITO Machaze': getPeople(data[107]),
    'DISTRITO Macossa': getPeople(data[108]),
    'DISTRITO Manica': getPeople(data[109]),
    'DISTRITO Mussorize': getPeople(data[110]),
    'DISTRITO Sussundenga': getPeople(data[111]),
    'DISTRITO Tambara': getPeople(data[112]),
    'DISTRITO Macate': getPeople(data[113]),
    'DISTRITO Vanduzi': getPeople(data[114]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}