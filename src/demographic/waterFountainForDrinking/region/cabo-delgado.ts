import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getCaboDelgado = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'canalizada': pop[2],
      'fontanário/torneira pública': pop[6],
      'furo/poço com bomba manual': pop[7],
      'poço sem bomba manual': pop[8],
      'nascente/rio/lago/lagoa': pop[11],
      'chuva': pop[14],
      'tanques camiões/carregada em tambores': pop[15],
      'mineral/engarrafada': pop[16],
      'outra': pop[17],
      'desconhecida': pop[18]
    }
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