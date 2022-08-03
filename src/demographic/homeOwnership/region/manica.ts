import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getManica = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'própria',
        value: pop[2]
      },
      {
        name: 'alugada',
        value: pop[3]
      },
      {
        name: 'cedida/emprestada temporariamente',
        value: pop[4]
      },
      {
        name: 'outra',
        value: pop[5]
      },
      {
        name: 'desconhecido',
        value: pop[6]
      }
    ]
  }


  const people = {
    'chimoio': getPeople(data[103]),
    'barue': getPeople(data[104]),
    'gondola': getPeople(data[105]),
    'guro': getPeople(data[106]),
    'machaze': getPeople(data[107]),
    'macossa': getPeople(data[108]),
    'manica': getPeople(data[109]),
    'mussorize': getPeople(data[110]),
    'sussundenga': getPeople(data[111]),
    'tambara': getPeople(data[112]),
    'macate': getPeople(data[113]),
    'vanduzi': getPeople(data[114]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}