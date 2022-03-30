import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'marital-status.json')

export const getManica = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        solteiros: pop[8],
        sasados: pop[9],
        'união marital':pop[10],
        'divorciados/separados': pop[11],
        viúvos: pop[12]
      },
      mulheres: {
        solteiras: pop[14],
        sasadas: pop[15],
        'união marital': pop[16],
        'divorciadas/separadas': pop[17],
        viúvas: pop[18]
      }
    }
  }


  const people = {
    'DISTRITO Chimoio': getPeople(data[108]),
    'DISTRITO Barue': getPeople(data[109]),
    'DISTRITO Gondola': getPeople(data[110]),
    'DISTRITO Guro': getPeople(data[111]),
    'DISTRITO Machaze': getPeople(data[112]),
    'DISTRITO Macossa': getPeople(data[113]),
    'DISTRITO Manica': getPeople(data[114]),
    'DISTRITO Mussorize': getPeople(data[115]),
    'DISTRITO Sussundenga': getPeople(data[116]),
    'DISTRITO Tambara': getPeople(data[117]),
    'DISTRITO Macate': getPeople(data[118]),
    'DISTRITO Vanduzi': getPeople(data[119]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}