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
      type: 'Agregados',
      name: 'Indicador do clima económico',
      values: getBusinessConfidence(line5)
    },
   {
      type: 'Agregados',
      name: 'Indicador de perspectiva da procura',
      values: getBusinessConfidence(line10)
    },
    {
      type: 'Agregados',
      name: 'Indicador de perspectiva emprego',
      values: getBusinessConfidence(line15)
    },
    {
      type: 'Agregados',
      name: 'Indicador de emprego actual',
      values: getBusinessConfidence(line20)
    },
    {
      type: 'Agregados',
      name: 'Indicador de perspectivas de preços',
      values: getBusinessConfidence(line25)
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