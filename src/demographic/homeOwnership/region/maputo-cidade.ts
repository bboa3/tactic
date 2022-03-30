import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getMaputoCidade = async (data: any) => {
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
    'DISTRITO Kampfumo': getPeople(data[169]),
    'DISTRITO Nlhamankulu': getPeople(data[170]),
    'DISTRITO KaMaxakeni': getPeople(data[171]),
    'DISTRITO Kamavota': getPeople(data[172]),
    'DISTRITO KaMubukwana': getPeople(data[173]),
    'DISTRITO Katembe': getPeople(data[174]),
    'DISTRITO Kanyaka': getPeople(data[175]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo cidade'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}