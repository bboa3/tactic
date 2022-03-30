import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getCaboDelgado = async (data: any) => {
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
    'distrito cidade de pemba': getPeople(data[22]),
    'distrito ancuabe': getPeople(data[23]),
    'distrito balama': getPeople(data[24]),
    'distrito chiure': getPeople(data[25]),
    'distrito ibo': getPeople(data[26]),
    'distrito macomia': getPeople(data[27]),
    'distrito mecufi': getPeople(data[28]),
    'distrito meluco': getPeople(data[29]),
    'distrito mocimboa da Praia': getPeople(data[30]),
    'distrito montepuez': getPeople(data[31]),
    'distrito mueda': getPeople(data[32]),
    'distrito muidumbe': getPeople(data[33]),
    'distrito namuno': getPeople(data[34]),
    'distrito nangade': getPeople(data[35]),
    'distrito palma': getPeople(data[36]),
    'distrito metuge': getPeople(data[37]),
    'distrito quissanga': getPeople(data[38])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['cabo delgado'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}