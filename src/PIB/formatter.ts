export interface PIBData {
  pibLine3: number[]
  pibLine4: number[]
  pibLine5: number[]
  pibLine6: number[]
  pibLine7: number[]
  pibLine8: number[]
  pibLine9: number[]
  pibLine10: number[]
  pibLine11: number[]
  pibLine12: number[]
  pibLine13: number[]
  pibLine14: number[]
  pibLine15: number[]
  pibLine16: number[]
  pibLine17: number[]
  pibLine18: number[]
  pibLine19: number[]
  pibLine20: number[]
  pibLine21: number[]
  pibLine22: number[]
  pibLine23: number[]
  pibLine24: number[]
  pibLine25: number[]
  pibLine26: number[]
  pibLine27: number[]
  pibLine28: number[]
  pibLine29: number[]
}

export const  PIBFormatter = (years: number[], pibData: PIBData) => {
  const {
    pibLine3,
    pibLine4,
    pibLine5,
    pibLine6,
    pibLine7,
    pibLine8,
    pibLine9,
    pibLine10,
    pibLine11,
    pibLine12,
    pibLine13,
    pibLine14,
    pibLine15,
    pibLine16,
    pibLine17,
    pibLine18,
    pibLine19,
    pibLine20,
    pibLine21,
    pibLine22,
    pibLine23,
    pibLine24,
    pibLine25,
    pibLine26,
    pibLine27,
    pibLine28,
    pibLine29
  } = pibData
  const PIB = [
    {
      id: 0,
      name: 'Agricultura, Produção Animal, Caça, Silvicultura e Pesca',
      GDP: getPIB(years, pibLine3)
    },
    {
      id: 1,
      name: 'Agricultura, Produção Animal, Caça e Silvicultura',
      GDP: getPIB(years, pibLine4)
    },
    {
      id: 2,
      name: 'Agricultura',
      GDP: getPIB(years, pibLine5)
    },
    {
      id: 3,
      name: 'Produção Animal',
      GDP: getPIB(years, pibLine6)
    },
    {
      id: 4,
      name: 'SilviCultura',
      GDP: getPIB(years, pibLine7)
    },
    {
      id: 5,
      name: 'Pesca, Aquacultura e Actividades dos serviços relacionados',
      GDP: getPIB(years, pibLine8)
    },
    {
      id: 6,
      name: 'Indústrias Extractivas',
      GDP: getPIB(years, pibLine9)
    },
    {
      id: 7,
      name: 'Manufactura',
      GDP: getPIB(years, pibLine10)
    },
    {
      id: 8,
      name: 'Produção e Distribuição de Electricidade e Gás',
      GDP: getPIB(years, pibLine11)
    },
    {
      id: 9,
      name: 'Captação, Tratamento  e Distribuição de Água',
      GDP: getPIB(years, pibLine12)
    },
    {
      id: 10,
      name: 'Construção',
      GDP: getPIB(years, pibLine13)
    },
    {
      id: 11,
      name: 'Comércio, Reparação de Veículos Automóveis',
      GDP: getPIB(years, pibLine14)
    },
    {
      id: 12,
      name: 'Transportes, Armazenagem',
      GDP: getPIB(years, pibLine15)
    },
    {
      id: 13,
      name: 'Alojamento, Restaurantes e Similares',
      GDP: getPIB(years, pibLine16)
    },
    {
      id: 14,
      name: 'Informação e Comunicação',
      GDP: getPIB(years, pibLine17)
    },
    {
      id: 15,
      name: 'Actividades Financeiras',
      GDP: getPIB(years, pibLine18)
    },
    {
      id: 16,
      name: 'Actividades Imobiliárias, Alugueres e Serviços Prestados às Empresas',
      GDP: getPIB(years, pibLine19)
    },
    {
      id: 17,
      name: 'Administração Pública, Defesa e Segurança Social Obrigatória',
      GDP: getPIB(years, pibLine20)
    },
    {
      id: 18,
      name: 'Educação',
      GDP: getPIB(years, pibLine21)
    },
    {
      id: 19,
      name: 'Saúde e Acção Social',
      GDP: getPIB(years, pibLine22)
    },
    {
      id: 20,
      name: 'Outras Actividades de Serviços Colectivos, Sociais e Pessoais',
      GDP: getPIB(years, pibLine23)
    },
    {
      id: 21,
      name: 'Total Valores Acrescentados, preços de base',
      GDP: getPIB(years, pibLine24)
    },
    {
      id: 22,
      name: 'Impostos sobre os Produtos',
      GDP: getPIB(years, pibLine25)
    },
    {
      id: 23,
      name: 'IVA',
      GDP: getPIB(years, pibLine26)
    },
    {
      id: 24,
      name: 'Direitos de Importação',
      GDP: getPIB(years, pibLine27)
    },
    {
      id: 25,
      name: 'Outros Impostos sobre os Productos',
      GDP: getPIB(years, pibLine28)
    },
    {
      id: 26,
      name: 'Produto Interno Bruto',
      GDP: getPIB(years, pibLine29)
    }
  ]

  return PIB
}

function getPIB (years: number[], pib: number[]) {
  return years.map((year, index) => {
    return {
      date: {
        year: Number(year)
      },
      value: Number(pib[index + 1])
    }
  })
}