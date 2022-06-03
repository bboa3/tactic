import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getZambezia = async (data: any) => {
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
    'quelimane': getPeople(data[64]),
    'alto molocue': getPeople(data[65]),
    'chinde': getPeople(data[66]),
    'gile': getPeople(data[67]),
    'gurue': getPeople(data[68]),
    'ile': getPeople(data[69]),
    'inhassunge': getPeople(data[70]),
    'lugela': getPeople(data[71]),
    'maganja da Costa': getPeople(data[72]),
    'milange': getPeople(data[73]),
    'mocuba': getPeople(data[74]),
    'mopeia': getPeople(data[75]),
    'morrumbala': getPeople(data[76]),
    'namacurra': getPeople(data[77]),
    'namarroi': getPeople(data[78]),
    'nicoadala': getPeople(data[79]),
    'pebane': getPeople(data[80]),
    'derre': getPeople(data[81]),
    'luabo': getPeople(data[82]),
    'mocubela': getPeople(data[83]),
    'molumbo': getPeople(data[84]),
    'mulevala': getPeople(data[85]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['zambezia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}