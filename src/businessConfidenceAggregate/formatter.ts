export interface BusinessConfidenceData {
  line5: number[]
  line10: number[]
  line15: number[]
  line20: number[]
  line25: number[]
}

export const  businessConfidenceFormatter = (businessConfidenceData: BusinessConfidenceData) => {
  const {
    line5,
    line10,
    line15,
    line20,
    line25
  } = businessConfidenceData

  const businessConfidence = [
    {
      type: 'Agregado',
      name: 'Indicador do clima económico',
      values: getBusinessConfidence(line5)
    },
   {
      type: 'Agregado',
      name: 'Indicador de perspectiva da procura',
      values: getBusinessConfidence(line10)
    },
    {
      type: 'Agregado',
      name: 'Indicador de perspectiva emprego',
      values: getBusinessConfidence(line15)
    },
    {
      type: 'Agregado',
      name: 'Indicador de emprego actual',
      values: getBusinessConfidence(line20)
    },
    {
      type: 'Agregado',
      name: 'Indicador de perspectivas de preços',
      values: getBusinessConfidence(line25)
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