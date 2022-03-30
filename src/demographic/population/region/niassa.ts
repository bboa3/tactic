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
    'distrito lichinga': {
      'posto administrativo sanjala': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo chiuaula': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo massenger': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'posto administrativo lulimile': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'posto administrativo meponda': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'posto administrativo lussanhando': getPeople({ ages: data[0], men: data[31], women: data[32] }),
    },
    'distrito cuamba': {
      'posto administrativo cidade de cuamba': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'posto administrativo etatara': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'posto administrativo lúrio': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'posto administrativo mepica': getPeople({ ages: data[0], men: data[51], women: data[52] })
    },
    'distrito lago': {
      'posto administrativo metangula': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'posto administrativo cóbue': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo maniamba': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo lunho': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'posto administrativo meluluca': getPeople({ ages: data[0], men: data[75], women: data[76] })
    },
    'distrito chimbunila': {
      'posto administrativo chimbunila': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'posto administrativo lione': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'distrito majune': {
      'posto administrativo malanga': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'posto administrativo muaquia': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'posto administrativo nairrubi': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'distrito mandimba': {
      'posto administrativo lissiete': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'posto administrativo mitande': getPeople({ ages: data[0], men: data[115], women: data[116] })
    },
    'distrito marrupa': {
      'posto administrativo marrupa-sede': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'posto administrativo marrangira': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'posto administrativo nungo': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'distrito maua': {
      'posto administrativo maua': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'posto administrativo maiaca': getPeople({ ages: data[0], men: data[143], women: data[144] })
    },    
    'distrito mavago': {
      'posto administrativo mavago-sede': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'posto administrativo msawize': getPeople({ ages: data[0], men: data[155], women: data[156] })
    },
    'distrito mecanhelas': {
      'posto administrativo insaca': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'posto administrativo chiuta': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'distrito mecula': {
      'posto administrativo Mecula-Sede': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'posto administrativo Matondovela': getPeople({ ages: data[0], men: data[179], women: data[180] })
    },
    'distrito metarica': {
      'posto administrativo namicundi': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'posto administrativo nacumua': getPeople({ ages: data[0], men: data[191], women: data[192] })
    },
    'distrito muembe': {
      'posto administrativo muembe': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'posto administrativo chiconono': getPeople({ ages: data[0], men: data[203], women: data[204] })
    },
    'distrito ngauma': {
      'posto administrativo massangulo (ngauma)': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'posto administrativo itepela': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'distrito nipepe': {
      'posto administrativo nipepe-sede': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'posto administrativo muluco': getPeople({ ages: data[0], men: data[227], women: data[228] })
    },
    'distrito sanga': {
      'posto administrativo unango': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'posto administrativo lussimbesse': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'posto administrativo macaloge': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'posto administrativo matchedje': getPeople({ ages: data[0], men: data[247], women: data[248] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}