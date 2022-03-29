import { PeopleNum, Props } from "@src/demographic/population"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', '..', 'files', 'demographic', 'maritalStatus', 'regions', 'tete.json')

export const getTete = async (data: any) => {
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
    'DISTRITO Cidade de Tete': {
      'BAIRRO Degue': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'BAIRRO Filipe Samuel Magaia': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'BAIRRO Francisco Manyanga': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'BAIRRO Josina Machel': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'BAIRRO Mateus S. Muthemba': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'BAIRRO Matundo': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'BAIRRO Mpadue': getPeople({ ages: data[0], men: data[35], women: data[36] }),
      'BAIRRO Chingodzi': getPeople({ ages: data[0], men: data[39], women: data[40] }),
      'BAIRRO Samora Machel': getPeople({ ages: data[0], men: data[43], women: data[44] }),
    },
    'DISTRITO Angonia': {
      'POSTO ADMINISTRATIVO Ulongue': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'POSTO ADMINISTRATIVO Domue': getPeople({ ages: data[0], men: data[55], women: data[56] }),
      'POSTO ADMINISTRATIVO Songo': getPeople({ ages: data[0], men: data[59], women: data[60] }),
      'POSTO ADMINISTRATIVO Chintholo': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO Chitima': getPeople({ ages: data[0], men: data[67], women: data[68] }),
    },
    'DISTRITO Changara': {
      'POSTO ADMINISTRATIVO Luenha': getPeople({ ages: data[0], men: data[75], women: data[76] }),
      'POSTO ADMINISTRATIVO Chioco': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'POSTO ADMINISTRATIVO Chifunde': getPeople({ ages: data[0], men: data[83], women: data[84] }),
      'POSTO ADMINISTRATIVO Mualadzi': getPeople({ ages: data[0], men: data[87], women: data[88] }),
      'POSTO ADMINISTRATIVO Nsadzo': getPeople({ ages: data[0], men: data[91], women: data[92] }),
    },
    'DISTRITO Chiuta': {
      'POSTO ADMINISTRATIVO Kazula': getPeople({ ages: data[0], men: data[99], women: data[100] }),
      'POSTO ADMINISTRATIVO Manje': getPeople({ ages: data[0], men: data[103], women: data[104] })
    },
    'DISTRITO Macanga': {
      'POSTO ADMINISTRATIVO Furancungo': getPeople({ ages: data[0], men: data[111], women: data[112] }),
      'POSTO ADMINISTRATIVO Chidzolomondo': getPeople({ ages: data[0], men: data[115], women: data[116] })
    },
    'DISTRITO Magoe': {
      'POSTO ADMINISTRATIVO Mphende': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'POSTO ADMINISTRATIVO Chinthopo': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'POSTO ADMINISTRATIVO Mucumbura': getPeople({ ages: data[0], men: data[131], women: data[132] })
    },
    'DISTRITO Maravia': {
      'POSTO ADMINISTRATIVO Chiputo': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'POSTO ADMINISTRATIVO Fingoe': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'POSTO ADMINISTRATIVO Malowera': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'POSTO ADMINISTRATIVO Chipera': getPeople({ ages: data[0], men: data[151], women: data[152] })
    },
    'DISTRITO Moatize': {
      'POSTO ADMINISTRATIVO Moatize': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'POSTO ADMINISTRATIVO Kambulatsitsi': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'POSTO ADMINISTRATIVO Zobue': getPeople({ ages: data[0], men: data[167], women: data[168] }),
    }, 
    'DISTRITO Mutarara': {
      'POSTO ADMINISTRATIVO Nhamayabue': getPeople({ ages: data[0], men: data[175], women: data[176] }),
      'POSTO ADMINISTRATIVO Charre': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'POSTO ADMINISTRATIVO Inhangoma': getPeople({ ages: data[0], men: data[183], women: data[184] }),
    },
    'DISTRITO Tsangano': {
      'POSTO ADMINISTRATIVO Ntengo-Wambalame': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'POSTO ADMINISTRATIVO Tsangano': getPeople({ ages: data[0], men: data[195], women: data[196] })
    },
    'DISTRITO Zumbo': {
      'POSTO ADMINISTRATIVO Zumbo': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'POSTO ADMINISTRATIVO Muze': getPeople({ ages: data[0], men: data[207], women: data[208] }),
      'POSTO ADMINISTRATIVO Zambue': getPeople({ ages: data[0], men: data[211], women: data[212] }),
    },
    'DISTRITO Doa': {
      'POSTO ADMINISTRATIVO Doa': getPeople({ ages: data[0], men: data[219], women: data[220] }),
      'POSTO ADMINISTRATIVO Chueza': getPeople({ ages: data[0], men: data[223], women: data[224] })
    },
    'DISTRITO Marara': {
      'POSTO ADMINISTRATIVO Marara': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'POSTO ADMINISTRATIVO Mufa Boroma': getPeople({ ages: data[0], men: data[235], women: data[236] })
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}