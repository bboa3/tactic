import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'maputo-cidade.json')

export const getMaputoCidade = async (data: any) => {
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
    'DISTRITO Kampfumo': {
      'BAIRRO Alto Mae A': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'BAIRRO Alto Mae B': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'BAIRRO Central A': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'BAIRRO Central B': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'BAIRRO Central C': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'BAIRRO Coop': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'BAIRRO Malhangalene A': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'BAIRRO Malhangalene B': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'BAIRRO Polana Cimento A': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'BAIRRO Polana Cimento B': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'BAIRRO Sommerschield': getPeople({ ages: data[0], men: data[51], women: data[52] })
    },
    'DISTRITO Nlhamankulu': {
      'BAIRRO Aeroporto A': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'BAIRRO Aeroporto B': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'BAIRRO Chamanculo A': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'BAIRRO Chamanculo B': getPeople({ ages: data[0], men: data[71], women: data[72] }),
      'BAIRRO Chamanculo C': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'BAIRRO Chamanculo D': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'BAIRRO Malanga': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'BAIRRO Minkadjuine': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'BAIRRO Unidade 7': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'BAIRRO Xipamanine': getPeople({ ages: data[0], men: data[95], women: data[96] }),
      'BAIRRO Munhuana': getPeople({ ages: data[0], men: data[99], women: data[100] }),
    },
    'DISTRITO KaMaxakeni': {
      'BAIRRO Mafalala': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'BAIRRO Maxaquene A': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'BAIRRO Maxaquene B': getPeople({ ages: data[0], men: data[115], women: data[116] }),
      'BAIRRO Maxaquene C': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'BAIRRO Maxaquene D': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'BAIRRO Polana Canico A': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'BAIRRO Polana Canico B': getPeople({ ages: data[0], men: data[131], women: data[132] }),
      'BAIRRO Urbanizacao': getPeople({ ages: data[0], men: data[135], women: data[136] })
    },
    'DISTRITO Kamavota': {
      'BAIRRO Albazine': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'BAIRRO Costa do Sol': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'BAIRRO Ferroviario': getPeople({ ages: data[0], men: data[151], women: data[152] }),
      'BAIRRO FPLM': getPeople({ ages: data[0], men: data[155], women: data[156] }),
      'BAIRRO Hulene-A': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'BAIRRO Hulene-B': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'BAIRRO Mahotas': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'BAIRRO Mavalane A': getPeople({ ages: data[0], men: data[171], women: data[172] }),
      'BAIRRO Mavalane B': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'BAIRRO 3 de Fevereiro': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'BAIRRO Laulane': getPeople({ ages: data[0], men: data[183], women: data[184] })
    },
    'DISTRITO KaMubukwana': {
      'BAIRRO Bagamoio': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'BAIRRO George Dimitrov': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'BAIRRO Inhagoia A': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'BAIRRO Inhagoia B': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'BAIRRO Jardim': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'BAIRRO Luis Cabral': getPeople({ ages: data[0], men: data[211], women: data[212] }),
      'BAIRRO Magoanine A': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'BAIRRO Malhazine': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'BAIRRO Nsalene': getPeople({ ages: data[0], men: data[223], women: data[224] }),
      'BAIRRO 25 de Junho A': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'BAIRRO 25 de Junho B': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'BAIRRO Zimpeto': getPeople({ ages: data[0], men: data[235], women: data[236] }),
      'BAIRRO Magoanine B': getPeople({ ages: data[0], men: data[239], women: data[240] }),
      'BAIRRO Magoanine C': getPeople({ ages: data[0], men: data[243], women: data[244] })
    },
    'DISTRITO Katembe': {
      'BAIRRO Chali': getPeople({ ages: data[0], men: data[251], women: data[252] }),
      'BAIRRO Chamissava': getPeople({ ages: data[0], men: data[255], women: data[256] }),
      'BAIRRO Guachene': getPeople({ ages: data[0], men: data[259], women: data[260] }),
      'BAIRRO Incassane': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'BAIRRO Inguide': getPeople({ ages: data[0], men: data[267], women: data[268] }),
    },
    'DISTRITO Kanyaka': {
      'BAIRRO Inguane': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'BAIRRO Nhaquene': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'BAIRRO Ridzene': getPeople({ ages: data[0], men: data[283], women: data[284] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}