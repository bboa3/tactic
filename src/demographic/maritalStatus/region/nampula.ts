import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getNampula = async (data: any) => {
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
    'cidade de nampula': getPeople(data[43]),
    'angoche': getPeople(data[44]),
    'erati': getPeople(data[45]),
    'ilha de Mocambique': getPeople(data[46]),
    'lalaua': getPeople(data[47]),
    'malema': getPeople(data[48]),
    'meconta': getPeople(data[49]),
    'mecuburi': getPeople(data[50]),
    'memba': getPeople(data[51]),
    'mogincual': getPeople(data[52]),
    'mogovolas': getPeople(data[53]),
    'moma': getPeople(data[54]),
    'monapo': getPeople(data[55]),
    'mossuril': getPeople(data[56]),
    'muecate': getPeople(data[57]),
    'murrupula': getPeople(data[58]),
    'nacala Porto': getPeople(data[59]),
    'nacala Velha': getPeople(data[60]),
    'nacaroa': getPeople(data[61]),
    'rapale': getPeople(data[62]),
    'ribaue': getPeople(data[63]),
    'larde': getPeople(data[64]),
    'liupo': getPeople(data[65])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['nampula'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}