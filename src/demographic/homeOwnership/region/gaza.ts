import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getGaza = async (data: any) => {
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
    'xai-xai': getPeople(data[145]),
    'bilene': getPeople(data[146]),
    'chibuto': getPeople(data[147]),
    'chicualacuala': getPeople(data[148]),
    'chigubo': getPeople(data[149]),
    'chokwe': getPeople(data[150]),
    'guija': getPeople(data[151]),
    'mabalane': getPeople(data[152]),
    'manjacaze': getPeople(data[153]),
    'massangena': getPeople(data[154]),
    'massingir': getPeople(data[155]),
    'limpopo': getPeople(data[156]),
    'chongoene': getPeople(data[157]),
    'mapai': getPeople(data[158])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['gaza'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}