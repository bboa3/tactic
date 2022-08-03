import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getZambezia = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return [
      {
        name: 'electricidade',
        value: pop[2]
      },
      {
        name: 'gerador/placa solar',
        value: pop[3]
      },
      {
        name: 'gás',
        value: pop[4]
      },
      {
        name: 'petróleo/parafina/querosene',
        value: pop[5]
      },
      {
        name: 'velas',
        value: pop[6]
      },
      {
        name: 'baterias',
        value: pop[7]
      },
      {
        name: 'lenha',
        value: pop[8]
      },
      {
        name: 'pilhas',
        value: pop[9]
      },
      {
        name: 'outras',
        value: pop[10]
      },
      {
        name: 'desconhecida',
        value: pop[11]
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