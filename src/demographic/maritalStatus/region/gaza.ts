import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getGaza = async (data: any) => {
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
    'xai-xai': getPeople(data[153]),
    'bilene': getPeople(data[154]),
    'chibuto': getPeople(data[155]),
    'chicualacuala': getPeople(data[156]),
    'chigubo': getPeople(data[157]),
    'chokwe': getPeople(data[158]),
    'guija': getPeople(data[159]),
    'mabalane': getPeople(data[160]),
    'manjacaze': getPeople(data[161]),
    'massangena': getPeople(data[162]),
    'massingir': getPeople(data[163]),
    'limpopo': getPeople(data[164]),
    'chongoene': getPeople(data[165]),
    'mapai': getPeople(data[166])
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['gaza'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}