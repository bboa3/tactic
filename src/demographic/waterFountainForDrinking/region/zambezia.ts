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
    'DISTRITO QUELIMANE': getPeople(data[64]),
    'DISTRITO Alto Molocue': getPeople(data[65]),
    'DISTRITO Chinde': getPeople(data[66]),
    'DISTRITO Gile': getPeople(data[67]),
    'DISTRITO Gurue': getPeople(data[68]),
    'DISTRITO Ile': getPeople(data[69]),
    'DISTRITO Inhassunge': getPeople(data[70]),
    'DISTRITO Lugela': getPeople(data[71]),
    'DISTRITO Maganja da Costa': getPeople(data[72]),
    'DISTRITO Milange': getPeople(data[73]),
    'DISTRITO Mocuba': getPeople(data[74]),
    'DISTRITO Mopeia': getPeople(data[75]),
    'DISTRITO Morrumbala': getPeople(data[76]),
    'DISTRITO Namacurra': getPeople(data[77]),
    'DISTRITO Namarroi': getPeople(data[78]),
    'DISTRITO Nicoadala': getPeople(data[79]),
    'DISTRITO Pebane': getPeople(data[80]),
    'DISTRITO Derre': getPeople(data[81]),
    'DISTRITO Luabo': getPeople(data[82]),
    'DISTRITO Mocubela': getPeople(data[83]),
    'DISTRITO Molumbo': getPeople(data[84]),
    'DISTRITO MULEVALA': getPeople(data[85]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['zambezia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}