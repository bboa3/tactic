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
      'bairro degue': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'bairro filipe samuel magaia': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'bairro francisco manyanga': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'bairro josina machel': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'bairro mateus s. muthemba': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'bairro matundo': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'bairro mpadue': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'bairro chingodzi': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'bairro samora machel': getPeople({ ages: data[0], men: data[43], women: data[44] }),
    },
    'angonia': {
      'posto administrativo ulongue': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo domue': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'cahora-bassa': {
      'posto administrativo songo': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo chintholo': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo chitima': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'changara': {
      'posto administrativo luenha': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'posto administrativo chioco': getPeople({ ages: data[0], men: data[83], women: data[84] }),
    },
    'chifunde': {
      'posto administrativo chifunde': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'posto administrativo mualadzi': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'posto administrativo nsadzo': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    },
    'chiuta': {
      'posto administrativo kazula': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'posto administrativo manje': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'macanga': {
      'posto administrativo furancungo': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'posto administrativo chidzolomondo': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'magoe': {
      'posto administrativo mphende': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'posto administrativo chinthopo': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'posto administrativo mucumbura': getPeople({ ages: data[0], men: data[139], women: data[140] })
    },
    'maravia': {
      'posto administrativo chiputo': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo fingoe': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'posto administrativo malowera': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'posto administrativo chipera': getPeople({ ages: data[0], men: data[159], women: data[160] })
    },
    'moatize': {
      'posto administrativo moatize': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'posto administrativo kambulatsitsi': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'posto administrativo zobue': getPeople({ ages: data[0], men: data[175], women: data[176] }),
    }, 
    'mutarara': {
      'posto administrativo nhamayabue': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'posto administrativo charre': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'posto administrativo inhangoma': getPeople({ ages: data[0], men: data[191], women: data[192] }),
    },
    'tsangano': {
      'posto administrativo ntengo-wambalame': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'posto administrativo tsangano': getPeople({ ages: data[0], men: data[203], women: data[204] })
    },
    'zumbo': {
      'posto administrativo zumbo': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'posto administrativo muze': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'posto administrativo zambue': getPeople({ ages: data[0], men: data[219], women: data[220] }),
    },
    'doa': {
      'posto administrativo doa': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'posto administrativo chueza': getPeople({ ages: data[0], men: data[231], women: data[232] })
    },
    'marara': {
      'posto administrativo marara': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'posto administrativo mufa boroma': getPeople({ ages: data[0], men: data[243], women: data[244] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}