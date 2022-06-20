export interface EAILines {
  EAILine2: number[]
  EAILine3: number[]
  EAILine4: number[]
  EAILine5: number[]
  EAILine6: number[]
  EAILine7: number[]
  EAILine8: number[]
  EAILine10: number[]
  EAILine11: number[]
  EAILine12: number[]
  EAILine13: number[]
  EAILine14: number[]
  EAILine15: number[]
  EAILine16: number[]
  EAILine17: number[]
  EAILine18: number[]
  EAILine19: number[]
  EAILine20: number[]
  EAILine21: number[]
  EAILine22: number[]
  EAILine23: number[]
  EAILine24: number[]
  EAILine25: number[]
  EAILine26: number[]
  EAILine27: number[]
  EAILine28: number[]
  EAILine29: number[]
  EAILine30: number[]
  EAILine31: number[]
  EAILine32: number[]
  EAILine33: number[]
  EAILine34: number[]
  EAILine35: number[]
  EAILine36: number[]
  EAILine37: number[]
  EAILine38: number[]
  EAILine39: number[]
  EAILine40: number[]
  EAILine41: number[]
  EAILine42: number[]
  EAILine43: number[]
  EAILine44: number[]
  EAILine45: number[]
  EAILine46: number[]
  EAILine47: number[]
  EAILine48: number[]
  EAILine49: number[]
}

interface EAIData {
  year: number
  eaiLines: EAILines
}

