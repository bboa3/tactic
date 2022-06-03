import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getNampula = async (data: any) => {
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
    'cidade de nampula': getPeople(data[40]),
    'angoche': getPeople(data[41]),
    'erati': getPeople(data[42]),
    'ilha de mocambique': getPeople(data[43]),
    'lalaua': getPeople(data[44]),
    'malema': getPeople(data[45]),
    'meconta': getPeople(data[46]),
    'mecuburi': getPeople(data[47]),
    'memba': getPeople(data[48]),
    'mogincual': getPeople(data[49]),
    'mogovolas': getPeople(data[50]),
    'moma': getPeople(data[51]),
    'monapo': getPeople(data[52]),
    'mossuril': getPeople(data[53]),
    'muecate': getPeople(data[54]),
    'murrupula': getPeople(data[55]),
    'nacala Porto': getPeople(data[56]),
    'nacala velha': getPeople(data[57]),
    'nacaroa': getPeople(data[58]),
    'rapale': getPeople(data[59]),
    'ribaue': getPeople(data[60]),
    'larde': getPeople(data[61]),
    'liupo': getPeople(data[62])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['nampula'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}