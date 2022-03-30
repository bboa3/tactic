import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getTete = async (data: any) => {
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
    'distrito cidade de tete': getPeople(data[92]),
    'distrito angonia': getPeople(data[93]),
    'distrito cahora-Bassa': getPeople(data[94]),
    'distrito changara': getPeople(data[95]),
    'distrito chifunde': getPeople(data[96]),
    'distrito chiuta': getPeople(data[97]),
    'distrito macanga': getPeople(data[98]),
    'distrito magoe': getPeople(data[99]),
    'distrito maravia': getPeople(data[100]),
    'distrito moatize': getPeople(data[101]),
    'distrito mutarara': getPeople(data[102]),
    'distrito tsangano': getPeople(data[103]),
    'distrito zumbo': getPeople(data[104]),
    'distrito doa': getPeople(data[105]),
    'distrito marara': getPeople(data[106])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['tete'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}