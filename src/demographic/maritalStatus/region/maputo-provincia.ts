import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'maputo-provincia.json')

export const getMaputoProvincia = async (data: any) => {
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
    'DISTRITO Cidade da Matola': getPeople(data[168]),
    'DISTRITO Boane': getPeople(data[169]),
    'DISTRITO Magude': getPeople(data[170]),
    'DISTRITO Manhica': getPeople(data[171]),
    'Distrito de MARRACUENE': getPeople(data[172]),
    'Distrito MATUTUINE': getPeople(data[173]),
    'Distrito MOAMBA': getPeople(data[174]),
    'Distrito NAMAACHA': getPeople(data[175])
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}