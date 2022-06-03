import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getMaputoCidade = async (data: any) => {
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
    'kampfumo': getPeople(data[169]),
    'nlhamankulu': getPeople(data[170]),
    'kaMaxakeni': getPeople(data[171]),
    'kamavota': getPeople(data[172]),
    'kaMubukwana': getPeople(data[173]),
    'katembe': getPeople(data[174]),
    'kanyaka': getPeople(data[175]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo cidade'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}