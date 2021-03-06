import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'sofala.json')

export const getSofala = async (data: any) => {
  const getPeople = ({ ages, men, women }: Props) => {
    const people: PeopleNum[] = []

    for (const age in ages) {
      if(Number(age) > 1) {
        people.push({
          idade: ages[age],
          homens: Number(men[age]),
          mulheres: Number(women[age])
        })
      }
    }

    return people
  }

  const people = {
    'cidade da beira': {
      'urbano 1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'urbano 2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'urbano 3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'urbano 4': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'urbano 5': getPeople({ ages: data[0], men: data[27], women: data[28] }),
    },
    'buzi': {
      'buzi-sede': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'estaquinha': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'nova sofala': getPeople({ ages: data[0], men: data[43], women: data[44] }),
    },
    'caia': {
      'caia sede': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'murraca': getPeople({ ages: data[0], men: data[55], women: data[56] }),
      'sena': getPeople({ ages: data[0], men: data[59], women: data[60] })
    },
    'chemba': {
      'chemba': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'chiramba': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'mulima': getPeople({ ages: data[0], men: data[75], women: data[76] })
    },
    'cheringoma': {
      'inhaminga': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'inhamitanga': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'chibabava': {
      'chibabava': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'goonda sede': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'muxungue': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'dondo': {
      'cidade de dondo': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'mafambisse': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'savane': getPeople({ ages: data[0], men: data[119], women: data[120] }),
    },
    'gorongosa': {
      'gorongosa': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'canda': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'vunduzi': getPeople({ ages: data[0], men: data[135], women: data[136] }),
    }, 
    'machanga': {
      'machanga': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'divinhe': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'chiloane': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'maringue': {
      'maringue sede': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'canxixe': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'subue': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'marromeu': {
      'marromeu': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'chupanga': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'malingapansi': getPeople({ ages: data[0], men: data[183], women: data[184] }),
    },
    'muanza': {
      'muanza': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'galinha': getPeople({ ages: data[0], men: data[195], women: data[196] })
    },
    'nhamatanda': {
      'nhamatanda': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'tica': getPeople({ ages: data[0], men: data[207], women: data[208] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}