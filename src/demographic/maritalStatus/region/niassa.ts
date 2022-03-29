import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'niassa.json')

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
    'DISTRITO Lichinga': {
      'POSTO ADMINISTRATIVO Sanjala': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO Chiuaula': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO Massenger': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'POSTO ADMINISTRATIVO Lulimile': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'POSTO ADMINISTRATIVO Meponda': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'POSTO ADMINISTRATIVO Lussanhando': getPeople({ ages: data[0], men: data[31], women: data[32] }),
    },
    'DISTRITO Cuamba': {
      'POSTO ADMINISTRATIVO Cidade de Cuamba': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'POSTO ADMINISTRATIVO Etatara': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'POSTO ADMINISTRATIVO Lúrio': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'POSTO ADMINISTRATIVO Mepica': getPeople({ ages: data[0], men: data[51], women: data[52] })
    },
    'DISTRITO Lago': {
      'POSTO ADMINISTRATIVO Metangula': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'POSTO ADMINISTRATIVO Cóbue': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO Maniamba': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO Lunho': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'POSTO ADMINISTRATIVO Meluluca': getPeople({ ages: data[0], men: data[75], women: data[76] })
    },
    'DISTRITO Chimbunila': {
      'POSTO ADMINISTRATIVO Chimbunila': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'POSTO ADMINISTRATIVO Lione': getPeople({ ages: data[0], men: data[87], women: data[88] })
    },
    'DISTRITO Majune': {
      'POSTO ADMINISTRATIVO Malanga': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'POSTO ADMINISTRATIVO Muaquia': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'POSTO ADMINISTRATIVO Nairrubi': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'DISTRITO Mandimba': {
      'POSTO ADMINISTRATIVO Lissiete': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'POSTO ADMINISTRATIVO Mitande': getPeople({ ages: data[0], men: data[115], women: data[116] })
    },
    'DISTRITO Marrupa': {
      'POSTO ADMINISTRATIVO Marrupa-Sede': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'POSTO ADMINISTRATIVO Marrangira': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'POSTO ADMINISTRATIVO Nungo': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'DISTRITO Maua': {
      'POSTO ADMINISTRATIVO  Maua': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'POSTO ADMINISTRATIVO  Maiaca': getPeople({ ages: data[0], men: data[143], women: data[144] })
    },    
    'DISTRITO Mavago': {
      'POSTO ADMINISTRATIVO Mavago-Sede': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'POSTO ADMINISTRATIVO Msawize': getPeople({ ages: data[0], men: data[155], women: data[156] })
    },
    'DISTRITO Mecanhelas': {
      'POSTO ADMINISTRATIVO Insaca': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'POSTO ADMINISTRATIVO Chiuta': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'DISTRITO Mecula': {
      'POSTO ADMINISTRATIVO Mecula-Sede': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'POSTO ADMINISTRATIVO Matondovela': getPeople({ ages: data[0], men: data[179], women: data[180] })
    },
    'DISTRITO Metarica': {
      'POSTO ADMINISTRATIVO Namicundi': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'POSTO ADMINISTRATIVO Nacumua': getPeople({ ages: data[0], men: data[191], women: data[192] })
    },
    'DISTRITO Muembe': {
      'POSTO ADMINISTRATIVO Muembe': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'POSTO ADMINISTRATIVO Chiconono': getPeople({ ages: data[0], men: data[203], women: data[204] })
    },
    'DISTRITO Ngauma': {
      'POSTO ADMINISTRATIVO Massangulo (Ngauma)': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'POSTO ADMINISTRATIVO Itepela': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'DISTRITO Nipepe': {
      'POSTO ADMINISTRATIVO Nipepe-Sede': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'POSTO ADMINISTRATIVO Muluco': getPeople({ ages: data[0], men: data[227], women: data[228] })
    },
    'DISTRITO Sanga': {
      'POSTO ADMINISTRATIVO Unango': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'POSTO ADMINISTRATIVO Lussimbesse': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'POSTO ADMINISTRATIVO Macaloge': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'POSTO ADMINISTRATIVO Matchedje': getPeople({ ages: data[0], men: data[247], women: data[248] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}