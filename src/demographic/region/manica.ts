import { PeopleNum, Props } from "@src/demographic"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'regions', 'manica.json')

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
    'DISTRITO Chimoio': {
      'POSTO ADMINISTRATIVO Urbano N°1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO Urbano N°2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO Urbano N°3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
    },
    'DISTRITO Barue': {
      'POSTO ADMINISTRATIVO Catandica': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'POSTO ADMINISTRATIVO Choa': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'POSTO ADMINISTRATIVO Nhampassa': getPeople({ ages: data[0], men: data[35], women: data[36] }),
    },
    'DISTRITO Gondola': {
      'POSTO ADMINISTRATIVO Gondola': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'POSTO ADMINISTRATIVO Amatongas': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'POSTO ADMINISTRATIVO Cafumpe': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'POSTO ADMINISTRATIVO Inchope': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'DISTRITO Guro': {
      'POSTO ADMINISTRATIVO Guro-Sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO Mandie': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO Mungari': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'POSTO ADMINISTRATIVO Nhamassonge': getPeople({ ages: data[0], men: data[75], women: data[76] }),
    },
    'DISTRITO Machaze': {
      'POSTO ADMINISTRATIVO Chitobe': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'POSTO ADMINISTRATIVO Save': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'DISTRITO Macossa': {
      'POSTO ADMINISTRATIVO Macossa Sede': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'POSTO ADMINISTRATIVO Nguawala': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'POSTO ADMINISTRATIVO Nhamagua': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'DISTRITO Manica': {
      'POSTO ADMINISTRATIVO Municipio de Manica': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'POSTO ADMINISTRATIVO Machipanda': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'POSTO ADMINISTRATIVO Messica': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'POSTO ADMINISTRATIVO Mavonde': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'DISTRITO Mussorize': {
      'POSTO ADMINISTRATIVO Espungabera': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'POSTO ADMINISTRATIVO Chiurairue': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'POSTO ADMINISTRATIVO Dacata': getPeople({ ages: data[0], men: data[139], women: data[140] }),
    }, 
    'DISTRITO Sussundenga': {
      'POSTO ADMINISTRATIVO Sussundenga-sede': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'POSTO ADMINISTRATIVO Dombe': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'POSTO ADMINISTRATIVO Muoha': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'POSTO ADMINISTRATIVO Rotanda': getPeople({ ages: data[0], men: data[159], women: data[160] }),
    },
    'DISTRITO Tambara': {
      'POSTO ADMINISTRATIVO Nhacolo': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'POSTO ADMINISTRATIVO Buzua': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'POSTO ADMINISTRATIVO Nhacafula': getPeople({ ages: data[0], men: data[175], women: data[176] })
    },
    'DISTRITO Macate': {
      'POSTO ADMINISTRATIVO Macate-Sede': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'POSTO ADMINISTRATIVO Zembe': getPeople({ ages: data[0], men: data[187], women: data[188] }),
    },
    'DISTRITO Vanduzi': {
      'POSTO ADMINISTRATIVO Vanduzi Sede': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'POSTO ADMINISTRATIVO Matsinho': getPeople({ ages: data[0], men: data[199], women: data[200] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}