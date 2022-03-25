import { PeopleNum, Props } from "@src/demographic"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'regions', 'zambezia.json')

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
    'DISTRITO QUELIMANE': {
      'POSTO ADMINISTRATIVO URBANO 1': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO URBANO 2': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO URBANO 3': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'POSTO ADMINISTRATIVO URBANO 4': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'POSTO ADMINISTRATIVO URBANO 5': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'POSTO ADMINISTRATIVO MAQUIVAL': getPeople({ ages: data[0], men: data[31], women: data[32] }),
    },
    'DISTRITO Alto Molocue': {
      'POSTO ADMINISTRATIVO Alto Molocue sede': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'POSTO ADMINISTRATIVO Nauela': getPeople({ ages: data[0], men: data[43], women: data[44] })
    },
    'DISTRITO Chinde': {
      'POSTO ADMINISTRATIVO Chinde-Sede': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'POSTO ADMINISTRATIVO Micaune': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'DISTRITO Gile': {
      'POSTO ADMINISTRATIVO Gile': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO Alto Ligonha': getPeople({ ages: data[0], men: data[67], women: data[68] }),
    },
    'DISTRITO Gurue': {
      'POSTO ADMINISTRATIVO Cidade de Gurue': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'POSTO ADMINISTRATIVO Mepuagiua': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'POSTO ADMINISTRATIVO Lioma': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'DISTRITO Ile': {
      'POSTO ADMINISTRATIVO Ile': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'POSTO ADMINISTRATIVO Socone': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Inhassunge': {
      'POSTO ADMINISTRATIVO Mucupia': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Gonhane': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'DISTRITO Lugela': {
      'POSTO ADMINISTRATIVO Lugela-sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Tacuane': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Munhamade': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'DISTRITO Maganja da Costa': {
      'POSTO ADMINISTRATIVO Maganja da Costa': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Nante': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Milange': {
      'POSTO ADMINISTRATIVO Milange sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Majaua': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Mongue': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'DISTRITO Mocuba': {
      'POSTO ADMINISTRATIVO Cidade de Mocuba': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Mugeba': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Namanjavira': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'DISTRITO Mopeia': {
      'POSTO ADMINISTRATIVO Macuse': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Namarroi': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Morrumbala': {
      'POSTO ADMINISTRATIVO Morrumbala-Sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Chire': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Megaza': getPeople({ ages: data[0], men: data[100], women: data[100] })
    },
    'DISTRITO Namacurra': {
      'POSTO ADMINISTRATIVO Namacurra sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Macuse': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Namarroi': {
      'POSTO ADMINISTRATIVO Namarroi': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Regone': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Nicoadala': {
      'POSTO ADMINISTRATIVO Nicoadala sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Pebane': {
      'POSTO ADMINISTRATIVO Pebane-Sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Mulela (Mualama)': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Naburi': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Derre': {
      'POSTO ADMINISTRATIVO Machindo': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Guerissa': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Luabo': {
      'POSTO ADMINISTRATIVO Samora Machel': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Chimbadzo': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Mocubela': {
      'POSTO ADMINISTRATIVO Mocubela': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Bajone': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO Molumbo': {
      'POSTO ADMINISTRATIVO Molumbo sede': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO Corromana': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    },
    'DISTRITO MULEVALA': {
      'POSTO ADMINISTRATIVO M BAUANE': getPeople({ ages: data[0], men: data[100], women: data[100] }),
      'POSTO ADMINISTRATIVO CHIRACO': getPeople({ ages: data[0], men: data[100], women: data[100] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}