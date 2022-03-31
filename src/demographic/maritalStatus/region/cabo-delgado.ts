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
    'distrito cidade de pemba': getPeople(data[24]),
    'distrito ancuabe': getPeople(data[25]),
    'distrito balama': getPeople(data[26]),
    'distrito chiure': getPeople(data[27]),
    'distrito ibo': getPeople(data[28]),
    'distrito macomia': getPeople(data[29]),
    'distrito mecufi': getPeople(data[30]),
    'distrito meluco': getPeople(data[31]),
    'distrito mocimboa da Praia': getPeople(data[32]),
    'distrito montepuez': getPeople(data[33]),
    'distrito mueda': getPeople(data[34]),
    'distrito muidumbe': getPeople(data[35]),
    'distrito namuno': getPeople(data[36]),
    'distrito nangade': getPeople(data[37]),
    'distrito palma': getPeople(data[38]),
    'distrito metuge': getPeople(data[39]),
    'distrito quissanga': getPeople(data[40])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['cabo delgado'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}