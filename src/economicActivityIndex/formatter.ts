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
  EAILine50: number[]
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
    EAILine50,
  } = eaiLines
  const aggregate = [
    {
      id: 0,
      name: 'Indices do Volume de Negócios',
      values: getEAILine(year, EAILine2)
    },
    {
      id: 1,
      name: 'Indústria',
      values: getEAILine(year, EAILine3)
    },
    {
      id: 2,
      name: 'Energia,Água e San',
      values: getEAILine(year, EAILine4)
    },
    {
      id: 3,
      name: 'Comércio',
      values: getEAILine(year, EAILine5)
    },
    {
      id: 4,
      name: 'Transportes',
      values: getEAILine(year, EAILine6)
    },
    {
      id: 5,
      name: 'Aloj.Rest. similares',
      values: getEAILine(year, EAILine7)
    },
    {
      id: 6,
      name: 'Outros Serviços',
      values: getEAILine(year, EAILine8)
    }
  ]

  const industries = [
    {
      id: 0,
      name: 'Total',
      values: (year >= 2020) && getEAILine(year, EAILine10)
    },
    {
      id: 1,
      name: 'Indústria Extractiva',
      values: (year >= 2020) && getEAILine(year, EAILine11)
    },
    {
      id: 2,
      name: 'Indústria Transformadora',
      values: (year >= 2020) && getEAILine(year, EAILine12)
    },
    {
      id: 3,
      name: 'Hulha e Lenhite',
      values: (year >= 2020) && getEAILine(year, EAILine13)
    },
    {
      id: 4,
      name: 'Extracção de Hulha',
      values: (year >= 2020) && getEAILine(year, EAILine14)
    },
    {
      id: 5,
      name: 'Petróleo Bruto e Gás Natural',
      values: (year >= 2020) && getEAILine(year, EAILine15)
    },
    {
      id: 6,
      name: 'Extracção de Gás Natural e de Condensados',
      values: (year >= 2020) && getEAILine(year, EAILine16)
    },
    {
      id: 7,
      name: 'Minérios Metálicos',
      values: (year >= 2020) && getEAILine(year, EAILine17)
    },
    {
      id: 8,
      name: 'Extracção e Preparação de Minérios Metálicos não Ferrosos',
      values: (year >= 2020) && getEAILine(year, EAILine18)
    },
    {
      id: 9,
      name: 'Outros Produtos das Indústrias Extractivas',
      values: (year >= 2020) && getEAILine(year, EAILine19)
    },
    {
      id: 10,
      name: 'Extracção de Pedra, Areia e Argila',
      values: (year >= 2020) && getEAILine(year, EAILine20)
    },
    {
      id: 11,
      name: 'Indústrias extrativas, N.E.',
      values: (year >= 2020) && getEAILine(year, EAILine21)
    },
    {
      id: 12,
      name: 'Produtos Alimentares',
      values: (year >= 2020) && getEAILine(year, EAILine22)
    },
    {
      id: 13,
      name: 'Abate de Animais, Preparação e Conservação de Carne e de Produtos à Base de Carne',
      values: (year >= 2020) && getEAILine(year, EAILine23)
    },
    {
      id: 14,
      name: 'Preparação e Conservação, de Frutos e de Produtos Hortícolas',
      values: (year >= 2020) && getEAILine(year, EAILine24)
    },
    {
      id: 15,
      name: 'Produção de Óleos e Gorduras, Animais e Vegetais',
      values: (year >= 2020) && getEAILine(year, EAILine25)
    },
    {
      id: 16,
      name: 'Indústria de Lacticínios',
      values: (year >= 2020) && getEAILine(year, EAILine26)
    },
    {
      id: 17,
      name: 'Transformação de Cereais e Leguminosas; Fabricação de Amidos, Féculas e de Produtos afins',
      values: (year >= 2020) && getEAILine(year, EAILine27)
    },
    {
      id: 18,
      name: 'Fabricação de Produtos de Padaria, Pastelaria (fresca e de conservação) e de outros produtos alimentares',
      values: (year >= 2020) && getEAILine(year, EAILine28)
    },
    {
      id: 19,
      name: 'Fabricação de Alimentos para Animais',
      values: (year >= 2020) && getEAILine(year, EAILine29)
    },
    {
      id: 20,
      name: 'Bebidas',
      values: (year >= 2020) && getEAILine(year, EAILine30)
    },
    {
      id: 21,
      name: 'Indústria das Bebidas',
      values: (year >= 2020) && getEAILine(year, EAILine31)
    },
    {
      id: 22,
      name: 'Produtos da Indústria do Tabaco',
      values: (year >= 2020) && getEAILine(year, EAILine32)
    },
    {
      id: 23,
      name: 'Indústria do Tabaco',
      values: (year >= 2020) && getEAILine(year, EAILine33)
    },
    {
      id: 24,
      name: 'Madeira e suas obras (excepto mobiliário), obras de cestaria e de espartaria',
      values: (year >= 2020) && getEAILine(year, EAILine34)
    },
    {
      id: 25,
      name: 'Serração, Aplainamento e Impregnação da madeira',
      values: (year >= 2020) && getEAILine(year, EAILine35)
    },
    {
      id: 26,
      name: 'Trabalhos de Impressão e Gravação',
      values: (year >= 2020) && getEAILine(year, EAILine36)
    },
    {
      id: 27,
      name: 'Impressão e Actividades  dos Serviços Relacionados com a impressão',
      values: (year >= 2020) && getEAILine(year, EAILine37)
    },
    {
      id: 28,
      name: 'Produtos Químicos',
      values: (year >= 2020) && getEAILine(year, EAILine38)
    },
    {
      id: 29,
      name: 'Fabricação de Outros Produtos Químicos',
      values: (year >= 2020) && getEAILine(year, EAILine39)
    },
    {
      id: 30,
      name: 'Artigos de Borracha e Matérias Plásticas',
      values: (year >= 2020) && getEAILine(year, EAILine40)
    },
    {
      id: 31,
      name: 'Artigos de Borracha e Matérias Plásticas',
      values: (year >= 2020) && getEAILine(year, EAILine41)
    },
    {
      id: 32,
      name: 'Outros Produtos Minerais não Metálicos',
      values: (year >= 2020) && getEAILine(year, EAILine42)
    },
    {
      id: 33,
      name: 'Fabricação de Produtos Minerais não Metálicos, n.e.',
      values: (year >= 2020) && getEAILine(year, EAILine43)
    },
    {
      id: 34,
      name: 'Metais de Base',
      values: (year >= 2020) && getEAILine(year, EAILine44)
    },
    {
      id: 35,
      name: 'Indústrias Metalúrgicas de Base de Ferro e aço',
      values: (year >= 2020) && getEAILine(year, EAILine45)
    },
    {
      id: 36,
      name: 'Obtenção e Primeira Transformação dos Metais não Ferrosos',
      values: (year >= 2020) && getEAILine(year, EAILine46)
    },
    {
      id: 37,
      name: 'Produtos  Metálicos Transformados, Excepto Máquinas e Equipamento',
      values: (year >= 2020) && getEAILine(year, EAILine47)
    },
    {
      id: 38,
      name: 'Fabricação de Elementos de Construção em Metal,  Reservatórios e Geradores de vapor',
      values: (year >= 2020) && getEAILine(year, EAILine48)
    },
    {
      id: 39,
      name: 'Máquinas e Equipamentos, n.e.',
      values: (year >= 2020) && getEAILine(year, EAILine49)
    },
    {
      id: 40,
      name: 'Fabricação de  Máquinas e Equipamento para uso Específico',
      values: (year >= 2020) && getEAILine(year, EAILine50)
    }
  ]

  return {
    aggregate,
    industries
  }
}

function getEAILine (year: number, EAIs: number[]) {
  return EAIs.map((EAI, index) => {
    return {
      date: {
        year,
        month: index + 1
      },
      value: EAI
    }
  })
}