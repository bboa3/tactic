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
    'distrito cidade de pemba': {
      'bairro alto gingone': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'bairro cariaco': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'bairro chuiba': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'bairro cimento': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'bairro ingonane': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'bairro muchara': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'bairro mahate': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'bairro natite': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'bairro paquitequete': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'bairro eduardo mondlane': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'bairro josina machel': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'bairro maringanha': getPeople({ ages: data[0], men: data[55], women: data[56] })
    },
    'distrito Ancuabe': {
      'posto administrativo ancuabe sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo metoro': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo meza': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'distrito Balama': {
      'posto administrativo balama sede': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'posto administrativo impire': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'posto administrativo kwekwe': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'posto administrativo mavala': getPeople({ ages: data[0], men: data[91], women: data[92] })
    },
    'distrito Chiure': {
      'posto administrativo chiure sede': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'posto administrativo chiure velho': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'posto administrativo katapua': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'posto administrativo mazeze': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'posto administrativo namogelia': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'posto administrativo Ocua': getPeople({ ages: data[0], men: data[119], women: data[120] })
    },
    'distrito Ibo': {
      'posto administrativo Ibo Sede': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'posto administrativo Quirimba': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'distrito Macomia': {
      'posto administrativo Macomia-Sede': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'posto administrativo Chai': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'posto administrativo Mucojo': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo Quiterajo': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'distrito Mecufi': {
      'posto administrativo Mecufi Sede': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'posto administrativo Murrebue': getPeople({ ages: data[0], men: data[163], women: data[164] }),
    },
    'distrito Meluco': {
      'posto administrativo Meluco': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'posto administrativo Muaguide': getPeople({ ages: data[0], men: data[175], women: data[176] })
    }, 
    'distrito Mocimboa da Praia': {
      'posto administrativo Mocimboa da Praia Sede': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'posto administrativo Diaca': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'posto administrativo Mbau': getPeople({ ages: data[0], men: data[191], women: data[192] })
    },
    'distrito Montepuez': {
      'posto administrativo Cidade de Montepuez': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'posto administrativo Mapupulo': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'posto administrativo Mirate Sede': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'posto administrativo Nairoto': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'posto administrativo Namanhumbir': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'distrito Mueda': {
      'posto administrativo Mueda-Sede': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'posto administrativo Chapa': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'posto administrativo Negomano': getPeople({ ages: data[0], men: data[231], women: data[232] }), ///
      'posto administrativo Ngapa': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'posto administrativo Namaua': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'posto administrativo Imbuho Sede': getPeople({ ages: data[0], men: data[243], women: data[244] })
    },
    'distrito Muidumbe': {
      'posto administrativo Muambula': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'posto administrativo Chitunda': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'posto administrativo Miteda': getPeople({ ages: data[0], men: data[259], women: data[260] })
    },
    'distrito Namuno': {
      'posto administrativo Namuno sede': getPeople({ ages: data[0], men: data[267], women: data[268] }),
      'posto administrativo Hucula': getPeople({ ages: data[0], men: data[271], women: data[272] }),
      'posto administrativo Machoca': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'posto administrativo Meloco': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'posto administrativo Ncumpe': getPeople({ ages: data[0], men: data[283], women: data[284] }),
      'posto administrativo Papai': getPeople({ ages: data[0], men: data[287], women: data[288] })
    },
    'distrito Nangade': {
      'posto administrativo Nangade Sede': getPeople({ ages: data[0], men: data[295], women: data[296] }),
      'posto administrativo Ntamba': getPeople({ ages: data[0], men: data[299], women: data[300] })
    },
    'distrito Palma': {
      'posto administrativo Palma': getPeople({ ages: data[0], men: data[307], women: data[308] }),
      'posto administrativo Olumbe': getPeople({ ages: data[0], men: data[311], women: data[312] }),
      'posto administrativo Pundanhar': getPeople({ ages: data[0], men: data[315], women: data[316] }),
      'posto administrativo Matchedje': getPeople({ ages: data[0], men: data[319], women: data[320] })
    },
    'distrito Metuge': {
      'posto administrativo Metuge Sede': getPeople({ ages: data[0], men: data[327], women: data[328] }),
      'posto administrativo Mieze': getPeople({ ages: data[0], men: data[331], women: data[332] })
    },
    'distrito Quissanga': {
      'posto administrativo Quissanga': getPeople({ ages: data[0], men: data[339], women: data[340] }),
      'posto administrativo Bilibiza': getPeople({ ages: data[0], men: data[343], women: data[344] }),
      'posto administrativo Mahate': getPeople({ ages: data[0], men: data[347], women: data[348] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}