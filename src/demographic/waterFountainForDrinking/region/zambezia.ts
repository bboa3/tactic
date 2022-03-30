import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getZambezia = async (data: any) => {
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
    'distrito quelimane': getPeople(data[64]),
    'distrito alto molocue': getPeople(data[65]),
    'distrito chinde': getPeople(data[66]),
    'distrito gile': getPeople(data[67]),
    'distrito gurue': getPeople(data[68]),
    'distrito ile': getPeople(data[69]),
    'distrito inhassunge': getPeople(data[70]),
    'distrito lugela': getPeople(data[71]),
    'distrito maganja da Costa': getPeople(data[72]),
    'distrito milange': getPeople(data[73]),
    'distrito mocuba': getPeople(data[74]),
    'distrito mopeia': getPeople(data[75]),
    'distrito morrumbala': getPeople(data[76]),
    'distrito namacurra': getPeople(data[77]),
    'distrito namarroi': getPeople(data[78]),
    'distrito nicoadala': getPeople(data[79]),
    'distrito pebane': getPeople(data[80]),
    'distrito derre': getPeople(data[81]),
    'distrito luabo': getPeople(data[82]),
    'distrito mocubela': getPeople(data[83]),
    'distrito molumbo': getPeople(data[84]),
    'distrito mulevala': getPeople(data[85]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['zambezia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}