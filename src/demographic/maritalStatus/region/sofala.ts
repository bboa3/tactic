import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getSofala = async (data: any) => {
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
    'distrito cidade da beira': getPeople(data[122]),
    'distrito buzi': getPeople(data[123]),
    'distrito caia': getPeople(data[124]),
    'distrito chemba': getPeople(data[125]),
    'distrito cheringoma': getPeople(data[126]),
    'distrito chibabava': getPeople(data[127]),
    'distrito dondo': getPeople(data[128]),
    'distrito gorongosa': getPeople(data[129]),
    'distrito machanga': getPeople(data[130]),
    'distrito maringue': getPeople(data[131]),
    'distrito marromeu': getPeople(data[132]),
    'distrito muanza': getPeople(data[133]),
    'distrito nhamatanda': getPeople(data[134])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}