import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getCaboDelgado = async (data: any) => {
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
    'DISTRITO Cidade de Pemba': getPeople(data[22]),
    'DISTRITO Ancuabe': getPeople(data[23]),
    'DISTRITO Balama': getPeople(data[24]),
    'DISTRITO Chiure': getPeople(data[25]),
    'DISTRITO Ibo': getPeople(data[26]),
    'DISTRITO Macomia': getPeople(data[27]),
    'DISTRITO Mecufi': getPeople(data[28]),
    'DISTRITO Meluco': getPeople(data[29]),
    'DISTRITO Mocimboa da Praia': getPeople(data[30]),
    'DISTRITO Montepuez': getPeople(data[31]),
    'DISTRITO Mueda': getPeople(data[32]),
    'DISTRITO Muidumbe': getPeople(data[33]),
    'DISTRITO Namuno': getPeople(data[34]),
    'DISTRITO Nangade': getPeople(data[35]),
    'DISTRITO Palma': getPeople(data[36]),
    'DISTRITO Metuge': getPeople(data[37]),
    'DISTRITO Quissanga': getPeople(data[38])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['cabo delgado'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}