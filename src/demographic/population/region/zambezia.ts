import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'zambezia.json')

export const getZambezia = async (data: any) => {
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
    'quelimane': {
      'urbano 1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'urbano 2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'urbano 3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'urbano 4': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'urbano 5': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'maquival': getPeople({ ages: data[0], men: data[31], women: data[32] }),
    },
    'alto molocue': {
      'alto molocue sede': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'nauela': getPeople({ ages: data[0], men: data[43], women: data[44] })
    },
    'chinde': {
      'chinde-sede': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'micaune': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'gile': {
      'gile': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'alto ligonha': getPeople({ ages: data[0], men: data[67], women: data[68] }),
    },
    'gurue': {
      'cidade de gurue': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'Mepuagiua': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'Lioma': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'ile': {
      'ile': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'Socone': getPeople({ ages: data[0], men: data[95], women: data[96] }),
    },
    'inhassunge': {
      'mucupia': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'gonhane': getPeople({ ages: data[0], men: data[107], women: data[108] })
    },
    'lugela': {
      'lugela-sede': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'tacuane': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'munhamade': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'maganja da costa': {
      'maganja da costa': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'nante': getPeople({ ages: data[0], men: data[135], women: data[136] }),
    },
    'milange': {
      'milange sede': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'majaua': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'mongue': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'mocuba': {
      'cidade de mocuba': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'mugeba': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'namanjavira': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'mopeia': {
      'mopeia sede': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'campo': getPeople({ ages: data[0], men: data[179], women: data[180] }),
    },
    'morrumbala': {
      'morrumbala-sede': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'chire': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'megaza': getPeople({ ages: data[0], men: data[195], women: data[196] })
    },
    'namacurra': {
      'namacurra sede': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'macuse': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'malei': getPeople({ ages: data[0], men: data[211], women: data[212] }),
    },
    'namarroi': {
      'namarroi': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'regone': getPeople({ ages: data[0], men: data[223], women: data[224] }),
    },
    'nicoadala': {
      'nicoadala sede': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'munhonha': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'namacata': getPeople({ ages: data[0], men: data[239], women: data[240] }),
    },
    'pebane': {
      'pebane-sede': getPeople({ ages: data[0], men: data[247], women: data[248] }),
      'mulela (mualama)': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'naburi': getPeople({ ages: data[0], men: data[255], women: data[256] }),
    },
    'derre': {
      'machindo': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'guerissa': getPeople({ ages: data[0], men: data[267], women: data[268] }),
    },
    'luabo': {
      'samora machel': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'chimbadzo': getPeople({ ages: data[0], men: data[279], women: data[280] }),
    },
    'mocubela': {
      'mocubela': getPeople({ ages: data[0], men: data[287], women: data[288] }),
      'bajone': getPeople({ ages: data[0], men: data[291], women: data[292] }),
    },
    'molumbo': {
      'molumbo sede': getPeople({ ages: data[0], men: data[299], women: data[300] }),
      'corromana': getPeople({ ages: data[0], men: data[303], women: data[304] }),
    },
    'mulevala': {
      'm bauane': getPeople({ ages: data[0], men: data[311], women: data[312] }),
      'chiraco': getPeople({ ages: data[0], men: data[315], women: data[316] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}