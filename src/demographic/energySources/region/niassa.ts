import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getNiassa = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'electricidade': pop[2],
      'gerador/placa solar': pop[3],
      'gás': pop[4],
      'petróleoa/parafina/querosene': pop[5],
      'velas': pop[6],
      'baterias': pop[7],
      'lenha': pop[8],
      'pilhas': pop[9],
      'outras': pop[10],
      'desconhecida': pop[11]
    }
  }


  const people = {
    'distrito lichinga': getPeople(data[5]),
    'distrito cuamba': getPeople(data[6]),
    'distrito lago': getPeople(data[7]),
    'distrito chimbunila': getPeople(data[8]),
    'distrito majune': getPeople(data[9]),
    'distrito mandimba': getPeople(data[10]),
    'distrito marrupa': getPeople(data[11]),
    'distrito maua': getPeople(data[12]), 
    'distrito mavago': getPeople(data[13]),
    'distrito mecanhelas': getPeople(data[14]),
    'distrito mecula': getPeople(data[15]),
    'distrito metarica': getPeople(data[16]),
    'distrito muembe': getPeople(data[17]),
    'distrito ngauma': getPeople(data[18]),
    'distrito nipepe': getPeople(data[19]),
    'distrito sanga': getPeople(data[20])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}