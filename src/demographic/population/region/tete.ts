import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'tete.json')

export const getTete = async (data: any) => {
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
    'cidade de tete': {
      'degue': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'filipe samuel magaia': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'francisco manyanga': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'josina machel': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'mateus s. muthemba': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'matundo': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'mpadue': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'chingodzi': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'samora machel': getPeople({ ages: data[0], men: data[43], women: data[44] }),
    },
    'angonia': {
      'ulongue': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'domue': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'cahora-bassa': {
      'songo': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'chintholo': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'chitima': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'changara': {
      'luenha': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'chioco': getPeople({ ages: data[0], men: data[83], women: data[84] }),
    },
    'chifunde': {
      'chifunde': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'mualadzi': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'nsadzo': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    },
    'chiuta': {
      'kazula': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'manje': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'macanga': {
      'furancungo': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'chidzolomondo': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'magoe': {
      'mphende': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'chinthopo': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'mucumbura': getPeople({ ages: data[0], men: data[139], women: data[140] })
    },
    'maravia': {
      'chiputo': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'fingoe': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'malowera': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'chipera': getPeople({ ages: data[0], men: data[159], women: data[160] })
    },
    'moatize': {
      'moatize': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'kambulatsitsi': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'zobue': getPeople({ ages: data[0], men: data[175], women: data[176] }),
    }, 
    'mutarara': {
      'nhamayabue': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'charre': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'inhangoma': getPeople({ ages: data[0], men: data[191], women: data[192] }),
    },
    'tsangano': {
      'ntengo-wambalame': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'tsangano': getPeople({ ages: data[0], men: data[203], women: data[204] })
    },
    'zumbo': {
      'zumbo': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'muze': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'zambue': getPeople({ ages: data[0], men: data[219], women: data[220] }),
    },
    'doa': {
      'doa': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'chueza': getPeople({ ages: data[0], men: data[231], women: data[232] })
    },
    'marara': {
      'marara': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'mufa boroma': getPeople({ ages: data[0], men: data[243], women: data[244] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}