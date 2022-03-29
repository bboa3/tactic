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
    'DISTRITO Cidade da Matola': {
      'POSTO ADMINISTRATIVO Matola Cidade': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO Infulene': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO Machava': getPeople({ ages: data[0], men: data[19], women: data[20] })
    },
    'DISTRITO Boane': {
      'Posto Administrativo BOANE': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'POSTO ADMINISTRATIVO Matola Rio': getPeople({ ages: data[0], men: data[31], women: data[32] })
    },
    'DISTRITO Magude': {
      'Posto Administrativo MAGUDE': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'Posto administrativo MAPULANGUENE': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'Posto Administrativo MOTAZE': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'Posto Administrativo MAHELE': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'Posto Administrativo PANJANE': getPeople({ ages: data[0], men: data[55], women: data[56] })
    },
    'DISTRITO Manhica': {
      'Posto Administrativo MUNICÍPIO DE MANHIÇA': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'Posto Administrativo CALANGA': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'Posto Administrativo ILHA JOSINA MACHEL': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'Posto Administrativo MALUANA': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'Posto Administrativo XINAVANE': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'Posto Administrativo 3 DE FEVEREIRO': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'Distrito de MARRACUENE': {
      'Posto Administrativo MARRACUENE': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'Posto Administrativo MACHUBO': getPeople({ ages: data[0], men: data[95], women: data[96] })
    },
    'Distrito MATUTUINE': {
      'Posto Administrativo BELA VISTA': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      "Posto Administrativo CATEMBE M'SIME": getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'Posto Administrativo CATUANE': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'Posto Administrativo MACHANGULO': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'Posto Administrativo ZITUNDO': getPeople({ ages: data[0], men: data[119], women: data[120] })
    },
    'Distrito MOAMBA': {
      'Posto Administrativo MOAMBA': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'Posto Administrativo PESSENE': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'Posto Administrativo RESSANO GARCIA': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'Posto Administrativo SABIE': getPeople({ ages: data[0], men: data[139], women: data[140] }),
    },
    'Distrito NAMAACHA': {
      'Posto Administrativo NAMAACHA': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'Posto Administrativo CHANGALANE': getPeople({ ages: data[0], men: data[151], women: data[152] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}