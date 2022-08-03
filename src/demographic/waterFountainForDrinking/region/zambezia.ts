import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getZambezia = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'canalizada',
        value: pop[2]
      },
      {
        name: 'fontanário/torneira pública',
        value: pop[6]
      },
      {
        name: 'furo/poço com bomba manual',
        value: pop[7]
      },
      {
        name: 'poço sem bomba manual',
        value: pop[8]
      },
      {
        name: 'nascente/rio/lago/lagoa',
        value: pop[11]
      },
      {
        name: 'chuva',
        value: pop[14]
      },
      {
        name: 'tanques camiões/carregada em tambores',
        value: pop[15]
      },
      {
        name: 'mineral/engarrafada',
        value: pop[16]
      },
      {
        name: 'outra',
        value: pop[17]
      },
      {
        name: 'desconhecida',
        value: pop[18]
      }
    ]
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