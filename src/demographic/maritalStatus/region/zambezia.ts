import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'zambezia.json')

export const getZambezia = async (data: any) => {
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
    'DISTRITO QUELIMANE': getPeople(data[68]),
    'DISTRITO Alto Molocue': getPeople(data[69]),
    'DISTRITO Chinde': getPeople(data[70]),
    'DISTRITO Gile': getPeople(data[71]),
    'DISTRITO Gurue': getPeople(data[72]),
    'DISTRITO Ile': getPeople(data[73]),
    'DISTRITO Inhassunge': getPeople(data[74]),
    'DISTRITO Lugela': getPeople(data[75]),
    'DISTRITO Maganja da Costa': getPeople(data[76]),
    'DISTRITO Milange': getPeople(data[77]),
    'DISTRITO Mocuba': getPeople(data[78]),
    'DISTRITO Mopeia': getPeople(data[79]),
    'DISTRITO Morrumbala': getPeople(data[80]),
    'DISTRITO Namacurra': getPeople(data[81]),
    'DISTRITO Namarroi': getPeople(data[82]),
    'DISTRITO Nicoadala': getPeople(data[83]),
    'DISTRITO Pebane': getPeople(data[84]),
    'DISTRITO Derre': getPeople(data[85]),
    'DISTRITO Luabo': getPeople(data[86]),
    'DISTRITO Mocubela': getPeople(data[87]),
    'DISTRITO Molumbo': getPeople(data[88]),
    'DISTRITO MULEVALA': getPeople(data[89]),
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}