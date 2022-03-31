import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'estado-civil.json')

export const getZambezia = async (data: any) => {
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
    'distrito quelimane': getPeople(data[68]),
    'distrito alto molocue': getPeople(data[69]),
    'distrito chinde': getPeople(data[70]),
    'distrito gile': getPeople(data[71]),
    'distrito gurue': getPeople(data[72]),
    'distrito ile': getPeople(data[73]),
    'distrito inhassunge': getPeople(data[74]),
    'distrito lugela': getPeople(data[75]),
    'distrito maganja da costa': getPeople(data[76]),
    'distrito milange': getPeople(data[77]),
    'distrito mocuba': getPeople(data[78]),
    'distrito mopeia': getPeople(data[79]),
    'distrito morrumbala': getPeople(data[80]),
    'distrito namacurra': getPeople(data[81]),
    'distrito namarroi': getPeople(data[82]),
    'distrito nicoadala': getPeople(data[83]),
    'distrito pebane': getPeople(data[84]),
    'distrito derre': getPeople(data[85]),
    'distrito luabo': getPeople(data[86]),
    'distrito mocubela': getPeople(data[87]),
    'distrito molumbo': getPeople(data[88]),
    'distrito mulevala': getPeople(data[89]),
  }

  const parsedFile = JSON.parse(await fs.readFile(path, 'utf8'))

  parsedFile['zambezia'] = people

  await fs.writeFile(path, JSON.stringify(parsedFile))

  return people
}