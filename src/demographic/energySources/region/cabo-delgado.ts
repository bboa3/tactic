import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getCaboDelgado = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'electricidade': pop[2],
      'gerador/placa solar': pop[3],
      'gás': pop[4],
      'petróleo/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
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
    'distrito mocimboa da praia': getPeople(data[30]),
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