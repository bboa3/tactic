import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getCaboDelgado = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'canalizada',
        value: pop[2]
      },
      {
        name: 'fontanário/torneira pública',
        value: pop[6]
      },
      {
        name: 'furo/poço com bomba manual',
        value: pop[7]
      },
      {
        name: 'poço sem bomba manual',
        value: pop[8]
      },
      {
        name: 'nascente/rio/lago/lagoa',
        value: pop[11]
      },
      {
        name: 'chuva',
        value: pop[14]
      },
      {
        name: 'tanques camiões/carregada em tambores',
        value: pop[15]
      },
      {
        name: 'mineral/engarrafada',
        value: pop[16]
      },
      {
        name: 'outra',
        value: pop[17]
      },
      {
        name: 'desconhecida',
        value: pop[18]
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
    'mocimboa da Praia': getPeople(data[30]),
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