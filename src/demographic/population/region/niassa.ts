import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'niassa.json')

export const getNiassa = async (data: any) => {
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
    'lichinga': {
      'sanjala': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'chiuaula': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'massenger': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'lulimile': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'meponda': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'lussanhando': getPeople({ ages: data[0], men: data[31], women: data[32] }),
    },
    'cuamba': {
      'cidade de cuamba': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'etatara': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'lúrio': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'mepica': getPeople({ ages: data[0], men: data[51], women: data[52] })
    },
    'lago': {
      'metangula': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'cóbue': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'maniamba': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'lunho': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'meluluca': getPeople({ ages: data[0], men: data[75], women: data[76] })
    },
    'chimbunila': {
      'chimbunila': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'lione': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'majune': {
      'malanga': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'muaquia': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'nairrubi': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'mandimba': {
      'lissiete': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'mitande': getPeople({ ages: data[0], men: data[115], women: data[116] })
    },
    'marrupa': {
      'marrupa-sede': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'marrangira': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'nungo': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'maua': {
      'maua': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'maiaca': getPeople({ ages: data[0], men: data[143], women: data[144] })
    },    
    'mavago': {
      'mavago-sede': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'msawize': getPeople({ ages: data[0], men: data[155], women: data[156] })
    },
    'mecanhelas': {
      'insaca': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'chiuta': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'mecula': {
      'Mecula-Sede': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'Matondovela': getPeople({ ages: data[0], men: data[179], women: data[180] })
    },
    'metarica': {
      'namicundi': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'nacumua': getPeople({ ages: data[0], men: data[191], women: data[192] })
    },
    'muembe': {
      'muembe': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'chiconono': getPeople({ ages: data[0], men: data[203], women: data[204] })
    },
    'ngauma': {
      'massangulo (ngauma)': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'itepela': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'nipepe': {
      'nipepe-sede': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'muluco': getPeople({ ages: data[0], men: data[227], women: data[228] })
    },
    'sanga': {
      'unango': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'lussimbesse': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'macaloge': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'matchedje': getPeople({ ages: data[0], men: data[247], women: data[248] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}