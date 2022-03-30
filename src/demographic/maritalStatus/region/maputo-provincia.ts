import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getMaputoProvincia = async (data: any) => {
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
    'DISTRITO Cidade da Matola': getPeople(data[169]),
    'DISTRITO Boane': getPeople(data[170]),
    'DISTRITO Magude': getPeople(data[171]),
    'DISTRITO Manhica': getPeople(data[172]),
    'Distrito de MARRACUENE': getPeople(data[173]),
    'Distrito MATUTUINE': getPeople(data[174]),
    'Distrito MOAMBA': getPeople(data[175]),
    'Distrito NAMAACHA': getPeople(data[176])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['maputo provincia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}