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
    'distrito cidade de nampula': {
      'posto administrativo urbano central': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo muatala': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo muhala': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'posto administrativo namicopo': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'posto administrativo napipine': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'posto administrativo natikire': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'posto administrativo anchilo': getPeople({ ages: data[0], men: data[35], women: data[36] })
    },
    'distrito angoche': {
      'posto administrativo cidade de angoche': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'posto administrativo aube': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'posto administrativo namaponda': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo boila nametoria': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'distrito erati': {
      'posto administrativo namapa-sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo alua': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo namiroa': getPeople({ ages: data[0], men: data[71], women: data[72] })
    },
    'distrito ilha de mocambique': {
      'posto administrativo ilha de mocambique': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'posto administrativo lumbo': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'distrito lalaua': {
      'posto administrativo lalaua': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'posto administrativo meti': getPeople({ ages: data[0], men: data[95], women: data[96] })
    },
    'distrito malema': {
      'posto administrativo malema/canhunha': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'posto administrativo chilulo': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'posto administrativo mutuali': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'distrito meconta': {
      'posto administrativo meconta': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'posto administrativo corrane': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'posto administrativo namialo': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'posto administrativo 7 de abril': getPeople({ ages: data[0], men: data[131], women: data[132] }),
    },
    'distrito mecuburi': {
      'posto administrativo mecuburi': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'posto administrativo milhana': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'posto administrativo muite': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo nanima': getPeople({ ages: data[0], men: data[151], women: data[152] })
    }, 
    'distrito memba': {
      'posto administrativo memba': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'posto administrativo chipene': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'posto administrativo lurio': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'posto administrativo mazua': getPeople({ ages: data[0], men: data[171], women: data[172] })
    },
    'distrito mogincual': {
      'posto administrativo naminge': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'posto administrativo quixaxe': getPeople({ ages: data[0], men: data[183], women: data[184] })
    },
    'distrito mogovolas': {
      'posto administrativo nametil sede': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'posto administrativo calipo': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'posto administrativo ilute': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'posto administrativo muatua': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'posto administrativo nanhupo rio': getPeople({ ages: data[0], men: data[207], women: data[208] }),
    },
    'distrito moma': {
      'posto administrativo macone sede': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'posto administrativo chalaua': getPeople({ ages: data[0], men: data[219], women: data[220] })
    },
    'distrito monapo': {
      'posto administrativo monapo sede': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'posto administrativo ituculo': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'posto administrativo netia': getPeople({ ages: data[0], men: data[235], women: data[236] })
    },
    'distrito mossuril': {
      'posto administrativo mossuril sede': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'posto administrativo lunga': getPeople({ ages: data[0], men: data[247], women: data[248] }),
      'posto administrativo matibane': getPeople({ ages: data[0], men: data[251], women: data[252] })
    },
    'distrito muecate': {
      'posto administrativo muecate': getPeople({ ages: data[0], men: data[259], women: data[260] }),
      'posto administrativo imala': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'posto administrativo mucoluane': getPeople({ ages: data[0], men: data[267], women: data[268] })
    },
    'distrito murrupula': {
      'posto administrativo murrupula': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'posto administrativo chinga': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'posto administrativo nihessiue': getPeople({ ages: data[0], men: data[283], women: data[284] })
    },
    'distrito nacala porto': {
      'posto administrativo mutiva': getPeople({ ages: data[0], men: data[291], women: data[292] }),
      'posto administrativo muanona': getPeople({ ages: data[0], men: data[295], women: data[296] })
    },
    'distrito nacala velha': {
      'posto administrativo nacala velha': getPeople({ ages: data[0], men: data[303], women: data[304] }),
      'posto administrativo covo': getPeople({ ages: data[0], men: data[307], women: data[308] }),
      'posto administrativo barragem': getPeople({ ages: data[0], men: data[311], women: data[312] })
    },
    'distrito nacaroa': {
      'posto administrativo nacaroa': getPeople({ ages: data[0], men: data[319], women: data[320] }),
      'posto administrativo intete': getPeople({ ages: data[0], men: data[323], women: data[324] }),
      'posto administrativo saua-saua': getPeople({ ages: data[0], men: data[327], women: data[328] })
    },
    'distrito rapale': {
      'posto administrativo rapale': getPeople({ ages: data[0], men: data[335], women: data[336] }),
      'posto administrativo mutivaze': getPeople({ ages: data[0], men: data[339], women: data[340] }),
      'posto administrativo namaita': getPeople({ ages: data[0], men: data[343], women: data[344] })
    },
    'distrito ribaue': {
      'posto administrativo ribaue': getPeople({ ages: data[0], men: data[351], women: data[352] }),
      'posto administrativo cunle': getPeople({ ages: data[0], men: data[355], women: data[356] }),
      'posto administrativo iapala': getPeople({ ages: data[0], men: data[359], women: data[360] })
    },
    'distrito larde': {
      'posto administrativo larde': getPeople({ ages: data[0], men: data[367], women: data[368] }),
      'posto administrativo mucuali': getPeople({ ages: data[0], men: data[371], women: data[372] }),
    },
    'distrito liupo': {
      'posto administrativo liupo': getPeople({ ages: data[0], men: data[379], women: data[380] }),
      'posto administrativo quinga': getPeople({ ages: data[0], men: data[383], women: data[384] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}