import { EIs } from "."

export interface EILines {
  EILine2: number[]
  EILine3: number[]
  EILine4: number[]
  EILine5: number[]
  EILine6: number[]
  EILine7: number[]
}

interface EIData {
  year: number
  eiLines: EILines
}

export const  EIFormatter = ({year, eiLines }: EIData): EIs[] => {
  const {
    EILine2,
    EILine3,
    EILine4,
    EILine5,
    EILine6,
    EILine7
  } = eiLines

  return [
    {
      _id:  '6306c1b54145e6a1fc2b9ed2',
      name: 'Índices de Emprego',
      type: 'Agregado',
      values: getEILine(year, EILine2)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed3',
      name: 'Indústria',
      type: 'Agregado',
      values: getEILine(year, EILine3)
    },
    {
      _id: '632efbfafe566554468a12c6',
      name: 'Energia,Água e San',
      type: 'Agregado',
      values: []
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed4',
      name: 'Comércio',
      type: 'Agregado',
      values: getEILine(year, EILine4)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed5',
      name: 'Transportes',
      type: 'Agregado',
      values: getEILine(year, EILine5)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed6',
      name: 'Aloj.Rest. similares',
      type: 'Agregado',
      values: getEILine(year, EILine6)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed7',
      name: 'Outros Serviços',
      type: 'Agregado',
      values: getEILine(year, EILine7)
    }
  ]
}

function getEILine (year: number, EIs: number[]) {
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
