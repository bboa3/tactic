export interface BusinessConfidenceData {
  line2: number[]
  line3: number[]
  line4: number[]
  line5: number[]

  line7: number[]
  line8: number[]
  line9: number[]
  line10: number[]

  line12: number[]
  line13: number[]
  line14: number[]
  line15: number[]
  
  line17: number[]
  line18: number[]
  line19: number[]
  line20: number[]

  line22: number[]
  line23: number[]
  line24: number[]
  line25: number[]
}

export const  businessConfidenceFormatter = (businessConfidenceData: BusinessConfidenceData) => {
  const {
    line2,
    line3,
    line4,
    line5,
    line7,
    line8,
    line9,
    line10,
    line12,
    line13,
    line14,
    line15,
    line17,
    line18,
    line19,
    line20,
    line22,
    line23,
    line24,
    line25
  } = businessConfidenceData
  const businessConfidence = {
    businessConfidence: [
      {
        id: 0,
        name: 'Produção Industrial',
        values: getBusinessConfidence(line2)
      },
      {
        id: 1,
        name: 'Comércio',
        values: getBusinessConfidence(line3)
      },
      {
        id: 2,
        name: 'Outros serviços',
        values: getBusinessConfidence(line4)
      },
      {
        id: 3,
        name: 'Clima Económico',
        values: getBusinessConfidence(line5)
      }
    ],
    demandExpectation: [
      {
        id: 0,
        name: 'Produção Industrial',
        values: getBusinessConfidence(line7)
      },
      {
        id: 1,
        name: 'Comércio',
        values: getBusinessConfidence(line8)
      },
      {
        id: 2,
        name: 'Outros serviços',
        values: getBusinessConfidence(line9)
      },
      {
        id: 3,
        name: 'Indicador de Perspectiva da procura',
        values: getBusinessConfidence(line10)
      },
    ],
    jobExpectation: [
      {
        id: 0,
        name: 'Produção Industrial',
        values: getBusinessConfidence(line12)
      },
      {
        id: 1,
        name: 'Comércio',
        values: getBusinessConfidence(line13)
      },
      {
        id: 2,
        name: 'Outros serviços',
        values: getBusinessConfidence(line14)
      },
      {
        id: 3,
        name: 'Indicador de Perspectiva emprego',
        values: getBusinessConfidence(line15)
      }
    ],
    currentEmployment: [
      {
        id: 0,
        name: 'Produção Industrial',
        values: getBusinessConfidence(line17)
      },
      {
        id: 1,
        name: 'Comércio',
        values: getBusinessConfidence(line18)
      },
      {
        id: 2,
        name: 'Outros serviços',
        values: getBusinessConfidence(line19)
      },
      {
        id: 3,
        name: 'Indicador de emprego actual',
        values: getBusinessConfidence(line20)
      }
    ],
    priceExpectation: [
      {
        id: 0,
        name: 'Produção Industrial',
        values: getBusinessConfidence(line22)
      },
      {
        id: 1,
        name: 'Comércio',
        values: getBusinessConfidence(line23)
      },
      {
        id: 2,
        name: 'Outros serviços',
        values: getBusinessConfidence(line24)
      },
      {
        id: 3,
        name: 'Indicador e perspectivas de preços',
        values: getBusinessConfidence(line25)
      }
    ]
  }

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
          fromMonth: 0,
          toMonth: 2
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
          fromMonth: 3,
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