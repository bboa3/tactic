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
    'distrito de xai-xai': getPeople(data[145]),
    'distrito bilene': getPeople(data[146]),
    'distrito de chibuto': getPeople(data[147]),
    'distrito chicualacuala': getPeople(data[148]),
    'distrito chigubo': getPeople(data[149]),
    'distrito chokwe': getPeople(data[150]),
    'distrito guija': getPeople(data[151]),
    'distrito mabalane': getPeople(data[152]),
    'distrito mandlakaze': getPeople(data[153]),
    'distrito massangena': getPeople(data[154]),
    'distrito massingir': getPeople(data[155]),
    'distrito limpopo': getPeople(data[156]),
    'distrito chongoene': getPeople(data[157]),
    'distrito mapai': getPeople(data[158])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['gaza'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}