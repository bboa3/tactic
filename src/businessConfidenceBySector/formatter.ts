export interface BusinessConfidenceData {
  line2: number[]
  line3: number[]
  line4: number[]
}

export const  businessConfidenceFormatter = (businessConfidenceData: BusinessConfidenceData) => {
  const {
    line2,
    line3,
    line4,
  } = businessConfidenceData
  const businessConfidence = [
    {
      type: 'Por setor de atividade',
      name: 'Produção Industrial',
      values: getBusinessConfidence(line2)
    },
    {
      type: 'Por setor de atividade',
      name: 'Comércio',
      values: getBusinessConfidence(line3)
    },
    {
      type: 'Por setor de atividade',
      name: 'Outros serviços',
      values: getBusinessConfidence(line4)
    }
  ]

  return businessConfidence
}


function getBusinessConfidence (businessConfidence: number[]) {
  let year = 2004
  let sign = 'I'

  const businessConfidences = businessConfidence.map((value) => {
    if (sign === 'I') {
      const bc = {
        quarter: {
          year,
          sign,
          fromMonth: 1,
          toMonth: 3
        },
        value
      }

      sign = 'II'
      return bc
    }

    if (sign === 'II') {
      const bc = {
        quarter: {
          year,
          sign,
          fromMonth: 4,
          toMonth: 6
        },
        value
      }

      sign = 'III'
      return bc
    }

    
    if (sign === 'III') {
      const bc = {
        quarter: {
          year,
          sign,
          fromMonth: 7,
          toMonth: 9
        },
        value
      }

      sign = 'IV'
      return bc
    }

    const bc = {
      quarter: {
        year,
        sign,
        fromMonth: 10,
        toMonth: 12
      },
      value
    }

    sign = 'I'
    year++
    return bc
  })

  sign = 'II'
  return businessConfidences
}