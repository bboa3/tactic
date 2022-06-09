import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'cabo-delgado.json')

export const getCaboDelgado = async (data: any) => {
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
    'cidade de pemba': {
      'alto gingone': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'cariaco': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'chuiba': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'cimento': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'ingonane': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'muchara': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'mahate': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'natite': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'paquitequete': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'eduardo mondlane': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'josina machel': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'maringanha': getPeople({ ages: data[0], men: data[55], women: data[56] })
    },
    'ancuabe': {
      'ancuabe sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'metoro': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'meza': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'balama': {
      'balama sede': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'impire': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'kwekwe': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'mavala': getPeople({ ages: data[0], men: data[91], women: data[92] })
    },
    'chiure': {
      'chiure sede': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'chiure velho': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'katapua': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'mazeze': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'namogelia': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'ocua': getPeople({ ages: data[0], men: data[119], women: data[120] })
    },
    'ibo': {
      'ibo sede': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'quirimba': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'macomia': {
      'macomia-sede': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'chai': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'mucojo': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'quiterajo': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'mecufi': {
      'mecufi sede': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'murrebue': getPeople({ ages: data[0], men: data[163], women: data[164] }),
    },
    'meluco': {
      'meluco': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'muaguide': getPeople({ ages: data[0], men: data[175], women: data[176] })
    }, 
    'mocimboa da praia': {
      'mocimboa da praia sede': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'diaca': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'mbau': getPeople({ ages: data[0], men: data[191], women: data[192] })
    },
    'montepuez': {
      'cidade de montepuez': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'mapupulo': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'mirate Sede': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'nairoto': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'namanhumbir': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'mueda': {
      'mueda-sede': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'chapa': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'negomano': getPeople({ ages: data[0], men: data[231], women: data[232] }), ///
      'ngapa': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'namaua': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'imbuho sede': getPeople({ ages: data[0], men: data[243], women: data[244] })
    },
    'muidumbe': {
      'muambula': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'chitunda': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'miteda': getPeople({ ages: data[0], men: data[259], women: data[260] })
    },
    'namuno': {
      'namuno sede': getPeople({ ages: data[0], men: data[267], women: data[268] }),
      'hucula': getPeople({ ages: data[0], men: data[271], women: data[272] }),
      'machoca': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'meloco': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'ncumpe': getPeople({ ages: data[0], men: data[283], women: data[284] }),
      'papai': getPeople({ ages: data[0], men: data[287], women: data[288] })
    },
    'nangade': {
      'nangade sede': getPeople({ ages: data[0], men: data[295], women: data[296] }),
      'ntamba': getPeople({ ages: data[0], men: data[299], women: data[300] })
    },
    'palma': {
      'palma': getPeople({ ages: data[0], men: data[307], women: data[308] }),
      'olumbe': getPeople({ ages: data[0], men: data[311], women: data[312] }),
      'pundanhar': getPeople({ ages: data[0], men: data[315], women: data[316] }),
      'matchedje': getPeople({ ages: data[0], men: data[319], women: data[320] })
    },
    'metuge': {
      'metuge sede': getPeople({ ages: data[0], men: data[327], women: data[328] }),
      'mieze': getPeople({ ages: data[0], men: data[331], women: data[332] })
    },
    'quissanga': {
      'quissanga': getPeople({ ages: data[0], men: data[339], women: data[340] }),
      'bilibiza': getPeople({ ages: data[0], men: data[343], women: data[344] }),
      'mahate': getPeople({ ages: data[0], men: data[347], women: data[348] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}