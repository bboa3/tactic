import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'marital-status.json')

export const getNiassa = async (data: any) => {
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
    'DISTRITO Lichinga': getPeople(data[7]),
    'DISTRITO Cuamba': getPeople(data[8]),
    'DISTRITO Lago': getPeople(data[9]),
    'DISTRITO Chimbunila': getPeople(data[10]),
    'DISTRITO Majune': getPeople(data[11]),
    'DISTRITO Mandimba': getPeople(data[12]),
    'DISTRITO Marrupa': getPeople(data[13]),
    'DISTRITO Maua': getPeople(data[14]), 
    'DISTRITO Mavago': getPeople(data[15]),
    'DISTRITO Mecanhelas': getPeople(data[16]),
    'DISTRITO Mecula': getPeople(data[17]),
    'DISTRITO Metarica': getPeople(data[18]),
    'DISTRITO Muembe': getPeople(data[19]),
    'DISTRITO Ngauma': getPeople(data[20]),
    'DISTRITO Nipepe': getPeople(data[21]),
    'DISTRITO Sanga': getPeople(data[22])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['niassa'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}