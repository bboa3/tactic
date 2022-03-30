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
    'DISTRITO Cidade de Pemba': getPeople(data[24]),
    'DISTRITO Ancuabe': getPeople(data[25]),
    'DISTRITO Balama': getPeople(data[26]),
    'DISTRITO Chiure': getPeople(data[27]),
    'DISTRITO Ibo': getPeople(data[28]),
    'DISTRITO Macomia': getPeople(data[29]),
    'DISTRITO Mecufi': getPeople(data[30]),
    'DISTRITO Meluco': getPeople(data[31]),
    'DISTRITO Mocimboa da Praia': getPeople(data[32]),
    'DISTRITO Montepuez': getPeople(data[33]),
    'DISTRITO Mueda': getPeople(data[34]),
    'DISTRITO Muidumbe': getPeople(data[35]),
    'DISTRITO Namuno': getPeople(data[36]),
    'DISTRITO Nangade': getPeople(data[37]),
    'DISTRITO Palma': getPeople(data[38]),
    'DISTRITO Metuge': getPeople(data[39]),
    'DISTRITO Quissanga': getPeople(data[40])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['cabo delgado'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}