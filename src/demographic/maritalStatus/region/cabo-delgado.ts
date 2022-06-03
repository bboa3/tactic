import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getCaboDelgado = async (data: any) => {
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
    'cidade de pemba': getPeople(data[24]),
    'ancuabe': getPeople(data[25]),
    'balama': getPeople(data[26]),
    'chiure': getPeople(data[27]),
    'ibo': getPeople(data[28]),
    'macomia': getPeople(data[29]),
    'mecufi': getPeople(data[30]),
    'meluco': getPeople(data[31]),
    'mocimboa da Praia': getPeople(data[32]),
    'montepuez': getPeople(data[33]),
    'mueda': getPeople(data[34]),
    'muidumbe': getPeople(data[35]),
    'namuno': getPeople(data[36]),
    'nangade': getPeople(data[37]),
    'palma': getPeople(data[38]),
    'metuge': getPeople(data[39]),
    'quissanga': getPeople(data[40])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['cabo delgado'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}