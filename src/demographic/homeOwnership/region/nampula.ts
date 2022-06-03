import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getNampula = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'própria': pop[2],
      'alugada': pop[3],
      'cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
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
    'nacala Velha': getPeople(data[57]),
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