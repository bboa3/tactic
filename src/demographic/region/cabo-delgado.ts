import { PeopleNum, Props } from "@src/demographic"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'regions', 'cabo-delgado.json')

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
    'DISTRITO Cidade de Pemba': {
      'BAIRRO Alto Gingone': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'BAIRRO Cariaco': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'BAIRRO Chuiba': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'BAIRRO Cimento': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'BAIRRO Ingonane': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'BAIRRO Muchara': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'BAIRRO Mahate': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'BAIRRO Natite': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'BAIRRO Paquitequete': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'BAIRRO Eduardo Mondlane': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'BAIRRO Josina Machel': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'BAIRRO Maringanha': getPeople({ ages: data[0], men: data[55], women: data[56] })
    },
    'DISTRITO Ancuabe': {
      'POSTO ADMINISTRATIVO Ancuabe Sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO Metoro': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO Meza': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'DISTRITO Balama': {
      'POSTO ADMINISTRATIVO Balama sede': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'POSTO ADMINISTRATIVO Impire': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'POSTO ADMINISTRATIVO Kwekwe': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'POSTO ADMINISTRATIVO Mavala': getPeople({ ages: data[0], men: data[91], women: data[92] })
    },
    'DISTRITO Chiure': {
      'POSTO ADMINISTRATIVO Chiure Sede': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'POSTO ADMINISTRATIVO Chiure Velho': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'POSTO ADMINISTRATIVO Katapua': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'POSTO ADMINISTRATIVO Mazeze': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'POSTO ADMINISTRATIVO Namogelia': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'POSTO ADMINISTRATIVO Ocua': getPeople({ ages: data[0], men: data[119], women: data[120] })
    },
    'DISTRITO Ibo': {
      'POSTO ADMINISTRATIVO Ibo Sede': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'POSTO ADMINISTRATIVO Quirimba': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'DISTRITO Macomia': {
      'POSTO ADMINISTRATIVO Macomia-Sede': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'POSTO ADMINISTRATIVO Chai': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'POSTO ADMINISTRATIVO Mucojo': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'POSTO ADMINISTRATIVO Quiterajo': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'DISTRITO Mecufi': {
      'POSTO ADMINISTRATIVO Mecufi Sede': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'POSTO ADMINISTRATIVO Murrebue': getPeople({ ages: data[0], men: data[163], women: data[164] }),
    },
    'DISTRITO Meluco': {
      'POSTO ADMINISTRATIVO  Maua': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'POSTO ADMINISTRATIVO  Maiaca': getPeople({ ages: data[0], men: data[175], women: data[176] })
    },    
    'POSTO ADMINISTRATIVO Meluco': {
      'POSTO ADMINISTRATIVO Meluco': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'POSTO ADMINISTRATIVO Muaguide': getPeople({ ages: data[0], men: data[187], women: data[188] })
    },
    'DISTRITO Mocimboa da Praia': {
      'POSTO ADMINISTRATIVO Mocimboa da Praia Sede': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'POSTO ADMINISTRATIVO Diaca': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'POSTO ADMINISTRATIVO Mbau': getPeople({ ages: data[0], men: data[203], women: data[204] })
    },
    'DISTRITO Montepuez': {
      'POSTO ADMINISTRATIVO Cidade de Montepuez': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'POSTO ADMINISTRATIVO Mapupulo': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'POSTO ADMINISTRATIVO Mirate Sede': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'POSTO ADMINISTRATIVO Nairoto': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'POSTO ADMINISTRATIVO Namanhumbir': getPeople({ ages: data[0], men: data[227], women: data[228] })
    },
    'DISTRITO Mueda': {
      'POSTO ADMINISTRATIVO Mueda-Sede': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'POSTO ADMINISTRATIVO Chapa': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'POSTO ADMINISTRATIVO Negomano': getPeople({ ages: data[0], men: data[243], women: data[244] }), ///
      'POSTO ADMINISTRATIVO Ngapa': getPeople({ ages: data[0], men: data[247], women: data[248] }),
      'POSTO ADMINISTRATIVO Namaua': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'POSTO ADMINISTRATIVO Imbuho Sede': getPeople({ ages: data[0], men: data[255], women: data[266] })
    },
    'DISTRITO Muidumbe': {
      'POSTO ADMINISTRATIVO Muambula': getPeople({ ages: data[0], men: data[273], women: data[274] }),
      'POSTO ADMINISTRATIVO Chitunda': getPeople({ ages: data[0], men: data[277], women: data[278] }),
      'POSTO ADMINISTRATIVO Miteda': getPeople({ ages: data[0], men: data[281], women: data[282] })
    },
    'DISTRITO Namuno': {
      'POSTO ADMINISTRATIVO Namuno sede': getPeople({ ages: data[0], men: data[289], women: data[290] }),
      'POSTO ADMINISTRATIVO Hucula': getPeople({ ages: data[0], men: data[293], women: data[294] }),
      'POSTO ADMINISTRATIVO Machoca': getPeople({ ages: data[0], men: data[297], women: data[298] }),
      'POSTO ADMINISTRATIVO Meloco': getPeople({ ages: data[0], men: data[301], women: data[302] }),
      'POSTO ADMINISTRATIVO Ncumpe': getPeople({ ages: data[0], men: data[305], women: data[306] }),
      'POSTO ADMINISTRATIVO Papai': getPeople({ ages: data[0], men: data[309], women: data[310] })
    },
    'DISTRITO Nangade': {
      'POSTO ADMINISTRATIVO Nangade Sede': getPeople({ ages: data[0], men: data[317], women: data[318] }),
      'POSTO ADMINISTRATIVO Ntamba': getPeople({ ages: data[0], men: data[321], women: data[322] })
    },
    'DISTRITO Palma': {
      'POSTO ADMINISTRATIVO Palma': getPeople({ ages: data[0], men: data[329], women: data[330] }),
      'POSTO ADMINISTRATIVO Olumbe': getPeople({ ages: data[0], men: data[333], women: data[334] }),
      'POSTO ADMINISTRATIVO Pundanhar': getPeople({ ages: data[0], men: data[337], women: data[338] }),
      'POSTO ADMINISTRATIVO Matchedje': getPeople({ ages: data[0], men: data[341], women: data[342] })
    },
    'DISTRITO Metuge': {
      'POSTO ADMINISTRATIVO Metuge Sede': getPeople({ ages: data[0], men: data[349], women: data[350] }),
      'POSTO ADMINISTRATIVO Mieze': getPeople({ ages: data[0], men: data[353], women: data[354] })
    },
    'DISTRITO Quissanga': {
      'POSTO ADMINISTRATIVO Quissanga': getPeople({ ages: data[0], men: data[361], women: data[362] }),
      'POSTO ADMINISTRATIVO Bilibiza': getPeople({ ages: data[0], men: data[365], women: data[366] }),
      'POSTO ADMINISTRATIVO Mahate': getPeople({ ages: data[0], men: data[369], women: data[370] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}