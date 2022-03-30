import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getNampula = async (data: any) => {
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
    'DISTRITO Cidade de Nampula': getPeople(data[43]),
    'DISTRITO Angoche': getPeople(data[44]),
    'DISTRITO Erati': getPeople(data[45]),
    'DISTRITO Ilha de Mocambique': getPeople(data[46]),
    'DISTRITO Lalaua': getPeople(data[47]),
    'DISTRITO Malema': getPeople(data[48]),
    'DISTRITO Meconta': getPeople(data[49]),
    'DISTRITO Mecuburi': getPeople(data[50]),
    'DISTRITO Memba': getPeople(data[51]),
    'DISTRITO Mogincual': getPeople(data[52]),
    'DISTRITO Mogovolas': getPeople(data[53]),
    'DISTRITO Moma': getPeople(data[54]),
    'DISTRITO Monapo': getPeople(data[55]),
    'DISTRITO Mossuril': getPeople(data[56]),
    'DISTRITO Muecate': getPeople(data[57]),
    'DISTRITO Murrupula': getPeople(data[58]),
    'DISTRITO Nacala Porto': getPeople(data[59]),
    'DISTRITO Nacala Velha': getPeople(data[60]),
    'DISTRITO Nacaroa': getPeople(data[61]),
    'DISTRITO Rapale': getPeople(data[62]),
    'DISTRITO Ribaue': getPeople(data[63]),
    'DISTRITO Larde': getPeople(data[64]),
    'DISTRITO Liupo': getPeople(data[65])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['nampula'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}