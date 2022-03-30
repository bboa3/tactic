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
    'DISTRITO Lichinga': getPeople(data[7]),
    'DISTRITO Cuamba': getPeople(data[8]),
    'DISTRITO Lago': getPeople(data[9]),
    'DISTRITO Chimbunila': getPeople(data[10]),
    'DISTRITO Majune': getPeople(data[11]),
    'DISTRITO Mandimba': getPeople(data[12]),
    'DISTRITO Marrupa': getPeople(data[13]),
    'DISTRITO Maua': getPeople(data[14]), 
    'DISTRITO Mavago': getPeople(data[15]),
    'DISTRITO Mecanhelas': getPeople(data[16]),
    'DISTRITO Mecula': getPeople(data[17]),
    'DISTRITO Metarica': getPeople(data[18]),
    'DISTRITO Muembe': getPeople(data[19]),
    'DISTRITO Ngauma': getPeople(data[20]),
    'DISTRITO Nipepe': getPeople(data[21]),
    'DISTRITO Sanga': getPeople(data[22])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}