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