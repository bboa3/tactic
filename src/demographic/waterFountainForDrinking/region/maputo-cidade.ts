import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'fonte-de-agua-para-beber.json')

export const getMaputoCidade = async (data: any) => {
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
    'DISTRITO Kampfumo': getPeople(data[169]),
    'DISTRITO Nlhamankulu': getPeople(data[170]),
    'DISTRITO KaMaxakeni': getPeople(data[171]),
    'DISTRITO Kamavota': getPeople(data[172]),
    'DISTRITO KaMubukwana': getPeople(data[173]),
    'DISTRITO Katembe': getPeople(data[174]),
    'DISTRITO Kanyaka': getPeople(data[175]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo cidade'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}