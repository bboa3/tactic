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
    'distrito cidade de nampula': getPeople(data[40]),
    'distrito angoche': getPeople(data[41]),
    'distrito erati': getPeople(data[42]),
    'distrito ilha de mocambique': getPeople(data[43]),
    'distrito lalaua': getPeople(data[44]),
    'distrito malema': getPeople(data[45]),
    'distrito meconta': getPeople(data[46]),
    'distrito mecuburi': getPeople(data[47]),
    'distrito memba': getPeople(data[48]),
    'distrito mogincual': getPeople(data[49]),
    'distrito mogovolas': getPeople(data[50]),
    'distrito moma': getPeople(data[51]),
    'distrito monapo': getPeople(data[52]),
    'distrito mossuril': getPeople(data[53]),
    'distrito muecate': getPeople(data[54]),
    'distrito murrupula': getPeople(data[55]),
    'distrito nacala Porto': getPeople(data[56]),
    'distrito nacala Velha': getPeople(data[57]),
    'distrito nacaroa': getPeople(data[58]),
    'distrito rapale': getPeople(data[59]),
    'distrito ribaue': getPeople(data[60]),
    'distrito larde': getPeople(data[61]),
    'distrito liupo': getPeople(data[62])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['nampula'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}