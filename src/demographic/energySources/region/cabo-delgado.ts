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
      'petróleoa/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
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