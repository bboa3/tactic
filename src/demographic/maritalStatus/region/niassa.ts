import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'niassa.json')

export const getNiassa = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        Solteiros: pop[8],
        Casados: pop[9],
        'União Marital':pop[10],
        'Divorciados/Separados': pop[11],
        Viúvos: pop[12]
      },
      mulheres: {
        Solteiras: pop[14],
        Casadas: pop[15],
        'União Marital': pop[16],
        'Divorciadas/Separadas': pop[17],
        Viúvas: pop[18]
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

  await fs.writeFile(path, JSON.stringify(people))

  return people
}