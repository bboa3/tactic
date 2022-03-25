import { PeopleNum, Props } from "@src/demographic"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'regions', 'sofala.json')

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
    'DISTRITO Cidade da Beira': {
      'POSTO ADMINISTRATIVO Urbano 1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO Urbano 2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO Urbano 3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'POSTO ADMINISTRATIVO Urbano 4': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'POSTO ADMINISTRATIVO Urbano 5': getPeople({ ages: data[0], men: data[27], women: data[28] }),
    },
    'DISTRITO Buzi': {
      'POSTO ADMINISTRATIVO Buzi-Sede': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'POSTO ADMINISTRATIVO Estaquinha': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'POSTO ADMINISTRATIVO Nova Sofala': getPeople({ ages: data[0], men: data[43], women: data[44] }),
    },
    'DISTRITO Caia': {
      'POSTO ADMINISTRATIVO Caia Sede': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'POSTO ADMINISTRATIVO Murraca': getPeople({ ages: data[0], men: data[55], women: data[56] }),
      'POSTO ADMINISTRATIVO Sena': getPeople({ ages: data[0], men: data[59], women: data[60] })
    },
    'DISTRITO Chemba': {
      'POSTO ADMINISTRATIVO Chemba': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO Chiramba': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'POSTO ADMINISTRATIVO Mulima': getPeople({ ages: data[0], men: data[75], women: data[76] })
    },
    'DISTRITO Cheringoma': {
      'POSTO ADMINISTRATIVO Inhaminga': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'POSTO ADMINISTRATIVO Inhamitanga': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'DISTRITO Chibabava': {
      'POSTO ADMINISTRATIVO Chibabava': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'POSTO ADMINISTRATIVO  Goonda Sede': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'POSTO ADMINISTRATIVO Muxungue': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'DISTRITO Dondo': {
      'POSTO ADMINISTRATIVO Cidade de Dondo': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'POSTO ADMINISTRATIVO Mafambisse': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'POSTO ADMINISTRATIVO Savane': getPeople({ ages: data[0], men: data[119], women: data[120] }),
    },
    'DISTRITO Gorongosa': {
      'POSTO ADMINISTRATIVO Gorongosa': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'POSTO ADMINISTRATIVO Canda': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'POSTO ADMINISTRATIVO Vunduzi': getPeople({ ages: data[0], men: data[135], women: data[136] }),
    }, 
    'DISTRITO Machanga': {
      'POSTO ADMINISTRATIVO Machanga': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'POSTO ADMINISTRATIVO Divinhe': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'POSTO ADMINISTRATIVO Chiloane': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'DISTRITO Maringue': {
      'POSTO ADMINISTRATIVO Maringue Sede': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'POSTO ADMINISTRATIVO Canxixe': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'POSTO ADMINISTRATIVO Subue': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'DISTRITO Marromeu': {
      'POSTO ADMINISTRATIVO Marromeu': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'POSTO ADMINISTRATIVO Chupanga': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'POSTO ADMINISTRATIVO Malingapansi': getPeople({ ages: data[0], men: data[183], women: data[184] }),
    },
    'DISTRITO Muanza': {
      'POSTO ADMINISTRATIVO Muanza': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'POSTO ADMINISTRATIVO Galinha': getPeople({ ages: data[0], men: data[195], women: data[196] })
    },
    'DISTRITO Nhamatanda': {
      'POSTO ADMINISTRATIVO Nhamatanda': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'POSTO ADMINISTRATIVO Tica': getPeople({ ages: data[0], men: data[207], women: data[208] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}