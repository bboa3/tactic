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
      name: 'AGRICULTURA',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine4)
    },
    {
      name: 'PECUÁRIA',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine12)
    },
    {
      name: 'SILVICULT.E EXPL. FLORESTAL',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine13)
    },
    {
      name: 'PESCAS',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine14)
    },
    {
      name: 'INDUSTRIA EXTRACTIVA',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine15)
    },
    {
      name: 'INDÚSTRIAS TRANSFORMAD.',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine18)
    },
    {
      name: 'ELECTRICIDADE GÁS E AGUA',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine24)
    },
    {
      name: 'CONSTRUÇÃO E OBRAS PÚBLICAS',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine25)
    },
    {
      name: 'INDÚSTRIA  DE TURISMO',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine26)
    },
    {
      name: 'COMÉRCIO',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine27)
    },
    {
      name: 'TRANSPORTES E COMUNICAÇÕES',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine28)
    },
    {
      name: 'INST. FINANC.N/ MONETÁRIAS',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine33)
    },
    {
      name: 'OUTROS SECTORES',
      type: 'Por Sector de Atividades',
      values: getcreditByPurposeLine(creditByPurposeLine34)
    },
    {
      name: 'TOTAL',
      type: 'Por Sector de Atividades',
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

  while ((year > 2022) && (month >= 8)) {
    if (month >= 13) {
      year++
      month = 1
    }

    console.log(circulIndex, year)

    formatted.push(
      {
        date: { year, month },
        circul: creditByPurposees[circulIndex],
        investment: creditByPurposees[investmentIndex],
        total: creditByPurposees[totalIndex],
      }
    )

    circulIndex += 3 
    investmentIndex += 3
    totalIndex += 3

    month++
  }

  return formatted
}