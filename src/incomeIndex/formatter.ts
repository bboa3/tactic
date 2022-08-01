export interface IILines {
  IILine2: number[]
  IILine3: number[]
  IILine4: number[]
  IILine5: number[]
  IILine6: number[]
  IILine7: number[]
  IILine9: number[]
  IILine10: number[]
  IILine11: number[]
  IILine12: number[]
  IILine13: number[]
  IILine14: number[]
  IILine15: number[]
  IILine16: number[]
  IILine17: number[]
  IILine18: number[]
  IILine19: number[]
  IILine20: number[]
  IILine21: number[]
  IILine22: number[]
  IILine23: number[]
  IILine24: number[]
  IILine25: number[]
  IILine26: number[]
  IILine27: number[]
  IILine28: number[]
  IILine29: number[]
  IILine30: number[]
  IILine31: number[]
  IILine32: number[]
  IILine33: number[]
  IILine34: number[]
  IILine35: number[]
  IILine36: number[]
  IILine37: number[]
  IILine38: number[]
  IILine39: number[]
  IILine40: number[]
  IILine41: number[]
  IILine42: number[]
  IILine43: number[]
  IILine44: number[]
  IILine45: number[]
  IILine46: number[]
  IILine47: number[]
  IILine48: number[]
  IILine49: number[]
}

interface IIData {
  year: number
  IiLines: IILines
}

