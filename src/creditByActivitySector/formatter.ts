import { CreditByActivitySector } from '.'

export interface CreditByActivitySectorLines {
  creditByActivitySectorLine4: number[]
  creditByActivitySectorLine5: number[]
  creditByActivitySectorLine6: number[]
  creditByActivitySectorLine7: number[]
  creditByActivitySectorLine8: number[]
  creditByActivitySectorLine9: number[]
  creditByActivitySectorLine10: number[]
  creditByActivitySectorLine11: number[]
}

interface CreditByActivitySectorData {
  creditByActivitySectorLines: CreditByActivitySectorLines
}

export const creditByActivitySectorFormatter = ({ creditByActivitySectorLines }: CreditByActivitySectorData): CreditByActivitySector[] => {
  const {
    creditByActivitySectorLine4,
    creditByActivitySectorLine5,
    creditByActivitySectorLine6,
    creditByActivitySectorLine7,
    creditByActivitySectorLine8,
    creditByActivitySectorLine9,
    creditByActivitySectorLine10,
    creditByActivitySectorLine11
  } = creditByActivitySectorLines

  return [
    {
      _id: '63503b410fb0a210901b891a',
      name: 'Total',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine4)
    },
    {
      _id: '63503b410fb0a210901b891b',
      name: 'AGRICULTURA',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine5)
    },
    {
      _id: '63503b410fb0a210901b891c',
      name: 'INDÚSTRIA',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine6)
    },
    {
      _id: '63503b410fb0a210901b891d',
      name: 'CONSTRUÇÃO',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine7)
    },
    {
      _id: '63503b410fb0a210901b891e',
      name: 'INDÚSTRIA DE TURISMO',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine8)
    },
    {
      _id: '6351831c4630a096007da370',
      name: 'COMÉRCIO',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine9)
    },
    {
      _id: '63503b410fb0a210901b8920',
      name: 'TRANSPORTES E COMUNICAÇÕES',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine10)
    },
    {
      _id: '63503b410fb0a210901b8921',
      name: 'OUTROS SECTORES',
      type: 'Por Sector de Atividades',
      values: getCreditByActivitySectorLine(creditByActivitySectorLine11)
    },
  ]
}

interface Value {
  date: {
    year: number
    month: number
  },
  value: number
}

function getCreditByActivitySectorLine (creditByActivitySectores: number[]) {
  let year = 2011
  let index = 0
  const formatted: Value[] = []
  
  for (const value of creditByActivitySectores) {
    if (index >= 12) {
      year++
      index = 0
    }

    formatted.push(
      {
        date: {
          year,
          month: index + 1
        },
        value
      }
    )

    index++
  }

  return formatted
}