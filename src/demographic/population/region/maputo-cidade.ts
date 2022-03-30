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
    'distrito kampfumo': {
      'bairro alto mae a': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'bairro alto mae b': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'bairro central a': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'bairro central b': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'bairro central c': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'bairro coop': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'bairro malhangalene a': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'bairro malhangalene b': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'bairro polana cimento a': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'bairro polana cimento b': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'bairro sommerschield': getPeople({ ages: data[0], men: data[51], women: data[52] })
    },
    'distrito nlhamankulu': {
      'bairro aeroporto a': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'bairro aeroporto b': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'bairro chamanculo a': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'bairro chamanculo b': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'bairro chamanculo c': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'bairro chamanculo d': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'bairro malanga': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'bairro minkadjuine': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'bairro unidade 7': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'bairro Xipamanine': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'bairro munhuana': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    },
    'distrito kaMaxakeni': {
      'bairro mafalala': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'bairro maxaquene a': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'bairro maxaquene b': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'bairro maxaquene c': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'bairro maxaquene d': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'bairro polana canico a': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'bairro polana canico b': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'bairro urbanizacao': getPeople({ ages: data[0], men: data[135], women: data[136] })
    },
    'distrito kamavota': {
      'bairro albazine': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'bairro costa do sol': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'bairro ferroviario': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'bairro fplm': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'bairro hulene-a': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'bairro hulene-b': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'bairro mahotas': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'bairro mavalane a': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'bairro mavalane b': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'bairro 3 de fevereiro': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'bairro laulane': getPeople({ ages: data[0], men: data[183], women: data[184] })
    },
    'distrito kamubukwana': {
      'bairro bagamoio': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'bairro george dimitrov': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'bairro inhagoia a': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'bairro inhagoia b': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'bairro jardim': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'bairro luis cabral': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'bairro magoanine a': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'bairro malhazine': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'bairro nsalene': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'bairro 25 de junho a': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'bairro 25 de junho b': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'bairro zimpeto': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'bairro magoanine b': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'bairro magoanine c': getPeople({ ages: data[0], men: data[243], women: data[244] })
    },
    'distrito katembe': {
      'bairro chali': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'bairro chamissava': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'bairro guachene': getPeople({ ages: data[0], men: data[259], women: data[260] }),
      'bairro incassane': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'bairro inguide': getPeople({ ages: data[0], men: data[267], women: data[268] }),
    },
    'distrito kanyaka': {
      'bairro inguane': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'bairro nhaquene': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'bairro ridzene': getPeople({ ages: data[0], men: data[283], women: data[284] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}