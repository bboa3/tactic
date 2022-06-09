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
      'urbano n°1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'urbano n°2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'urbano n°3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
    },
    'barue': {
      'catandica': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'choa': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'nhampasa': getPeople({ ages: data[0], men: data[35], women: data[36] }),
    },
    'gondola': {
      'gondola': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'amatongas': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'cafumpe': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'inchope': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'guro': {
      'guro-sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'mandie': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'mungari': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'nhamasonge': getPeople({ ages: data[0], men: data[75], women: data[76] }),
    },
    'machaze': {
      'chitobe': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'save': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'macossa': {
      'macosa sede': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'nguawala': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'nhamagua': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'manica': {
      'municipio de manica': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'machipanda': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'mesica': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'mavonde': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'mussorize': {
      'espungabera': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'chiurairue': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'dacata': getPeople({ ages: data[0], men: data[139], women: data[140] }),
    }, 
    'susundenga': {
      'susundenga-sede': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'dombe': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'muoha': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'rotanda': getPeople({ ages: data[0], men: data[159], women: data[160] }),
    },
    'tambara': {
      'nhacolo': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'buzua': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'nhacafula': getPeople({ ages: data[0], men: data[175], women: data[176] })
    },
    'macate': {
      'macate-sede': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'zembe': getPeople({ ages: data[0], men: data[187], women: data[188] }),
    },
    'vanduzi': {
      'vanduzi sede': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'matsinho': getPeople({ ages: data[0], men: data[199], women: data[200] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}