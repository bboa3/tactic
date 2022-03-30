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
    'distrito cidade da beira': {
      'posto administrativo urbano 1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo urbano 2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo urbano 3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'posto administrativo urbano 4': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'posto administrativo urbano 5': getPeople({ ages: data[0], men: data[27], women: data[28] }),
    },
    'distrito buzi': {
      'posto administrativo buzi-sede': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'posto administrativo estaquinha': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'posto administrativo nova sofala': getPeople({ ages: data[0], men: data[43], women: data[44] }),
    },
    'distrito caia': {
      'posto administrativo caia sede': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo murraca': getPeople({ ages: data[0], men: data[55], women: data[56] }),
      'posto administrativo sena': getPeople({ ages: data[0], men: data[59], women: data[60] })
    },
    'distrito chemba': {
      'posto administrativo chemba': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo chiramba': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'posto administrativo mulima': getPeople({ ages: data[0], men: data[75], women: data[76] })
    },
    'distrito cheringoma': {
      'posto administrativo inhaminga': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'posto administrativo inhamitanga': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'distrito chibabava': {
      'posto administrativo chibabava': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'posto administrativo goonda sede': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'posto administrativo muxungue': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'distrito dondo': {
      'posto administrativo cidade de dondo': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'posto administrativo mafambisse': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'posto administrativo savane': getPeople({ ages: data[0], men: data[119], women: data[120] }),
    },
    'distrito gorongosa': {
      'posto administrativo gorongosa': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'posto administrativo canda': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'posto administrativo vunduzi': getPeople({ ages: data[0], men: data[135], women: data[136] }),
    }, 
    'distrito machanga': {
      'posto administrativo machanga': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'posto administrativo divinhe': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo chiloane': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'distrito maringue': {
      'posto administrativo maringue sede': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'posto administrativo canxixe': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'posto administrativo subue': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'distrito marromeu': {
      'posto administrativo marromeu': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'posto administrativo chupanga': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'posto administrativo malingapansi': getPeople({ ages: data[0], men: data[183], women: data[184] }),
    },
    'distrito muanza': {
      'posto administrativo muanza': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'posto administrativo galinha': getPeople({ ages: data[0], men: data[195], women: data[196] })
    },
    'distrito nhamatanda': {
      'posto administrativo nhamatanda': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'posto administrativo tica': getPeople({ ages: data[0], men: data[207], women: data[208] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}