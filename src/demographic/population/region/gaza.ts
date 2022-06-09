import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'population', 'regions', 'gaza.json')

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
    'xai-xai': {
      'municipal sede': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'inhamissa': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'patrice lumumba': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'praia': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'chilaulene': getPeople({ ages: data[0], men: data[27], women: data[28] }),
    },
    'bilene': {
      'bilene macia': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'incaia': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'mazivila': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'messano': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'praia de bilene': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'macuane': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'chibuto': {
      'cidade de chibuto': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'alto changane': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'tchaimite': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'changanine': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'godide': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'malehice': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'chicualacuala': {
      'eduardo mondlane': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'pafuri': getPeople({ ages: data[0], men: data[95], women: data[96] }),
    },
    'chigubo': {
      'chigubo - sede': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'ndinhiza': getPeople({ ages: data[0], men: data[107], women: data[108] })
    },
    'chokwe': {
      'cidade de chokwe': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'lionde': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'macarretane': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'milembene': getPeople({ ages: data[0], men: data[127], women: data[128] })
    },
    'guija': {
      'vila caniçado': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'chivongoene': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'mubangoene': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'nalazi': getPeople({ ages: data[0], men: data[147], women: data[148] })
    },
    'mabalane': {
      'mabalane': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'combomune': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'ntlhavene': getPeople({ ages: data[0], men: data[163], women: data[164] }),
    },
    'manjacaze': {
      'manjacaze sede': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'chalala': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'chibondzane': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'chidenguele': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'macuacua': getPeople({ ages: data[0], men: data[187], women: data[188] })
    }, 
    'massangena': {
      'massangena': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'mavue': getPeople({ ages: data[0], men: data[199], women: data[200] }),
    },
    'massingir': {
      'massingir sede': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'mavodze': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'zulo': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'limpopo': {
      'chicumbane': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'chissano': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'zongoene': getPeople({ ages: data[0], men: data[231], women: data[232] }),
    },
    'chongoene': {
      'chongoene': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'mazucane': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'nguzene': getPeople({ ages: data[0], men: data[247], women: data[248] })
    },
    'mapai': {
      'mapai': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'machaila': getPeople({ ages: data[0], men: data[259], women: data[260] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}