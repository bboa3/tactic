import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getGaza = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'canalizada': pop[2],
      'fontanário/torneira pública': pop[6],
      'furo/poço com bomba manual': pop[7],
      'poço sem bomba manual': pop[8],
      'nascente/rio/lago/lagoa': pop[11],
      'chuva': pop[14],
      'tanques camiões/carregada em tambores': pop[15],
      'mineral/engarrafada': pop[16],
      'outra': pop[17],
      'desconhecida': pop[18]
    }
  }

  const people = {
    'distrito de xai-xai': getPeople(data[145]),
    'distrito bilee': getPeople(data[146]),
    'distrito de chibuto': getPeople(data[147]),
    'distrito chicualacuala': getPeople(data[148]),
    'distrito chugubo': getPeople(data[149]),
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