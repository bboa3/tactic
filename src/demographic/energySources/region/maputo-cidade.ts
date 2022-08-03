import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getMaputoCidade = async (data: any) => {
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