export const  IIFormatter = ({year, IiLines }: IIData) => {
  const {
    IILine2,
    IILine3,
    IILine4,
    IILine5,
    IILine6,
    IILine7,
    IILine9,
    IILine10,
    IILine11,
    IILine12,
    IILine13,
    IILine14,
    IILine15,
    IILine16,
    IILine17,
    IILine18,
    IILine19,
    IILine20,
    IILine21,
    IILine22,
    IILine23,
    IILine24,
    IILine25,
    IILine26,
    IILine27,
    IILine28,
    IILine29,
    IILine30,
    IILine31,
    IILine32,
    IILine33,
    IILine34,
    IILine35,
    IILine36,
    IILine37,
    IILine38,
    IILine39,
    IILine40,
    IILine41,
    IILine42,
    IILine43,
    IILine44,
    IILine45,
    IILine46,
    IILine47,
    IILine48,
    IILine49,
  } = IiLines
  const aggregate = [
    {
      id: 0,
      name: 'Índices de Remunerações',
      values: getIILine(year, IILine2)
    },
    {
      id: 1,
      name: 'Indústria',
      values: getIILine(year, IILine3)
    },
    {
      id: 2,
      name: 'Comércio',
      values: getIILine(year, IILine4)
    },
    {
      id: 3,
      name: 'Transportes',
      values: getIILine(year, IILine5)
    },
    {
      id: 4,
      name: 'Aloj.Rest. similares',
      values: getIILine(year, IILine6)
    },
    {
      id: 5,
      name: 'Outros Serviços',
      values: getIILine(year, IILine7)
    }
  ]

  const industries = [
    {
      id: 0,
      name: 'Total',
      values: (year >= 2020) && getIILine(year, IILine9)
    },
    {
      id: 1,
      name: 'Indústria Extractiva',
      values: (year >= 2020) && getIILine(year, IILine10)
    },
    {
      id: 2,
      name: 'Indústria Transformadora',
      values: (year >= 2020) && getIILine(year, IILine11)
    },
    {
      id: 3,
      name: 'Hulha e Lenhite',
      values: (year >= 2020) && getIILine(year, IILine12)
    },
    {
      id: 4,
      name: 'Extracção de Hulha',
      values: (year >= 2020) && getIILine(year, IILine13)
    },
    {
      id: 5,
      name: 'Petróleo Bruto e Gás Natural',
      values: (year >= 2020) && getIILine(year, IILine14)
    },
    {
      id: 6,
      name: 'Extracção de Gás Natural e de Condensados',
      values: (year >= 2020) && getIILine(year, IILine15)
    },
    {
      id: 7,
      name: 'Minérios Metálicos',
      values: (year >= 2020) && getIILine(year, IILine16)
    },
    {
      id: 8,
      name: 'Extracção e Preparação de Minérios Metálicos não Ferrosos',
      values: (year >= 2020) && getIILine(year, IILine17)
    },
    {
      id: 9,
      name: 'Outros Produtos das Indústrias Extractivas',
      values: (year >= 2020) && getIILine(year, IILine18)
    },
    {
      id: 10,
      name: 'Extracção de Pedra, ArIia e Argila',
      values: (year >= 2020) && getIILine(year, IILine19)
    },
    {
      id: 11,
      name: 'Indústrias extrativas, N.E.',
      values: (year >= 2020) && getIILine(year, IILine20)
    },
    {
      id: 12,
      name: 'Produtos Alimentares',
      values: (year >= 2020) && getIILine(year, IILine21)
    },
    {
      id: 13,
      name: 'Abate de Animais, Preparação e Conservação de Carne e de Produtos à Base de Carne',
      values: (year >= 2020) && getIILine(year, IILine22)
    },
    {
      id: 14,
      name: 'Preparação e Conservação, de Frutos e de Produtos Hortícolas',
      values: (year >= 2020) && getIILine(year, IILine23)
    },
    {
      id: 15,
      name: 'Produção de Óleos e Gorduras, Animais e Vegetais',
      values: (year >= 2020) && getIILine(year, IILine24)
    },
    {
      id: 16,
      name: 'Indústria de Lacticínios',
      values: (year >= 2020) && getIILine(year, IILine25)
    },
    {
      id: 17,
      name: 'Transformação de CerIis e Leguminosas; Fabricação de Amidos, Féculas e de Produtos afins',
      values: (year >= 2020) && getIILine(year, IILine26)
    },
    {
      id: 18,
      name: 'Fabricação de Produtos de Padaria, Pastelaria (fresca e de conservação) e de outros produtos alimentares',
      values: (year >= 2020) && getIILine(year, IILine27)
    },
    {
      id: 19,
      name: 'Fabricação de Alimentos para Animais',
      values: (year >= 2020) && getIILine(year, IILine28)
    },
    {
      id: 20,
      name: 'Bebidas',
      values: (year >= 2020) && getIILine(year, IILine29)
    },
    {
      id: 21,
      name: 'Indústria das Bebidas',
      values: (year >= 2020) && getIILine(year, IILine30)
    },
    {
      id: 22,
      name: 'Produtos da Indústria do Tabaco',
      values: (year >= 2020) && getIILine(year, IILine31)
    },
    {
      id: 23,
      name: 'Indústria do Tabaco',
      values: (year >= 2020) && getIILine(year, IILine32)
    },
    {
      id: 24,
      name: 'MadIira e suas obras (excepto mobiliário), obras de cestaria e de espartaria',
      values: (year >= 2020) && getIILine(year, IILine33)
    },
    {
      id: 25,
      name: 'Serração, Aplainamento e Impregnação da madIira',
      values: (year >= 2020) && getIILine(year, IILine34)
    },
    {
      id: 26,
      name: 'Trabalhos de Impressão e Gravação',
      values: (year >= 2020) && getIILine(year, IILine35)
    },
    {
      id: 27,
      name: 'Impressão e Actividades  dos Serviços Relacionados com a impressão',
      values: (year >= 2020) && getIILine(year, IILine36)
    },
    {
      id: 28,
      name: 'Produtos Químicos',
      values: (year >= 2020) && getIILine(year, IILine37)
    },
    {
      id: 29,
      name: 'Fabricação de Outros Produtos Químicos',
      values: (year >= 2020) && getIILine(year, IILine38)
    },
    {
      id: 30,
      name: 'Artigos de Borracha e Matérias Plásticas',
      values: (year >= 2020) && getIILine(year, IILine39)
    },
    {
      id: 31,
      name: 'Artigos de Borracha e Matérias Plásticas',
      values: (year >= 2020) && getIILine(year, IILine40)
    },
    {
      id: 32,
      name: 'Outros Produtos Minerais não Metálicos',
      values: (year >= 2020) && getIILine(year, IILine41)
    },
    {
      id: 33,
      name: 'Fabricação de Produtos Minerais não Metálicos, n.e.',
      values: (year >= 2020) && getIILine(year, IILine42)
    },
    {
      id: 34,
      name: 'Metais de Base',
      values: (year >= 2020) && getIILine(year, IILine43)
    },
    {
      id: 35,
      name: 'Indústrias Metalúrgicas de Base de Ferro e aço',
      values: (year >= 2020) && getIILine(year, IILine44)
    },
    {
      id: 36,
      name: 'Obtenção e PrimIira Transformação dos Metais não Ferrosos',
      values: (year >= 2020) && getIILine(year, IILine45)
    },
    {
      id: 37,
      name: 'Produtos  Metálicos Transformados, Excepto Máquinas e Equipamento',
      values: (year >= 2020) && getIILine(year, IILine46)
    },
    {
      id: 38,
      name: 'Fabricação de Elementos de Construção em Metal,  Reservatórios e Geradores de vapor',
      values: (year >= 2020) && getIILine(year, IILine47)
    },
    {
      id: 39,
      name: 'Máquinas e Equipamentos, n.e.',
      values: (year >= 2020) && getIILine(year, IILine48)
    },
    {
      id: 40,
      name: 'Fabricação de  Máquinas e Equipamento para uso Específico',
      values: (year >= 2020) && getIILine(year, IILine49)
    }
  ]

  return {
    aggregate,
    industries
  }
}

function getIILine (year, IIs: number[]) {
  return IIs.map((II, index) => {
    return {
      date: {
        year,
        month: index + 1
      },
      value: II
    }
  })
}
