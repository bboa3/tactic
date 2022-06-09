import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'maputo-provincia.json')

export const getMaputoProvincia = async (data: any) => {
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
    'cidade da matola': {
      'matola cidade': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'infulene': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'machava': getPeople({ ages: data[0], men: data[19], women: data[20] })
    },
    'boane': {
      'boane': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'matola rio': getPeople({ ages: data[0], men: data[31], women: data[32] })
    },
    'magude': {
      'magude': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'mapulanguene': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'motaze': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'mahele': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'panjane': getPeople({ ages: data[0], men: data[55], women: data[56] })
    },
    'manhica': {
      'município de manhiça': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'calanga': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'ilha josina machel': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'maluane': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'xinavane': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      '3 de fevereiro': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'marracuene': {
      'marracuene': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'machubo': getPeople({ ages: data[0], men: data[95], women: data[96] })
    },
    'matutuine': {
      'bela vista': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      "catembe m'sime": getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'catuane': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'machangulo': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'zitundo': getPeople({ ages: data[0], men: data[119], women: data[120] })
    },
    'moamba': {
      'moamba': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'pessene': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'ressano garcia': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'sabie': getPeople({ ages: data[0], men: data[139], women: data[140] }),
    },
    'namaacha': {
      'namaacha': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'changalane': getPeople({ ages: data[0], men: data[151], women: data[152] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}