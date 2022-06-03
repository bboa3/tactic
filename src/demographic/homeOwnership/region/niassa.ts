import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getNiassa = async (data: any) => {
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