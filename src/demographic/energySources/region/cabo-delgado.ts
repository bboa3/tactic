import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getCaboDelgado = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'electricidade',
        value: pop[2]
      },
      {
        name: 'gerador/placa solar',
        value: pop[3]
      },
      {
        name: 'gás',
        value: pop[4]
      },
      {
        name: 'petróleo/parafina/querosene',
        value: pop[5]
      },
      {
        name: 'velas',
        value: pop[6]
      },
      {
        name: 'baterias',
        value: pop[7]
      },
      {
        name: 'lenha',
        value: pop[8]
      },
      {
        name: 'pilhas',
        value: pop[9]
      },
      {
        name: 'outras',
        value: pop[10]
      },
      {
        name: 'desconhecida',
        value: pop[11]
      }
    ]
  }

  const people = {
    'cidade de pemba': getPeople(data[22]),
    'ancuabe': getPeople(data[23]),
    'balama': getPeople(data[24]),
    'chiure': getPeople(data[25]),
    'ibo': getPeople(data[26]),
    'macomia': getPeople(data[27]),
    'mecufi': getPeople(data[28]),
    'meluco': getPeople(data[29]),
    'mocimboa da praia': getPeople(data[30]),
    'montepuez': getPeople(data[31]),
    'mueda': getPeople(data[32]),
    'muidumbe': getPeople(data[33]),
    'namuno': getPeople(data[34]),
    'nangade': getPeople(data[35]),
    'palma': getPeople(data[36]),
    'metuge': getPeople(data[37]),
    'quissanga': getPeople(data[38])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['cabo delgado'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}