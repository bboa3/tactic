import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'gaza.json')

export const getGaza = async (data: any) => {
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
    'DISTRITO DE XAI-XAI': {
      'POSTO ADMINISTRATIVO Municipal Sede': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO Inhamissa': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO Patrice Lumumba': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'POSTO ADMINISTRATIVO Praia': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'POSTO ADMINISTRATIVO Chilaulene': getPeople({ ages: data[0], men: data[27], women: data[28] }),
    },
    'DISTRITO BILENE': {
      'POSTO ADMINISTRATIVO BILENE MACIA': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'POSTO ADMINISTRATIVO INCAIA': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'POSTO ADMINISTRATIVO MAZIVILA': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'POSTO ADMINISTRATIVO MESSANO': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'POSTO ADMINISTRATIVO PRAIA DE BILENE': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'POSTO ADMINISTRATIVO MACUANE': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'DISTRITO de CHIBUTO': {
      'POSTO ADMINISTRATIVO CIDADE DE CHIBUTO': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO ALTO CHANGANE': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO TCHAIMITE': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'POSTO ADMINISTRATIVO CHANGANINE': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'POSTO ADMINISTRATIVO GODIDE': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'POSTO ADMINISTRATIVO MALEHICE': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'DISTRITO CHICUALACUALA': {
      'POSTO ADMINISTRATIVO EDUARDO MONDLANE': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'POSTO ADMINISTRATIVO PAFURI': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'POSTO ADMINISTRATIVO CHIGUBO - SEDE': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'POSTO ADMINISTRATIVO NDINDIZA': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'DISTRITO Chokwe': {
      'POSTO ADMINISTRATIVO Cidade de Chokwe': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'POSTO ADMINISTRATIVO Lionde': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'POSTO ADMINISTRATIVO Macarretane': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'POSTO ADMINISTRATIVO Xilembene': getPeople({ ages: data[0], men: data[123], women: data[124] })
    },
    'DISTRITO Guija': {
      'POSTO ADMINISTRATIVO Vila Caniçado': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'POSTO ADMINISTRATIVO Chivongoene': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'POSTO ADMINISTRATIVO Mubangoene': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'POSTO ADMINISTRATIVO Nalazi': getPeople({ ages: data[0], men: data[143], women: data[144] })
    },
    'DISTRITO Mabalane': {
      'POSTO ADMINISTRATIVO Mabalane': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'POSTO ADMINISTRATIVO Combomune': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'POSTO ADMINISTRATIVO Ntlhavene': getPeople({ ages: data[0], men: data[159], women: data[160] }),
    },
    'DISTRITO Mandlakaze': {
      'POSTO ADMINISTRATIVO Mandlakaze Sede': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'POSTO ADMINISTRATIVO Chalala': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'POSTO ADMINISTRATIVO Chibondzane': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'POSTO ADMINISTRATIVO Chidenguele': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'POSTO ADMINISTRATIVO Macuacua': getPeople({ ages: data[0], men: data[183], women: data[184] })
    }, 
    'DISTRITO Massangena': {
      'POSTO ADMINISTRATIVO Massangena': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'POSTO ADMINISTRATIVO Mavue': getPeople({ ages: data[0], men: data[195], women: data[196] }),
    },
    'DISTRITO Massingir': {
      'POSTO ADMINISTRATIVO Massingir Sede': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'POSTO ADMINISTRATIVO Mavodze': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'POSTO ADMINISTRATIVO Zulo': getPeople({ ages: data[0], men: data[211], women: data[212] })
    },
    'DISTRITO Limpopo': {
      'POSTO ADMINISTRATIVO Chicumbane': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'POSTO ADMINISTRATIVO Chissano': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'Posto Administrativo ZONGOENE': getPeople({ ages: data[0], men: data[227], women: data[228] }),
    },
    'DISTRITO Chongoene': {
      'POSTO ADMINISTRATIVO Chongoene': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'POSTO ADMINISTRATIVO Mazucane': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'POSTO ADMINISTRATIVO Nguzene': getPeople({ ages: data[0], men: data[243], women: data[244] })
    },
    'DISTRITO Mapai': {
      'POSTO ADMINISTRATIVO  Mapai': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'POSTO ADMINISTRATIVO  Machaila': getPeople({ ages: data[0], men: data[255], women: data[256] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}