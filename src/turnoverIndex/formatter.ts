import { TurnoverIndex } from '.'

export interface TurnoverIndexLines {
  turnoverIndexLine2: number[]
  turnoverIndexLine3: number[]
  turnoverIndexLine4: number[]
  turnoverIndexLine5: number[]
  turnoverIndexLine6: number[]
  turnoverIndexLine7: number[]
  turnoverIndexLine8: number[]
}

interface TurnoverIndexData {
  year: number
  turnoverIndexLines: TurnoverIndexLines
}

export const turnoverIndexFormatter = ({year, turnoverIndexLines }: TurnoverIndexData): TurnoverIndex[] => {
  const {
    turnoverIndexLine2,
    turnoverIndexLine3,
    turnoverIndexLine4,
    turnoverIndexLine5,
    turnoverIndexLine6,
    turnoverIndexLine7,
    turnoverIndexLine8
  } = turnoverIndexLines

  return [
    {
      _id:  '6306c1b54145e6a1fc2b9ed2',
      name: 'Indices do Volume de Negócios',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine2)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed3',
      name: 'Indústria',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine3)
    },
    {
      _id: '632efbfafe566554468a12c6',
      name: 'Energia,Água e San',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine4)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed4',
      name: 'Comércio',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine5)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed5',
      name: 'Transportes',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine6)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed6',
      name: 'Aloj.Rest. similares',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine7)
    },
    {
      _id: '6306c1b54145e6a1fc2b9ed7',
      name: 'Outros Serviços',
      type: 'Agregado',
      values: getturnoverIndexLine(year, turnoverIndexLine8)
    },
  ]
}

function getturnoverIndexLine (year: number, turnoverIndexs: number[]) {
  return turnoverIndexs.map((turnoverIndex, index) => {
    return {
      date: {
        year,
        month: index + 1
      },
      value: turnoverIndex
    }
  })
}