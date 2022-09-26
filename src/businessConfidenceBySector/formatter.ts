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
  let quarter = 'I'

  const businessConfidences = businessConfidence.map((value) => {
    if (quarter === 'I') {
      const bc = {
        date: {
          year,
          quarter,
          fromMonth: 1,
          toMonth: 3
        },
        value
      }

      quarter = 'II'
      return bc
    }

    if (quarter === 'II') {
      const bc = {
        date: {
          year,
          quarter,
          fromMonth: 4,
          toMonth: 6
        },
        value
      }

      quarter = 'III'
      return bc
    }

    
    if (quarter === 'III') {
      const bc = {
        date: {
          year,
          quarter,
          fromMonth: 7,
          toMonth: 9
        },
        value
      }

      quarter = 'IV'
      return bc
    }

    const bc = {
      date: {
        year,
        quarter,
        fromMonth: 10,
        toMonth: 12
      },
      value
    }

    quarter = 'I'
    year++
    return bc
  })

  quarter = 'II'
  return businessConfidences
}