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
    'DISTRITO Chimoio': getPeople(data[108]),
    'DISTRITO Barue': getPeople(data[109]),
    'DISTRITO Gondola': getPeople(data[110]),
    'DISTRITO Guro': getPeople(data[111]),
    'DISTRITO Machaze': getPeople(data[112]),
    'DISTRITO Macossa': getPeople(data[113]),
    'DISTRITO Manica': getPeople(data[114]),
    'DISTRITO Mussorize': getPeople(data[115]),
    'DISTRITO Sussundenga': getPeople(data[116]),
    'DISTRITO Tambara': getPeople(data[117]),
    'DISTRITO Macate': getPeople(data[118]),
    'DISTRITO Vanduzi': getPeople(data[119]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}