import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-energia.json')

export const getNiassa = async (data: any) => {
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
    'lichinga': getPeople(data[5]),
    'cuamba': getPeople(data[6]),
    'lago': getPeople(data[7]),
    'chimbunila': getPeople(data[8]),
    'majune': getPeople(data[9]),
    'mandimba': getPeople(data[10]),
    'marrupa': getPeople(data[11]),
    'maua': getPeople(data[12]), 
    'mavago': getPeople(data[13]),
    'mecanhelas': getPeople(data[14]),
    'mecula': getPeople(data[15]),
    'metarica': getPeople(data[16]),
    'muembe': getPeople(data[17]),
    'ngauma': getPeople(data[18]),
    'nipepe': getPeople(data[19]),
    'sanga': getPeople(data[20])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}