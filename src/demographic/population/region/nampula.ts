import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'nampula.json')

export const getNampula = async (data: any) => {
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
    'cidade de nampula': {
      'urbano central': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'muatala': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'muhala': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'namicopo': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'napipine': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'natikire': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'anchilo': getPeople({ ages: data[0], men: data[35], women: data[36] })
    },
    'angoche': {
      'cidade de angoche': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'aube': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'namaponda': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'boila nametoria': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'erati': {
      'namapa-sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'alua': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'namiroa': getPeople({ ages: data[0], men: data[71], women: data[72] })
    },
    'ilha de mocambique': {
      'ilha de mocambique': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'lumbo': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'lalaua': {
      'lalaua': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'meti': getPeople({ ages: data[0], men: data[95], women: data[96] })
    },
    'malema': {
      'malema/canhunha': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'chilulo': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'mutuali': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'meconta': {
      'meconta': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'corrane': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'namialo': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      '7 de abril': getPeople({ ages: data[0], men: data[131], women: data[132] }),
    },
    'mecuburi': {
      'mecuburi': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'milhana': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'muite': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'nanima': getPeople({ ages: data[0], men: data[151], women: data[152] })
    }, 
    'memba': {
      'memba': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'chipene': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'lurio': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'mazua': getPeople({ ages: data[0], men: data[171], women: data[172] })
    },
    'mogincual': {
      'naminge': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'quixaxe': getPeople({ ages: data[0], men: data[183], women: data[184] })
    },
    'mogovolas': {
      'nametil sede': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'calipo': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'ilute': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'muatua': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'nanhupo rio': getPeople({ ages: data[0], men: data[207], women: data[208] }),
    },
    'moma': {
      'macone sede': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'chalaua': getPeople({ ages: data[0], men: data[219], women: data[220] })
    },
    'monapo': {
      'monapo sede': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'ituculo': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'netia': getPeople({ ages: data[0], men: data[235], women: data[236] })
    },
    'mossuril': {
      'mossuril sede': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'lunga': getPeople({ ages: data[0], men: data[247], women: data[248] }),
      'matibane': getPeople({ ages: data[0], men: data[251], women: data[252] })
    },
    'muecate': {
      'muecate': getPeople({ ages: data[0], men: data[259], women: data[260] }),
      'imala': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'mucoluane': getPeople({ ages: data[0], men: data[267], women: data[268] })
    },
    'murrupula': {
      'murrupula': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'chinga': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'nihessiue': getPeople({ ages: data[0], men: data[283], women: data[284] })
    },
    'nacala porto': {
      'mutiva': getPeople({ ages: data[0], men: data[291], women: data[292] }),
      'muanona': getPeople({ ages: data[0], men: data[295], women: data[296] })
    },
    'nacala velha': {
      'nacala velha': getPeople({ ages: data[0], men: data[303], women: data[304] }),
      'covo': getPeople({ ages: data[0], men: data[307], women: data[308] }),
      'barragem': getPeople({ ages: data[0], men: data[311], women: data[312] })
    },
    'nacaroa': {
      'nacaroa': getPeople({ ages: data[0], men: data[319], women: data[320] }),
      'intete': getPeople({ ages: data[0], men: data[323], women: data[324] }),
      'saua-saua': getPeople({ ages: data[0], men: data[327], women: data[328] })
    },
    'rapale': {
      'rapale': getPeople({ ages: data[0], men: data[335], women: data[336] }),
      'mutivaze': getPeople({ ages: data[0], men: data[339], women: data[340] }),
      'namaita': getPeople({ ages: data[0], men: data[343], women: data[344] })
    },
    'ribaue': {
      'ribaue': getPeople({ ages: data[0], men: data[351], women: data[352] }),
      'cunle': getPeople({ ages: data[0], men: data[355], women: data[356] }),
      'iapala': getPeople({ ages: data[0], men: data[359], women: data[360] })
    },
    'larde': {
      'larde': getPeople({ ages: data[0], men: data[367], women: data[368] }),
      'mucuali': getPeople({ ages: data[0], men: data[371], women: data[372] }),
    },
    'liupo': {
      'liupo': getPeople({ ages: data[0], men: data[379], women: data[380] }),
      'quinga': getPeople({ ages: data[0], men: data[383], women: data[384] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}