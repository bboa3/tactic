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
      'posto administrativo Socone': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'inhassunge': {
      'posto administrativo mucupia': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo gonhane': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'lugela': {
      'posto administrativo lugela-sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo tacuane': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo munhamade': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'maganja da costa': {
      'posto administrativo maganja da costa': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo nante': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'milange': {
      'posto administrativo milange sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo majaua': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo mongue': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'mocuba': {
      'posto administrativo cidade de mocuba': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo mugeba': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo namanjavira': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'mopeia': {
      'posto administrativo macuse': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo namarroi': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'morrumbala': {
      'posto administrativo morrumbala-sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo chire': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo megaza': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'namacurra': {
      'posto administrativo namacurra sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo macuse': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'namarroi': {
      'posto administrativo namarroi': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo regone': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'nicoadala': {
      'posto administrativo nicoadala sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'pebane': {
      'posto administrativo pebane-sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo mulela (mualama)': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo naburi': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'derre': {
      'posto administrativo machindo': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo guerissa': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'luabo': {
      'posto administrativo samora machel': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo chimbadzo': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'mocubela': {
      'posto administrativo mocubela': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo bajone': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'molumbo': {
      'posto administrativo molumbo sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo corromana': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'mulevala': {
      'posto administrativo m bauane': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'posto administrativo chiraco': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}