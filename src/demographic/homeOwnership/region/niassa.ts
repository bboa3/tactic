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