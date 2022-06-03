import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getManica = async (data: any) => {
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
    'chimoio': getPeople(data[108]),
    'barue': getPeople(data[109]),
    'gondola': getPeople(data[110]),
    'guro': getPeople(data[111]),
    'machaze': getPeople(data[112]),
    'macossa': getPeople(data[113]),
    'manica': getPeople(data[114]),
    'mussorize': getPeople(data[115]),
    'sussundenga': getPeople(data[116]),
    'tambara': getPeople(data[117]),
    'macate': getPeople(data[118]),
    'vanduzi': getPeople(data[119]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['manica'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}