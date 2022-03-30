import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getManica = async (data: any) => {
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
    'distrito chimoio': getPeople(data[103]),
    'distrito barue': getPeople(data[104]),
    'distrito gondola': getPeople(data[105]),
    'distrito guro': getPeople(data[106]),
    'distrito machaze': getPeople(data[107]),
    'distrito macossa': getPeople(data[108]),
    'distrito manica': getPeople(data[109]),
    'distrito mussorize': getPeople(data[110]),
    'distrito sussundenga': getPeople(data[111]),
    'distrito tambara': getPeople(data[112]),
    'distrito macate': getPeople(data[113]),
    'distrito vanduzi': getPeople(data[114]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}