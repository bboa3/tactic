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
    'distrito nacala velha': getPeople(data[57]),
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