export interface EILines {
  EILine2: number[]
  EILine3: number[]
  EILine4: number[]
  EILine5: number[]
  EILine6: number[]
  EILine7: number[]
  EILine9: number[]
  EILine10: number[]
  EILine11: number[]
  EILine12: number[]
  EILine13: number[]
  EILine14: number[]
  EILine15: number[]
  EILine16: number[]
  EILine17: number[]
  EILine18: number[]
  EILine19: number[]
  EILine20: number[]
  EILine21: number[]
  EILine22: number[]
  EILine23: number[]
  EILine24: number[]
  EILine25: number[]
  EILine26: number[]
  EILine27: number[]
  EILine28: number[]
  EILine29: number[]
  EILine30: number[]
  EILine31: number[]
  EILine32: number[]
  EILine33: number[]
  EILine34: number[]
  EILine35: number[]
  EILine36: number[]
  EILine37: number[]
  EILine38: number[]
  EILine39: number[]
  EILine40: number[]
  EILine41: number[]
  EILine42: number[]
  EILine43: number[]
  EILine44: number[]
  EILine45: number[]
  EILine46: number[]
  EILine47: number[]
  EILine48: number[]
  EILine49: number[]
}

interface EIData {
  year: number
  eiLines: EILines
}

export const  EIFormatter = ({year, eiLines }: EIData) => {
  const {
    EILine2,
    EILine3,
    EILine4,
    EILine5,
    EILine6,
    EILine7,
    EILine9,
    EILine10,
    EILine11,
    EILine12,
    EILine13,
    EILine14,
    EILine15,
    EILine16,
    EILine17,
    EILine18,
    EILine19,
    EILine20,
    EILine21,
    EILine22,
    EILine23,
    EILine24,
    EILine25,
    EILine26,
    EILine27,
    EILine28,
    EILine29,
    EILine30,
    EILine31,
    EILine32,
    EILine33,
    EILine34,
    EILine35,
    EILine36,
    EILine37,
    EILine38,
    EILine39,
    EILine40,
    EILine41,
    EILine42,
    EILine43,
    EILine44,
    EILine45,
    EILine46,
    EILine47,
    EILine48,
    EILine49,
  } = eiLines
  const aggregate = [
    {
      id: 0,
      name: 'Índices de Emprego',
      values: getEILine(year, EILine2)
    },
    {
      id: 1,
      name: 'Indústria',
      values: getEILine(year, EILine3)
    },
    {
      id: 2,
      name: 'Comércio',
      values: getEILine(year, EILine4)
    },
    {
      id: 3,
      name: 'Transportes',
      values: getEILine(year, EILine5)
    },
    {
      id: 4,
      name: 'Aloj.Rest. similares',
      values: getEILine(year, EILine6)
    },
    {
      id: 5,
      name: 'Outros Serviços',
      values: getEILine(year, EILine7)
    }
  ]

  const industries = [
    {
      id: 0,
      name: 'Total',
      values: (year >= 2020) && getEILine(year, EILine9)
    },
    {
      id: 1,
      name: 'Indústria Extractiva',
      values: (year >= 2020) && getEILine(year, EILine10)
    },
    {
      id: 2,
      name: 'Indústria Transformadora',
      values: (year >= 2020) && getEILine(year, EILine11)
    },
    {
      id: 3,
      name: 'Hulha e Lenhite',
      values: (year >= 2020) && getEILine(year, EILine12)
    },
    {
      id: 4,
      name: 'Extracção de Hulha',
      values: (year >= 2020) && getEILine(year, EILine13)
    },
    {
      id: 5,
      name: 'Petróleo Bruto e Gás Natural',
      values: (year >= 2020) && getEILine(year, EILine14)
    },
    {
      id: 6,
      name: 'Extracção de Gás Natural e de Condensados',
      values: (year >= 2020) && getEILine(year, EILine15)
    },
    {
      id: 7,
      name: 'Minérios Metálicos',
      values: (year >= 2020) && getEILine(year, EILine16)
    },
    {
      id: 8,
      name: 'Extracção e Preparação de Minérios Metálicos não Ferrosos',
      values: (year >= 2020) && getEILine(year, EILine17)
    },
    {
      id: 9,
      name: 'Outros Produtos das Indústrias Extractivas',
      values: (year >= 2020) && getEILine(year, EILine18)
    },
    {
      id: 10,
      name: 'Extracção de Pedra, Areia e Argila',
      values: (year >= 2020) && getEILine(year, EILine19)
    },
    {
      id: 11,
      name: 'Indústrias extrativas, N.E.',
      values: (year >= 2020) && getEILine(year, EILine20)
    },
    {
      id: 12,
      name: 'Produtos Alimentares',
      values: (year >= 2020) && getEILine(year, EILine21)
    },
    {
      id: 13,
      name: 'Abate de Animais, Preparação e Conservação de Carne e de Produtos à Base de Carne',
      values: (year >= 2020) && getEILine(year, EILine22)
    },
    {
      id: 14,
      name: 'Preparação e Conservação, de Frutos e de Produtos Hortícolas',
      values: (year >= 2020) && getEILine(year, EILine23)
    },
    {
      id: 15,
      name: 'Produção de Óleos e Gorduras, Animais e Vegetais',
      values: (year >= 2020) && getEILine(year, EILine24)
    },
    {
      id: 16,
      name: 'Indústria de Lacticínios',
      values: (year >= 2020) && getEILine(year, EILine25)
    },
    {
      id: 17,
      name: 'Transformação de Cereis e Leguminosas; Fabricação de Amidos, Féculas e de Produtos afins',
      values: (year >= 2020) && getEILine(year, EILine26)
    },
    {
      id: 18,
      name: 'Fabricação de Produtos de Padaria, Pastelaria (fresca e de conservação) e de outros produtos alimentares',
      values: (year >= 2020) && getEILine(year, EILine27)
    },
    {
      id: 19,
      name: 'Fabricação de Alimentos para Animais',
      values: (year >= 2020) && getEILine(year, EILine28)
    },
    {
      id: 20,
      name: 'Bebidas',
      values: (year >= 2020) && getEILine(year, EILine29)
    },
    {
      id: 21,
      name: 'Indústria das Bebidas',
      values: (year >= 2020) && getEILine(year, EILine30)
    },
    {
      id: 22,
      name: 'Produtos da Indústria do Tabaco',
      values: (year >= 2020) && getEILine(year, EILine31)
    },
    {
      id: 23,
      name: 'Indústria do Tabaco',
      values: (year >= 2020) && getEILine(year, EILine32)
    },
    {
      id: 24,
      name: 'Madeira e suas obras (excepto mobiliário), obras de cestaria e de espartaria',
      values: (year >= 2020) && getEILine(year, EILine33)
    },
    {
      id: 25,
      name: 'Serração, Aplainamento e Impregnação da madeira',
      values: (year >= 2020) && getEILine(year, EILine34)
    },
    {
      id: 26,
      name: 'Trabalhos de Impressão e Gravação',
      values: (year >= 2020) && getEILine(year, EILine35)
    },
    {
      id: 27,
      name: 'Impressão e Actividades  dos Serviços Relacionados com a impressão',
      values: (year >= 2020) && getEILine(year, EILine36)
    },
    {
      id: 28,
      name: 'Produtos Químicos',
      values: (year >= 2020) && getEILine(year, EILine37)
    },
    {
      id: 29,
      name: 'Fabricação de Outros Produtos Químicos',
      values: (year >= 2020) && getEILine(year, EILine38)
    },
    {
      id: 30,
      name: 'Artigos de Borracha e Matérias Plásticas',
      values: (year >= 2020) && getEILine(year, EILine39)
    },
    {
      id: 31,
      name: 'Artigos de Borracha e Matérias Plásticas',
      values: (year >= 2020) && getEILine(year, EILine40)
    },
    {
      id: 32,
      name: 'Outros Produtos Minerais não Metálicos',
      values: (year >= 2020) && getEILine(year, EILine41)
    },
    {
      id: 33,
      name: 'Fabricação de Produtos Minerais não Metálicos, n.e.',
      values: (year >= 2020) && getEILine(year, EILine42)
    },
    {
      id: 34,
      name: 'Metais de Base',
      values: (year >= 2020) && getEILine(year, EILine43)
    },
    {
      id: 35,
      name: 'Indústrias Metalúrgicas de Base de Ferro e aço',
      values: (year >= 2020) && getEILine(year, EILine44)
    },
    {
      id: 36,
      name: 'Obtenção e Primeira Transformação dos Metais não Ferrosos',
      values: (year >= 2020) && getEILine(year, EILine45)
    },
    {
      id: 37,
      name: 'Produtos  Metálicos Transformados, Excepto Máquinas e Equipamento',
      values: (year >= 2020) && getEILine(year, EILine46)
    },
    {
      id: 38,
      name: 'Fabricação de Elementos de Construção em Metal,  Reservatórios e Geradores de vapor',
      values: (year >= 2020) && getEILine(year, EILine47)
    },
    {
      id: 39,
      name: 'Máquinas e Equipamentos, n.e.',
      values: (year >= 2020) && getEILine(year, EILine48)
    },
    {
      id: 40,
      name: 'Fabricação de  Máquinas e Equipamento para uso Específico',
      values: (year >= 2020) && getEILine(year, EILine49)
    }
  ]

  return {
    aggregate,
    industries
  }
}

function getEILine (year, EIs: number[]) {
  return EIs.map((EI, index) => {
    return {
      date: {
        year,
        month: index
      },
      value: EI
    }
  })
}
