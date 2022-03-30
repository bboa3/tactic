import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

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
    'distrito chimoio': getPeople(data[108]),
    'distrito barue': getPeople(data[109]),
    'distrito gondola': getPeople(data[110]),
    'distrito guro': getPeople(data[111]),
    'distrito machaze': getPeople(data[112]),
    'distrito macossa': getPeople(data[113]),
    'distrito manica': getPeople(data[114]),
    'distrito mussorize': getPeople(data[115]),
    'distrito sussundenga': getPeople(data[116]),
    'distrito tambara': getPeople(data[117]),
    'distrito macate': getPeople(data[118]),
    'distrito vanduzi': getPeople(data[119]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}