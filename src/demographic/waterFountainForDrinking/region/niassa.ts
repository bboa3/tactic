import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getNiassa = async (data: any) => {
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