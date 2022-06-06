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
      'posto administrativo urbano 1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo urbano 2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo urbano 3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'posto administrativo urbano 4': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'posto administrativo urbano 5': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'posto administrativo maquival': getPeople({ ages: data[0], men: data[31], women: data[32] }),
    },
    'alto molocue': {
      'posto administrativo alto molocue sede': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'posto administrativo nauela': getPeople({ ages: data[0], men: data[43], women: data[44] })
    },
    'chinde': {
      'posto administrativo chinde-sede': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo micaune': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'gile': {
      'posto administrativo gile': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo alto ligonha': getPeople({ ages: data[0], men: data[67], women: data[68] }),
    },
    'gurue': {
      'posto administrativo cidade de gurue': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'posto administrativo Mepuagiua': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'posto administrativo Lioma': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'ile': {
      'posto administrativo ile': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'posto administrativo Socone': getPeople({ ages: data[0], men: data[95], women: data[96] }),
    },
    'inhassunge': {
      'posto administrativo mucupia': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'posto administrativo gonhane': getPeople({ ages: data[0], men: data[107], women: data[108] })
    },
    'lugela': {
      'posto administrativo lugela-sede': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'posto administrativo tacuane': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'posto administrativo munhamade': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'maganja da costa': {
      'posto administrativo maganja da costa': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'posto administrativo nante': getPeople({ ages: data[0], men: data[135], women: data[136] }),
    },
    'milange': {
      'posto administrativo milange sede': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'posto administrativo majaua': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'posto administrativo mongue': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'mocuba': {
      'posto administrativo cidade de mocuba': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'posto administrativo mugeba': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'posto administrativo namanjavira': getPeople({ ages: data[0], men: data[167], women: data[168] })
    },
    'mopeia': {
      'posto administrativo mopeia sede': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'posto administrativo campo': getPeople({ ages: data[0], men: data[179], women: data[180] }),
    },
    'morrumbala': {
      'posto administrativo morrumbala-sede': getPeople({ ages: data[0], men: data[187], women: data[188] }),
      'posto administrativo chire': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'posto administrativo megaza': getPeople({ ages: data[0], men: data[195], women: data[196] })
    },
    'namacurra': {
      'posto administrativo namacurra sede': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'posto administrativo macuse': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'posto administrativo malei': getPeople({ ages: data[0], men: data[211], women: data[212] }),
    },
    'namarroi': {
      'posto administrativo namarroi': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'posto administrativo regone': getPeople({ ages: data[0], men: data[223], women: data[224] }),
    },
    'nicoadala': {
      'posto administrativo nicoadala sede': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'posto administrativo munhonha': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'posto administrativo namacata': getPeople({ ages: data[0], men: data[239], women: data[240] }),
    },
    'pebane': {
      'posto administrativo pebane-sede': getPeople({ ages: data[0], men: data[247], women: data[248] }),
      'posto administrativo mulela (mualama)': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'posto administrativo naburi': getPeople({ ages: data[0], men: data[255], women: data[256] }),
    },
    'derre': {
      'posto administrativo machindo': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'posto administrativo guerissa': getPeople({ ages: data[0], men: data[267], women: data[268] }),
    },
    'luabo': {
      'posto administrativo samora machel': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'posto administrativo chimbadzo': getPeople({ ages: data[0], men: data[279], women: data[280] }),
    },
    'mocubela': {
      'posto administrativo mocubela': getPeople({ ages: data[0], men: data[287], women: data[288] }),
      'posto administrativo bajone': getPeople({ ages: data[0], men: data[291], women: data[292] }),
    },
    'molumbo': {
      'posto administrativo molumbo sede': getPeople({ ages: data[0], men: data[299], women: data[300] }),
      'posto administrativo corromana': getPeople({ ages: data[0], men: data[303], women: data[304] }),
    },
    'mulevala': {
      'posto administrativo m bauane': getPeople({ ages: data[0], men: data[311], women: data[312] }),
      'posto administrativo chiraco': getPeople({ ages: data[0], men: data[315], women: data[316] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}