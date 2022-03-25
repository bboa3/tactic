import { PeopleNum, Props } from "@src/demographic"
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', '..', 'files', 'demographic', 'regions', 'nampula.json')

export const getNampula = async (data: any) => {
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
    'DISTRITO Cidade de Nampula': {
      'POSTO ADMINISTRATIVO Urbano Central': getPeople({ ages: data[0], men: data[11], women: data[12] }),
      'POSTO ADMINISTRATIVO Muatala': getPeople({ ages: data[0], men: data[15], women: data[16] }),
      'POSTO ADMINISTRATIVO Muhala': getPeople({ ages: data[0], men: data[19], women: data[20] }),
      'POSTO ADMINISTRATIVO Namicopo': getPeople({ ages: data[0], men: data[23], women: data[24] }),
      'POSTO ADMINISTRATIVO Napipine': getPeople({ ages: data[0], men: data[27], women: data[28] }),
      'POSTO ADMINISTRATIVO Natikire': getPeople({ ages: data[0], men: data[31], women: data[32] }),
      'POSTO ADMINISTRATIVO Anchilo': getPeople({ ages: data[0], men: data[35], women: data[36] })
    },
    'DISTRITO Angoche': {
      'POSTO ADMINISTRATIVO Cidade de Angoche': getPeople({ ages: data[0], men: data[43], women: data[44] }),
      'POSTO ADMINISTRATIVO Aube': getPeople({ ages: data[0], men: data[47], women: data[48] }),
      'POSTO ADMINISTRATIVO Namaponda': getPeople({ ages: data[0], men: data[51], women: data[52] }),
      'POSTO ADMINISTRATIVO Boila Nametoria': getPeople({ ages: data[0], men: data[55], women: data[56] }),
    },
    'DISTRITO Erati': {
      'POSTO ADMINISTRATIVO Namapa-Sede': getPeople({ ages: data[0], men: data[63], women: data[64] }),
      'POSTO ADMINISTRATIVO Alua': getPeople({ ages: data[0], men: data[67], women: data[68] }),
      'POSTO ADMINISTRATIVO Namiroa': getPeople({ ages: data[0], men: data[71], women: data[72] })
    },
    'DISTRITO  Ilha de Mocambique': {
      'POSTO ADMINISTRATIVO Ilha de Mocambique': getPeople({ ages: data[0], men: data[79], women: data[80] }),
      'POSTO ADMINISTRATIVO Lumbo': getPeople({ ages: data[0], men: data[83], women: data[84] })
    },
    'DISTRITO Lalaua': {
      'POSTO ADMINISTRATIVO Lalaua': getPeople({ ages: data[0], men: data[91], women: data[92] }),
      'POSTO ADMINISTRATIVO Meti': getPeople({ ages: data[0], men: data[95], women: data[96] })
    },
    'DISTRITO Malema': {
      'POSTO ADMINISTRATIVO Malema/Canhunha': getPeople({ ages: data[0], men: data[103], women: data[104] }),
      'POSTO ADMINISTRATIVO Chilulo': getPeople({ ages: data[0], men: data[107], women: data[108] }),
      'POSTO ADMINISTRATIVO Mutuali': getPeople({ ages: data[0], men: data[111], women: data[112] })
    },
    'DISTRITO Meconta': {
      'POSTO ADMINISTRATIVO Meconta': getPeople({ ages: data[0], men: data[119], women: data[120] }),
      'POSTO ADMINISTRATIVO Corrane': getPeople({ ages: data[0], men: data[123], women: data[124] }),
      'POSTO ADMINISTRATIVO Namialo': getPeople({ ages: data[0], men: data[127], women: data[128] }),
      'POSTO ADMINISTRATIVO 7 de Abril': getPeople({ ages: data[0], men: data[131], women: data[132] }),
    },
    'DISTRITO Mecuburi': {
      'POSTO ADMINISTRATIVO Mecuburi': getPeople({ ages: data[0], men: data[139], women: data[140] }),
      'POSTO ADMINISTRATIVO Milhana': getPeople({ ages: data[0], men: data[143], women: data[144] }),
      'POSTO ADMINISTRATIVO Muite': getPeople({ ages: data[0], men: data[147], women: data[148] }),
      'POSTO ADMINISTRATIVO Nanima': getPeople({ ages: data[0], men: data[151], women: data[152] })
    }, 
    'DISTRITO Memba': {
      'POSTO ADMINISTRATIVO Memba': getPeople({ ages: data[0], men: data[159], women: data[160] }),
      'POSTO ADMINISTRATIVO Chipene': getPeople({ ages: data[0], men: data[163], women: data[164] }),
      'POSTO ADMINISTRATIVO Lurio': getPeople({ ages: data[0], men: data[167], women: data[168] }),
      'POSTO ADMINISTRATIVO Mazua': getPeople({ ages: data[0], men: data[171], women: data[172] })
    },
    'DISTRITO Mogincual': {
      'POSTO ADMINISTRATIVO Naminge': getPeople({ ages: data[0], men: data[179], women: data[180] }),
      'POSTO ADMINISTRATIVO Quixaxe': getPeople({ ages: data[0], men: data[183], women: data[184] })
    },
    'DISTRITO Mogovolas': {
      'POSTO ADMINISTRATIVO Nametil Sede': getPeople({ ages: data[0], men: data[191], women: data[192] }),
      'POSTO ADMINISTRATIVO Calipo': getPeople({ ages: data[0], men: data[195], women: data[196] }),
      'POSTO ADMINISTRATIVO Ilute': getPeople({ ages: data[0], men: data[199], women: data[200] }),
      'POSTO ADMINISTRATIVO Muatua': getPeople({ ages: data[0], men: data[203], women: data[204] }),
      'POSTO ADMINISTRATIVO Nanhupo Rio': getPeople({ ages: data[0], men: data[207], women: data[208] }),
    },
    'DISTRITO Moma': {
      'POSTO ADMINISTRATIVO  Macone Sede': getPeople({ ages: data[0], men: data[215], women: data[216] }),
      'POSTO ADMINISTRATIVO Chalaua': getPeople({ ages: data[0], men: data[219], women: data[220] })
    },
    'DISTRITO Monapo': {
      'POSTO ADMINISTRATIVO Monapo Sede': getPeople({ ages: data[0], men: data[227], women: data[228] }),
      'POSTO ADMINISTRATIVO Ituculo': getPeople({ ages: data[0], men: data[231], women: data[232] }),
      'POSTO ADMINISTRATIVO Netia': getPeople({ ages: data[0], men: data[235], women: data[236] })
    },
    'DISTRITO Mossuril': {
      'POSTO ADMINISTRATIVO Mossuril Sede': getPeople({ ages: data[0], men: data[243], women: data[244] }),
      'POSTO ADMINISTRATIVO Lunga': getPeople({ ages: data[0], men: data[247], women: data[248] }),
      'POSTO ADMINISTRATIVO Matibane': getPeople({ ages: data[0], men: data[251], women: data[252] })
    },
    'DISTRITO Muecate': {
      'POSTO ADMINISTRATIVO Muecate': getPeople({ ages: data[0], men: data[259], women: data[260] }),
      'POSTO ADMINISTRATIVO Imala': getPeople({ ages: data[0], men: data[263], women: data[264] }),
      'POSTO ADMINISTRATIVO Mucoluane': getPeople({ ages: data[0], men: data[267], women: data[268] })
    },
    'DISTRITO Murrupula': {
      'POSTO ADMINISTRATIVO Murrupula': getPeople({ ages: data[0], men: data[275], women: data[276] }),
      'POSTO ADMINISTRATIVO Chinga': getPeople({ ages: data[0], men: data[279], women: data[280] }),
      'POSTO ADMINISTRATIVO Nihessiue': getPeople({ ages: data[0], men: data[283], women: data[284] })
    },
    'DISTRITO Nacala Porto': {
      'POSTO ADMINISTRATIVO Mutiva': getPeople({ ages: data[0], men: data[291], women: data[292] }),
      'POSTO ADMINISTRATIVO Muanona': getPeople({ ages: data[0], men: data[295], women: data[296] })
    },
    'DISTRITO Nacala Velha': {
      'POSTO ADMINISTRATIVO Nacala Velha': getPeople({ ages: data[0], men: data[303], women: data[304] }),
      'POSTO ADMINISTRATIVO Covo': getPeople({ ages: data[0], men: data[307], women: data[308] }),
      'POSTO ADMINISTRATIVO Barragem': getPeople({ ages: data[0], men: data[311], women: data[312] })
    },
    'DISTRITO Nacaroa': {
      'POSTO ADMINISTRATIVO Nacaroa': getPeople({ ages: data[0], men: data[319], women: data[320] }),
      'POSTO ADMINISTRATIVO Intete': getPeople({ ages: data[0], men: data[323], women: data[324] }),
      'POSTO ADMINISTRATIVO Saua-Saua': getPeople({ ages: data[0], men: data[327], women: data[328] })
    },
    'DISTRITO Rapale': {
      'POSTO ADMINISTRATIVO Rapale': getPeople({ ages: data[0], men: data[335], women: data[336] }),
      'POSTO ADMINISTRATIVO Mutivaze': getPeople({ ages: data[0], men: data[339], women: data[340] }),
      'POSTO ADMINISTRATIVO Namaita': getPeople({ ages: data[0], men: data[343], women: data[344] })
    },
    'DISTRITO Ribaue': {
      'POSTO ADMINISTRATIVO Ribaue': getPeople({ ages: data[0], men: data[351], women: data[352] }),
      'POSTO ADMINISTRATIVO Cunle': getPeople({ ages: data[0], men: data[355], women: data[356] }),
      'POSTO ADMINISTRATIVO Iapala': getPeople({ ages: data[0], men: data[359], women: data[360] })
    },
    'DISTRITO Larde': {
      'POSTO ADMINISTRATIVO Larde': getPeople({ ages: data[0], men: data[367], women: data[368] }),
      'POSTO ADMINISTRATIVO Mucuali': getPeople({ ages: data[0], men: data[371], women: data[372] }),
    },
    'DISTRITO Liupo': {
      'POSTO ADMINISTRATIVO Liupo': getPeople({ ages: data[0], men: data[379], women: data[380] }),
      'POSTO ADMINISTRATIVO Quinga': getPeople({ ages: data[0], men: data[383], women: data[384] }),
    }
  }

  await fs.writeFile(path, JSON.stringify(people))

  return people
}