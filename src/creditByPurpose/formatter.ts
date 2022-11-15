import { CreditByPurpose } from '.'

export interface CreditByPurposeLines {
  creditByPurposeLine4: number[]
  creditByPurposeLine12: number[]
  creditByPurposeLine13: number[]
  creditByPurposeLine14: number[]
  creditByPurposeLine15: number[]
  creditByPurposeLine18: number[]
  creditByPurposeLine24: number[]
  creditByPurposeLine25: number[]
  creditByPurposeLine26: number[]
  creditByPurposeLine27: number[]
  creditByPurposeLine28: number[]
  creditByPurposeLine33: number[]
  creditByPurposeLine34: number[]
  creditByPurposeLine38: number[]
}

interface CreditByPurposeData {
  creditByPurposeLines: CreditByPurposeLines
}

export const creditByPurposeFormatter = ({ creditByPurposeLines }: CreditByPurposeData): CreditByPurpose[] => {
  const {
    creditByPurposeLine4,
    creditByPurposeLine12,
    creditByPurposeLine13,
    creditByPurposeLine14,
    creditByPurposeLine15,
    creditByPurposeLine18,
    creditByPurposeLine24,
    creditByPurposeLine25,
    creditByPurposeLine26,
    creditByPurposeLine27,
    creditByPurposeLine28,
    creditByPurposeLine33,
    creditByPurposeLine34,
    creditByPurposeLine38
  } = creditByPurposeLines

  return [
    {
      _id: '6351831c4630a096007da367',
      name: 'AGRICULTURA',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine4)
    },
    {
      _id: '6351831c4630a096007da368',
      name: 'PECUÁRIA',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine12)
    },
    {
      _id: '6351831c4630a096007da369',
      name: 'SILVICULT.E EXPL. FLORESTAL',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine13)
    },
    {
      _id: '6351831c4630a096007da36a',
      name: 'PESCAS',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine14)
    },
    {
      _id: '6351831c4630a096007da36b',
      name: 'INDUSTRIA EXTRACTIVA',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine15)
    },
    {
      _id: '6351831c4630a096007da36c',
      name: 'INDÚSTRIAS TRANSFORMAD.',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine18)
    },
    {
      _id: '6351831c4630a096007da36d',
      name: 'ELECTRICIDADE GÁS E AGUA',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine24)
    },
    {
      _id: '6351831c4630a096007da36e',
      name: 'CONSTRUÇÃO E OBRAS PÚBLICAS',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine25)
    },
    {
      _id: '6351831c4630a096007da36f',
      name: 'INDÚSTRIA  DE TURISMO',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine26)
    },
    {
      _id: '6351831c4630a096007da370',
      name: 'COMÉRCIO',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine27)
    },
    {
      _id: '6351831c4630a096007da371',
      name: 'TRANSPORTES E COMUNICAÇÕES',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine28)
    },
    {
      _id: '6351831c4630a096007da372',
      name: 'INST. FINANC.N/ MONETÁRIAS',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine33)
    },
    {
      _id: '6351831c4630a096007da373',
      name: 'OUTROS SECTORES',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine34)
    },
    {
      _id: '6351831c4630a096007da374',
      name: 'TOTAL',
      type: 'Por Finalidade',
      values: getcreditByPurposeLine(creditByPurposeLine38)
    }
  ]
}

interface Value {
  date: {
    year: number
    month: number
  },
  circul: number
  investment: number
  total: number
}

function getcreditByPurposeLine (creditByPurposees: number[]) {
  let year = 2001
  let month = 1
  const formatted: Value[] = []

  let circulIndex = 1 
  let investmentIndex = 2
  let totalIndex = 3

  while ((year < 2022) && (month <= 8)) {
    if (month >= 13) {
      year++
      month = 1
    }

    formatted.push({
      date: { year, month },
      circul: creditByPurposees[circulIndex],
      investment: creditByPurposees[investmentIndex],
      total: creditByPurposees[totalIndex]
    })

    circulIndex += 3 
    investmentIndex += 3
    totalIndex += 3

    month++
  }

  return formatted
}