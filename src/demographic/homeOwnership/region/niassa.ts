import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'regime-de-propriedade-da-casa.json')

export const getNiassa = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      'casa própria': pop[2],
      'casa alugada': pop[3],
      'casa cedida/emprestada temporariamente': pop[4],
      'outra': pop[5],
      'desconhecido': pop[6]
    }
  }


  const people = {
    'DISTRITO Lichinga': getPeople(data[5]),
    'DISTRITO Cuamba': getPeople(data[6]),
    'DISTRITO Lago': getPeople(data[7]),
    'DISTRITO Chimbunila': getPeople(data[8]),
    'DISTRITO Majune': getPeople(data[9]),
    'DISTRITO Mandimba': getPeople(data[10]),
    'DISTRITO Marrupa': getPeople(data[11]),
    'DISTRITO Maua': getPeople(data[12]), 
    'DISTRITO Mavago': getPeople(data[13]),
    'DISTRITO Mecanhelas': getPeople(data[14]),
    'DISTRITO Mecula': getPeople(data[15]),
    'DISTRITO Metarica': getPeople(data[16]),
    'DISTRITO Muembe': getPeople(data[17]),
    'DISTRITO Ngauma': getPeople(data[18]),
    'DISTRITO Nipepe': getPeople(data[19]),
    'DISTRITO Sanga': getPeople(data[20])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}