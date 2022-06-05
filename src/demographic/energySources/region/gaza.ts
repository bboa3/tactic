import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getGaza = async (data: any) => {
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