import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getMaputoProvincia = async (data: any) => {
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
    'cidade da matola': getPeople(data[160]),
    'boane': getPeople(data[161]),
    'magude': getPeople(data[162]),
    'manhica': getPeople(data[163]),
    'marracuene': getPeople(data[164]),
    'matutuine': getPeople(data[165]),
    'moamba': getPeople(data[166]),
    'namaacha': getPeople(data[167])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}