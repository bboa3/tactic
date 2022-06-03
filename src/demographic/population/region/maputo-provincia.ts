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
      'posto administrativo matola cidade': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo infulene': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo machava': getPeople({ ages: data[0], men: data[19], women: data[20] })
    },
    'boane': {
      'posto administrativo boane': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'posto administrativo matola rio': getPeople({ ages: data[0], men: data[31], women: data[32] })
    },
    'magude': {
      'posto administrativo magude': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'posto administrativo mapulanguene': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'posto administrativo motaze': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'posto administrativo mahele': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo panjane': getPeople({ ages: data[0], men: data[55], women: data[56] })
    },
    'manhica': {
      'posto administrativo município de manhiça': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo calanga': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo ilha josina machel': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'posto administrativo maluane': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'posto administrativo xinavane': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'posto administrativo 3 de fevereiro': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'de marracuene': {
      'posto administrativo marracuene': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'posto administrativo machubo': getPeople({ ages: data[0], men: data[95], women: data[96] })
    },
    'matutuine': {
      'posto administrativo bela vista': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      "posto administrativo catembe m'sime": getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'posto administrativo catuane': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'posto administrativo machangulo': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'posto administrativo zitundo': getPeople({ ages: data[0], men: data[119], women: data[120] })
    },
    'moamba': {
      'posto administrativo moamba': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'posto administrativo pessene': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'posto administrativo ressano garcia': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'posto administrativo sabie': getPeople({ ages: data[0], men: data[139], women: data[140] }),
    },
    'namaacha': {
      'posto administrativo namaacha': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo changalane': getPeople({ ages: data[0], men: data[151], women: data[152] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}