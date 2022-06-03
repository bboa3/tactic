import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getSofala = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        solteiros: pop[8],
        casados: pop[9],
        'união marital':pop[10],
        'divorciados/separados': pop[11],
        viúvos: pop[12]
      },
      mulheres: {
        solteiras: pop[14],
        casadas: pop[15],
        'união marital': pop[16],
        'divorciadas/separadas': pop[17],
        viúvas: pop[18]
      }
    }
  }

  const people = {
    'cidade da beira': getPeople(data[122]),
    'buzi': getPeople(data[123]),
    'caia': getPeople(data[124]),
    'chemba': getPeople(data[125]),
    'cheringoma': getPeople(data[126]),
    'chibabava': getPeople(data[127]),
    'dondo': getPeople(data[128]),
    'gorongosa': getPeople(data[129]),
    'machanga': getPeople(data[130]),
    'maringue': getPeople(data[131]),
    'marromeu': getPeople(data[132]),
    'muanza': getPeople(data[133]),
    'nhamatanda': getPeople(data[134])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['sofala'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}