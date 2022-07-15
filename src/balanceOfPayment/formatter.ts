export interface BalanceOfPaymentData {
  line3: number[]
  line4: number[]
  line6: number[]
  line7: number[]
  line9: number[]
  line10: number[]
  line12: number[]
  line13: number[]
  line15: number[]
  line16: number[]
}

interface BalanceOfPayment {
  date: { year: number },
  credit: number
  debit: number
}

export const  balanceOfPaymentFormatter = (BalanceOfPaymentData: BalanceOfPaymentData, startYear: number) => {
  const {
    line3,
    line4,
    line6,
    line7,
    line9,
    line10,
    line12,
    line13,
    line15,
    line16,
  } = BalanceOfPaymentData

  const balanceOfPayment = [
    {
      id: 0,
      name: 'Bens',
      values: getBalanceOfPayments({ credits: line3, debits: line4, startYear })
    },
    {
      id: 1,
      name: 'Serviços',
      values: getBalanceOfPayments({ credits: line6, debits: line7, startYear })
    },
    {
      id: 2,
      name: 'Rendimentos Primários',
      values: getBalanceOfPayments({ credits: line9, debits: line10, startYear })
    },
    {
      id: 3,
      name: 'Transferências Unilaterais',
      values: getBalanceOfPayments({ credits: line12, debits: line13, startYear })
    },
    {
      id: 4,
      name: 'Fluxos de capitais',
      values: getBalanceOfPayments({ credits: line15, debits: line16, startYear })
    }
  ]

  return balanceOfPayment
}

interface GetBalanceOfPayment {
  startYear: number
  credits: number[]
  debits: number[]
}

function getBalanceOfPayments ({ startYear, credits, debits }: GetBalanceOfPayment) {
  let year = startYear
  let index = 0

  const balanceOfPayments: BalanceOfPayment[] = []

  for (const credit of credits) {
    const debit = debits[index]

    balanceOfPayments.push({
      date: { year },
      credit,
      debit
    })

    year++
    index++
  }

  return balanceOfPayments
}