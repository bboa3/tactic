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