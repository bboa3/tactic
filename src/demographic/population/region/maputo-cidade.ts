import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'maputo-cidade.json')

export const getMaputoCidade = async (data: any) => {
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
    'kampfumo': {
      'alto mae a': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'alto mae b': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'central a': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'central b': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'central c': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'coop': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'malhangalene a': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'malhangalene b': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'polana cimento a': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'polana cimento b': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'sommerschield': getPeople({ ages: data[0], men: data[51], women: data[52] })
    },
    'nlhamankulu': {
      'aeroporto a': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'aeroporto b': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'chamanculo a': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'chamanculo b': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'chamanculo c': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'chamanculo d': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'malanga': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'minkadjuine': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'unidade 7': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'Xipamanine': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'munhuana': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    },
    'kaMaxakeni': {
      'mafalala': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'maxaquene a': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'maxaquene b': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'maxaquene c': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'maxaquene d': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'polana canico a': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'polana canico b': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'urbanizacao': getPeople({ ages: data[0], men: data[135], women: data[136] })
    },
    'kamavota': {
      'albazine': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'costa do sol': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'ferroviario': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'fplm': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'hulene-a': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'hulene-b': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'mahotas': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'mavalane a': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'mavalane b': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      '3 de fevereiro': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'laulane': getPeople({ ages: data[0], men: data[183], women: data[184] })
    },
    'kamubukwana': {
      'bagamoio': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'george dimitrov': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'inhagoia a': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'inhagoia b': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'jardim': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'luis cabral': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'magoanine a': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'malhazine': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'nsalene': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      '25 de junho a': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      '25 de junho b': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'zimpeto': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'magoanine b': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'magoanine c': getPeople({ ages: data[0], men: data[243], women: data[244] })
    },
    'katembe': {
      'chali': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'chamissava': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'guachene': getPeople({ ages: data[0], men: data[259], women: data[260] }),
      'incassane': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'inguide': getPeople({ ages: data[0], men: data[267], women: data[268] }),
    },
    'kanyaka': {
      'inguane': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'nhaquene': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'ridzene': getPeople({ ages: data[0], men: data[283], women: data[284] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}