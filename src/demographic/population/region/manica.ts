import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'manica.json')

export const getManica = async (data: any) => {
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
    'chimoio': {
      'posto administrativo urbano n°1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo urbano n°2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo urbano n°3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
    },
    'barue': {
      'posto administrativo catandica': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'posto administrativo choa': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'posto administrativo nhampasa': getPeople({ ages: data[0], men: data[35], women: data[36] }),
    },
    'gondola': {
      'posto administrativo gondola': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'posto administrativo amatongas': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'posto administrativo cafumpe': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo inchope': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'guro': {
      'posto administrativo guro-sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo mandie': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo mungari': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'posto administrativo nhamasonge': getPeople({ ages: data[0], men: data[75], women: data[76] }),
    },
    'machaze': {
      'posto administrativo chitobe': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'posto administrativo save': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'macossa': {
      'posto administrativo macosa sede': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'posto administrativo nguawala': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'posto administrativo nhamagua': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'manica': {
      'posto administrativo municipio de manica': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'posto administrativo machipanda': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'posto administrativo mesica': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'posto administrativo mavonde': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'musorize': {
      'posto administrativo espungabera': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'posto administrativo chiurairue': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'posto administrativo dacata': getPeople({ ages: data[0], men: data[139], women: data[140] }),
    }, 
    'susundenga': {
      'posto administrativo susundenga-sede': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo dombe': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'posto administrativo muoha': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'posto administrativo rotanda': getPeople({ ages: data[0], men: data[159], women: data[160] }),
    },
    'tambara': {
      'posto administrativo nhacolo': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'posto administrativo buzua': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'posto administrativo nhacafula': getPeople({ ages: data[0], men: data[175], women: data[176] })
    },
    'macate': {
      'posto administrativo macate-sede': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'posto administrativo zembe': getPeople({ ages: data[0], men: data[187], women: data[188] }),
    },
    'vanduzi': {
      'posto administrativo vanduzi sede': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'posto administrativo matsinho': getPeople({ ages: data[0], men: data[199], women: data[200] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}