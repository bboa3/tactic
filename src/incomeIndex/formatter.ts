import { IIs } from "."

export interface IILines {
  IILine2: number[]
  IILine3: number[]
  IILine4: number[]
  IILine5: number[]
  IILine6: number[]
  IILine7: number[]
}

interface IIData {
  year: number
  IiLines: IILines
}

export const  IIFormatter = ({year, IiLines }: IIData): IIs[] => {
  const {
    IILine2,
    IILine3,
    IILine4,
    IILine5,
    IILine6,
    IILine7
  } = IiLines

  return [
    {
      _id:  '6306c1b54145e6a1fc2b9ed2',
      name: 'Índices de Remunerações',
      type: 'Agregado',
      values: getIILine(year, IILine2)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed3',
      name: 'Indústria',
      type: 'Agregado',
      values: getIILine(year, IILine3)
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
      values: getIILine(year, IILine4)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed5',
      name: 'Transportes',
      type: 'Agregado',
      values: getIILine(year, IILine5)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed6',
      name: 'Aloj.Rest. similares',
      type: 'Agregado',
      values: getIILine(year, IILine6)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed7',
      name: 'Outros Serviços',
      type: 'Agregado',
      values: getIILine(year, IILine7)
    }
  ]
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
