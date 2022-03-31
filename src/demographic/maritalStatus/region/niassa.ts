import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getNiassa = async (data: any) => {
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
    'distrito lichinga': getPeople(data[7]),
    'distrito cuamba': getPeople(data[8]),
    'distrito lago': getPeople(data[9]),
    'distrito chimbunila': getPeople(data[10]),
    'distrito majune': getPeople(data[11]),
    'distrito mandimba': getPeople(data[12]),
    'distrito marrupa': getPeople(data[13]),
    'distrito maua': getPeople(data[14]), 
    'distrito mavago': getPeople(data[15]),
    'distrito mecanhelas': getPeople(data[16]),
    'distrito mecula': getPeople(data[17]),
    'distrito metarica': getPeople(data[18]),
    'distrito muembe': getPeople(data[19]),
    'distrito ngauma': getPeople(data[20]),
    'distrito nipepe': getPeople(data[21]),
    'distrito sanga': getPeople(data[22])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}