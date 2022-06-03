import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getManica = async (data: any) => {
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
    'chimoio': getPeople(data[103]),
    'barue': getPeople(data[104]),
    'gondola': getPeople(data[105]),
    'guro': getPeople(data[106]),
    'machaze': getPeople(data[107]),
    'macossa': getPeople(data[108]),
    'manica': getPeople(data[109]),
    'mussorize': getPeople(data[110]),
    'sussundenga': getPeople(data[111]),
    'tambara': getPeople(data[112]),
    'macate': getPeople(data[113]),
    'vanduzi': getPeople(data[114]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}