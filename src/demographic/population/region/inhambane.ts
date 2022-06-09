import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'inhambane.json')

export const getInhambane = async (data: any) => {
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
    'cidade de inhambane': {
      'cidade de inhambane': getPeople({ ages: data[0], men: data[11], women: data[12] }),
    },
    'funhalouro': {
      'funhalouro': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'tome': getPeople({ ages: data[0], men: data[23], women: data[24] }),
    },
    'govuro': {
      'nova mambone': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'save': getPeople({ ages: data[0], men: data[35], women: data[36] }),
    },
    'homoine': {
      'homoine-sede': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'pembe': getPeople({ ages: data[0], men: data[47], women: data[48] }),
    },
    'inharrime': {
      'inharrime sede': getPeople({ ages: data[0], men: data[55], women: data[56] }),
      'mucumbi': getPeople({ ages: data[0], men: data[59], women: data[60] })
    },
    'inhassoro': {
      'inhassoro': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'bazaruto': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'jangamo': {
      'jangamo': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'cumbana': getPeople({ ages: data[0], men: data[83], women: data[84] }),
    },
    'mabote': {
      'mabote': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'zimane': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'zinave': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    }, 
    'massinga': {
      'massinga': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'chicomo': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'cidade de maxixe': {
      'cidade de maxixe': getPeople({ ages: data[0], men: data[119], women: data[120] }),
    },
    'morrumbene': {
      'morrumbene': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'mocoduene': getPeople({ ages: data[0], men: data[131], women: data[132] }),
    },
    'panda': {
      'panda': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'mawayela': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'urrene': getPeople({ ages: data[0], men: data[147], women: data[148] })
    },
    'vilankulo': {
      'vilankulo': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'mapinhane': getPeople({ ages: data[0], men: data[159], women: data[160] }),
    },
    'zavala': {
      'quissico': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'zandamela': getPeople({ ages: data[0], men: data[171], women: data[172] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}