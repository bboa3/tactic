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

  return [
    {
      id: 0,
      name: 'Índices de Emprego',
      type: 'Agregado',
      values: getEILine(year, EILine2)
    },
    {
      id: 1,
      name: 'Indústria',
      type: 'Agregado',
      values: getEILine(year, EILine3)
    },
    {
      id: 2,
      name: 'Energia,Água e San',
      type: 'Agregado',
      values: []
    },
    {
      id: 3,
      name: 'Comércio',
      type: 'Agregado',
      values: getEILine(year, EILine4)
    },
    {
      id: 4,
      name: 'Transportes',
      type: 'Agregado',
      values: getEILine(year, EILine5)
    },
    {
      id: 5,
      name: 'Aloj.Rest. similares',
      type: 'Agregado',
      values: getEILine(year, EILine6)
    },
    {
      id: 6,
      name: 'Outros Serviços',
      type: 'Agregado',
      values: getEILine(year, EILine7)
    },
    {
      id: 0,
      name: 'Total',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine9)
    },
    {
      id: 1,
      name: 'Indústria Extractiva',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine10)
    },
    {
      id: 2,
      name: 'Indústria Transformadora',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine11)
    },
    {
      id: 3,
      name: 'Hulha e Lenhite',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine12)
    },
    {
      id: 4,
      name: 'Extracção de Hulha',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine13)
    },
    {
      id: 5,
      name: 'Petróleo Bruto e Gás Natural',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine14)
    },
    {
      id: 6,
      name: 'Extracção de Gás Natural e de Condensados',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine15)
    },
    {
      id: 7,
      name: 'Minérios Metálicos',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine16)
    },
    {
      id: 8,
      name: 'Extracção e Preparação de Minérios Metálicos não Ferrosos',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine17)
    },
    {
      id: 9,
      name: 'Outros Produtos das Indústrias Extractivas',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine18)
    },
    {
      id: 10,
      name: 'Extracção de Pedra, Areia e Argila',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine19)
    },
    {
      id: 11,
      name: 'Indústrias extrativas, N.E.',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine20)
    },
    {
      id: 12,
      name: 'Produtos Alimentares',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine21)
    },
    {
      id: 13,
      name: 'Abate de Animais, Preparação e Conservação de Carne e de Produtos à Base de Carne',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine22)
    },
    {
      id: 14,
      name: 'Preparação e Conservação, de Frutos e de Produtos Hortícolas',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine23)
    },
    {
      id: 15,
      name: 'Produção de Óleos e Gorduras, Animais e Vegetais',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine24)
    },
    {
      id: 16,
      name: 'Indústria de Lacticínios',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine25)
    },
    {
      id: 17,
      name: 'Transformação de Cereis e Leguminosas; Fabricação de Amidos, Féculas e de Produtos afins',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine26)
    },
    {
      id: 18,
      name: 'Fabricação de Produtos de Padaria, Pastelaria (fresca e de conservação) e de outros produtos alimentares',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine27)
    },
    {
      id: 19,
      name: 'Fabricação de Alimentos para Animais',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine28)
    },
    {
      id: 20,
      name: 'Bebidas',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine29)
    },
    {
      id: 21,
      name: 'Indústria das Bebidas',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine30)
    },
    {
      id: 22,
      name: 'Produtos da Indústria do Tabaco',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine31)
    },
    {
      id: 23,
      name: 'Indústria do Tabaco',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine32)
    },
    {
      id: 24,
      name: 'Madeira e suas obras (excepto mobiliário), obras de cestaria e de espartaria',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine33)
    },
    {
      id: 25,
      name: 'Serração, Aplainamento e Impregnação da madeira',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine34)
    },
    {
      id: 26,
      name: 'Trabalhos de Impressão e Gravação',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine35)
    },
    {
      id: 27,
      name: 'Impressão e Actividades  dos Serviços Relacionados com a impressão',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine36)
    },
    {
      id: 28,
      name: 'Produtos Químicos',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine37)
    },
    {
      id: 29,
      name: 'Fabricação de Outros Produtos Químicos',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine38)
    },
    {
      id: 30,
      name: 'Artigos de Borracha e Matérias Plásticas',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine39)
    },
    {
      id: 31,
      name: 'Artigos de Borracha e Matérias Plásticas',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine40)
    },
    {
      id: 32,
      name: 'Outros Produtos Minerais não Metálicos',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine41)
    },
    {
      id: 33,
      name: 'Fabricação de Produtos Minerais não Metálicos, n.e.',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine42)
    },
    {
      id: 34,
      name: 'Metais de Base',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine43)
    },
    {
      id: 35,
      name: 'Indústrias Metalúrgicas de Base de Ferro e aço',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine44)
    },
    {
      id: 36,
      name: 'Obtenção e Primeira Transformação dos Metais não Ferrosos',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine45)
    },
    {
      id: 37,
      name: 'Produtos  Metálicos Transformados, Excepto Máquinas e Equipamento',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine46)
    },
    {
      id: 38,
      name: 'Fabricação de Elementos de Construção em Metal,  Reservatórios e Geradores de vapor',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine47)
    },
    {
      id: 39,
      name: 'Máquinas e Equipamentos, n.e.',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine48)
    },
    {
      id: 40,
      name: 'Fabricação de  Máquinas e Equipamento para uso Específico',
      type: 'Volume',
      values: (year >= 2020) && getEILine(year, EILine49)
    }
  ]
}

function getEILine (year, EIs: number[]) {
  return EIs.map((EI, index) => {
    return {
      date: {
        year,
        month: index + 1
      },
      value: EI
    }
  })
}
