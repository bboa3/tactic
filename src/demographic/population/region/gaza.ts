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
      'posto administrativo municipal sede': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'posto administrativo inhamissa': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'posto administrativo patrice lumumba': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'posto administrativo praia': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'posto administrativo chilaulene': getPeople({ ages: data[0], men: data[27], women: data[28] }),
    },
    'bilene': {
      'posto administrativo bilene macia': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'posto administrativo incaia': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'posto administrativo mazivila': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'posto administrativo messano': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'posto administrativo praia de bilene': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'posto administrativo macuane': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'chibuto': {
      'posto administrativo cidade de chibuto': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'posto administrativo alto changane': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'posto administrativo tchaimite': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'posto administrativo changanine': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'posto administrativo godide': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'posto administrativo malehice': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'chicualacuala': {
      'posto administrativo eduardo mondlane': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'posto administrativo pafuri': getPeople({ ages: data[0], men: data[95], women: data[96] }),
    },
    'chigubo': {
      'posto administrativo chigubo - sede': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'posto administrativo ndinhiza': getPeople({ ages: data[0], men: data[107], women: data[108] })
    },
    'chokwe': {
      'posto administrativo cidade de chokwe': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'posto administrativo lionde': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'posto administrativo macarretane': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'posto administrativo milembene': getPeople({ ages: data[0], men: data[127], women: data[128] })
    },
    'guija': {
      'posto administrativo vila caniçado': getPeople({ ages: data[0], men: data[135], women: data[136] }),
      'posto administrativo chivongoene': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'posto administrativo mubangoene': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'posto administrativo nalazi': getPeople({ ages: data[0], men: data[147], women: data[148] })
    },
    'mabalane': {
      'posto administrativo mabalane': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'posto administrativo combomune': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'posto administrativo ntlhavene': getPeople({ ages: data[0], men: data[163], women: data[164] }),
    },
    'mandlakaze': {
      'posto administrativo mandlakaze sede': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'posto administrativo chalala': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'posto administrativo chibondzane': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'posto administrativo chidenguele': getPeople({ ages: data[0], men: data[183], women: data[184] }),
      'posto administrativo macuacua': getPeople({ ages: data[0], men: data[187], women: data[188] })
    }, 
    'massangena': {
      'posto administrativo massangena': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'posto administrativo mavue': getPeople({ ages: data[0], men: data[199], women: data[200] }),
    },
    'massingir': {
      'posto administrativo massingir sede': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'posto administrativo mavodze': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'posto administrativo zulo': getPeople({ ages: data[0], men: data[215], women: data[216] })
    },
    'limpopo': {
      'posto administrativo chicumbane': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'posto administrativo chissano': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'posto administrativo zONGOENE': getPeople({ ages: data[0], men: data[231], women: data[232] }),
    },
    'chongoene': {
      'posto administrativo chongoene': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'posto administrativo mazucane': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'posto administrativo nguzene': getPeople({ ages: data[0], men: data[247], women: data[248] })
    },
    'mapai': {
      'posto administrativo  mapai': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'posto administrativo  machaila': getPeople({ ages: data[0], men: data[259], women: data[260] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}