export const  EAIFormatter = ({year, eaiLines }: EAIData) => {
  const {
    EAILine2,
    EAILine3,
    EAILine4,
    EAILine5,
    EAILine6,
    EAILine7,
    EAILine8,
    EAILine10,
    EAILine11,
    EAILine12,
    EAILine13,
    EAILine14,
    EAILine15,
    EAILine16,
    EAILine17,
    EAILine18,
    EAILine19,
    EAILine20,
    EAILine21,
    EAILine22,
    EAILine23,
    EAILine24,
    EAILine25,
    EAILine26,
    EAILine27,
    EAILine28,
    EAILine29,
    EAILine30,
    EAILine31,
    EAILine32,
    EAILine33,
    EAILine34,
    EAILine35,
    EAILine36,
    EAILine37,
    EAILine38,
    EAILine39,
    EAILine40,
    EAILine41,
    EAILine42,
    EAILine43,
    EAILine44,
    EAILine45,
    EAILine46,
    EAILine47,
    EAILine48,
    EAILine49,
  } = eaiLines
  const aggregate = [
    {
      id: 0,
      name: 'Indices do Volume de Negócios',
      EAI: getEAILine(year, EAILine2)
    },
    {
      id: 1,
      name: 'Indústria',
      EAI: getEAILine(year, EAILine3)
    },
    {
      id: 2,
      name: 'Energia,Água e San',
      EAI: getEAILine(year, EAILine4)
    },
    {
      id: 3,
      name: 'Comércio',
      EAI: getEAILine(year, EAILine5)
    },
    {
      id: 4,
      name: 'Transportes',
      EAI: getEAILine(year, EAILine6)
    },
    {
      id: 5,
      name: 'Aloj.Rest. similares',
      EAI: getEAILine(year, EAILine7)
    },
    {
      id: 6,
      name: 'Outros Serviços',
      EAI: getEAILine(year, EAILine8)
    }
  ]

  const industries = [
    {
      id: 0,
      name: 'Indústria Extractiva',
      EAI: (year >= 2019) && getEAILine(year, EAILine11)
    },
    {
      id: 1,
      name: 'Indústria Transformadora',
      EAI: (year >= 2019) && getEAILine(year, EAILine12)
    },
    {
      id: 2,
      name: 'Hulha e Lenhite',
      EAI: (year >= 2019) && getEAILine(year, EAILine13)
    },
    {
      id: 3,
      name: 'Extracção de Hulha',
      EAI: (year >= 2019) && getEAILine(year, EAILine14)
    },
    {
      id: 4,
      name: 'Petróleo Bruto e Gás Natural',
      EAI: (year >= 2019) && getEAILine(year, EAILine15)
    },
    {
      id: 5,
      name: 'Extracção de Gás Natural e de Condensados',
      EAI: (year >= 2019) && getEAILine(year, EAILine16)
    },
    {
      id: 6,
      name: 'Minérios Metálicos',
      EAI: (year >= 2019) && getEAILine(year, EAILine17)
    },
    {
      id: 7,
      name: 'Extracção e Preparação de Minérios Metálicos não Ferrosos',
      EAI: (year >= 2019) && getEAILine(year, EAILine18)
    },
    {
      id: 8,
      name: 'Outros Produtos das Indústrias Extractivas',
      EAI: (year >= 2019) && getEAILine(year, EAILine19)
    },
    {
      id: 9,
      name: 'Extracção de Pedra, Areia e Argila',
      EAI: (year >= 2019) && getEAILine(year, EAILine20)
    },
    {
      id: 10,
      name: 'Produtos Alimentares',
      EAI: (year >= 2019) && getEAILine(year, EAILine21)
    },
    {
      id: 11,
      name: 'Abate de Animais, Preparação e Conservação de Carne e de Produtos à Base de Carne',
      EAI: (year >= 2019) && getEAILine(year, EAILine22)
    },
    {
      id: 12,
      name: 'Preparação e Conservação, de Frutos e de Produtos Hortícolas',
      EAI: (year >= 2019) && getEAILine(year, EAILine23)
    },
    {
      id: 13,
      name: 'Produção de Óleos e Gorduras, Animais e Vegetais',
      EAI: (year >= 2019) && getEAILine(year, EAILine24)
    },
    {
      id: 14,
      name: 'Indústria de Lacticínios',
      EAI: (year >= 2019) && getEAILine(year, EAILine25)
    },
    {
      id: 15,
      name: 'Transformação de Cereais e Leguminosas; Fabricação de Amidos, Féculas e de Produtos afins',
      EAI: (year >= 2019) && getEAILine(year, EAILine26)
    },
    {
      id: 16,
      name: 'Fabricação de Produtos de Padaria, Pastelaria (fresca e de conservação) e de outros produtos alimentares',
      EAI: (year >= 2019) && getEAILine(year, EAILine27)
    },
    {
      id: 17,
      name: 'Fabricação de Alimentos para Animais',
      EAI: (year >= 2019) && getEAILine(year, EAILine28)
    },
    {
      id: 18,
      name: 'Bebidas',
      EAI: (year >= 2019) && getEAILine(year, EAILine29)
    },
    {
      id: 19,
      name: 'Indústria das Bebidas',
      EAI: (year >= 2019) && getEAILine(year, EAILine30)
    },
    {
      id: 20,
      name: 'Produtos da Indústria do Tabaco',
      EAI: (year >= 2019) && getEAILine(year, EAILine31)
    },
    {
      id: 21,
      name: 'Indústria do Tabaco',
      EAI: (year >= 2019) && getEAILine(year, EAILine32)
    },
    {
      id: 22,
      name: 'Madeira e suas obras (excepto mobiliário), obras de cestaria e de espartaria',
      EAI: (year >= 2019) && getEAILine(year, EAILine33)
    },
    {
      id: 23,
      name: 'Serração, Aplainamento e Impregnação da madeira',
      EAI: (year >= 2019) && getEAILine(year, EAILine34)
    },
    {
      id: 24,
      name: 'Trabalhos de Impressão e Gravação',
      EAI: (year >= 2019) && getEAILine(year, EAILine35)
    },
    {
      id: 25,
      name: 'Impressão e Actividades  dos Serviços Relacionados com a impressão',
      EAI: (year >= 2019) && getEAILine(year, EAILine36)
    },
    {
      id: 26,
      name: 'Produtos Químicos',
      EAI: (year >= 2019) && getEAILine(year, EAILine37)
    },
    {
      id: 27,
      name: 'Fabricação de Outros Produtos Químicos',
      EAI: (year >= 2019) && getEAILine(year, EAILine38)
    },
    {
      id: 28,
      name: 'Artigos de Borracha e Matérias Plásticas',
      EAI: (year >= 2019) && getEAILine(year, EAILine39)
    },
    {
      id: 29,
      name: 'Artigos de Borracha e Matérias Plásticas',
      EAI: (year >= 2019) && getEAILine(year, EAILine40)
    },
    {
      id: 30,
      name: 'Outros Produtos Minerais não Metálicos',
      EAI: (year >= 2019) && getEAILine(year, EAILine41)
    },
    {
      id: 31,
      name: 'Fabricação de Produtos Minerais não Metálicos, n.e.',
      EAI: (year >= 2019) && getEAILine(year, EAILine42)
    },
    {
      id: 32,
      name: 'Metais de Base',
      EAI: (year >= 2019) && getEAILine(year, EAILine43)
    },
    {
      id: 33,
      name: 'Indústrias Metalúrgicas de Base de Ferro e aço',
      EAI: (year >= 2019) && getEAILine(year, EAILine44)
    },
    {
      id: 34,
      name: 'Obtenção e Primeira Transformação dos Metais não Ferrosos',
      EAI: (year >= 2019) && getEAILine(year, EAILine45)
    },
    {
      id: 35,
      name: 'Produtos  Metálicos Transformados, Excepto Máquinas e Equipamento',
      EAI: (year >= 2019) && getEAILine(year, EAILine46)
    },
    {
      id: 36,
      name: 'Fabricação de Elementos de Construção em Metal,  Reservatórios e Geradores de vapor',
      EAI: (year >= 2019) && getEAILine(year, EAILine47)
    },
    {
      id: 37,
      name: 'Máquinas e Equipamentos, n.e.',
      EAI: (year >= 2019) && getEAILine(year, EAILine48)
    },
    {
      id: 38,
      name: 'Fabricação de  Máquinas e Equipamento para uso Específico',
      EAI: (year >= 2019) && getEAILine(year, EAILine49)
    },
    {
      id: 10,
      name: 'Total',
      EAI: (year >= 2019) && getEAILine(year, EAILine10)
    }
  ]

  return {
    aggregate,
    industries
  }
}

function getEAILine (year, EAIs: number[]) {
  return EAIs.map((EAI, index) => {
    return {
      date: {
        year,
        month: index
      },
      value: EAI
    }
  })
}