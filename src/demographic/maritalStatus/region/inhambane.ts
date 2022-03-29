import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'inhambane.json')

export const getInhambane = async (data: any) => {
  const getPeople = (pop: number[]) => {
    return {
      homens: {
        Solteiros: pop[8],
        Casados: pop[9],
        'União Marital':pop[10],
        'Divorciados/Separados': pop[11],
        Viúvos: pop[12]
      },
      mulheres: {
        Solteiras: pop[14],
        Casadas: pop[15],
        'União Marital': pop[16],
        'Divorciadas/Separadas': pop[17],
        Viúvas: pop[18]
      }
    }
  }

  const people = {
    'DISTRITO Cidade de Inhambane': {
      'POSTO ADMINISTRATIVO Cidade de Inhambane': getPeople({ ages: data[0], men: data[11], women: data[12] }),
    },
    'DISTRITO Funhalouro': {
      'POSTO ADMINISTRATIVO Funhalouro': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'POSTO ADMINISTRATIVO Tome': getPeople({ ages: data[0], men: data[23], women: data[24] }),
    },
    'DISTRITO Govuro': {
      'POSTO ADMINISTRATIVO Nova Mambone': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'POSTO ADMINISTRATIVO Save': getPeople({ ages: data[0], men: data[35], women: data[36] }),
    },
    'DISTRITO Homoine': {
      'POSTO ADMINISTRATIVO Homoine-Sede': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'POSTO ADMINISTRATIVO Pembe': getPeople({ ages: data[0], men: data[47], women: data[48] }),
    },
    'DISTRITO Inharrime': {
      'POSTO ADMINISTRATIVO Inharrime Sede': getPeople({ ages: data[0], men: data[55], women: data[56] }),
      'POSTO ADMINISTRATIVO Mucumbi': getPeople({ ages: data[0], men: data[59], women: data[60] })
    },
    'DISTRITO Inhassoro': {
      'POSTO ADMINISTRATIVO Inhassoro': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO Bazaruto': getPeople({ ages: data[0], men: data[71], women: data[72] }),
    },
    'DISTRITO Jangamo': {
      'POSTO ADMINISTRATIVO Jangamo': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'POSTO ADMINISTRATIVO Cumbana': getPeople({ ages: data[0], men: data[83], women: data[84] }),
    },
    'DISTRITO Mabote': {
      'POSTO ADMINISTRATIVO Mabote': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'POSTO ADMINISTRATIVO Zimane': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'POSTO ADMINISTRATIVO Zinave': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    }, 
    'DISTRITO Massinga': {
      'POSTO ADMINISTRATIVO Massinga': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'POSTO ADMINISTRATIVO Chicomo': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'DISTRITO Cidade de Maxixe': {
      'POSTO ADMINISTRATIVO Cidade de Maxixe': getPeople({ ages: data[0], men: data[119], women: data[120] }),
    },
    'DISTRITO Morrumbene': {
      'POSTO ADMINISTRATIVO Morrumbene': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'POSTO ADMINISTRATIVO Mocoduene': getPeople({ ages: data[0], men: data[131], women: data[132] }),
    },
    'DISTRITO Panda': {
      'POSTO ADMINISTRATIVO Panda': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'POSTO ADMINISTRATIVO Mawayela': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'POSTO ADMINISTRATIVO Urrene': getPeople({ ages: data[0], men: data[147], women: data[148] })
    },
    'DISTRITO Vilankulo': {
      'POSTO ADMINISTRATIVO Vilankulo': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'POSTO ADMINISTRATIVO Mapinhane': getPeople({ ages: data[0], men: data[159], women: data[160] }),
    },
    'DISTRITO Zavala': {
      'POSTO ADMINISTRATIVO Quissico': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'POSTO ADMINISTRATIVO Zandamela': getPeople({ ages: data[0], men: data[171], women: data[172] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}