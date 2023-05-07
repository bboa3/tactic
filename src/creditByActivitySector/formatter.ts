import { CreditByActivitySector } from '.'

export interface CreditByActivitySectorLines {
  total: number[]
  agriculture: number[]
  construction: number[]
  tourismIndustry: number[]
  livestock: number[]
  trading: number[]
  manufacturingIndustry: number[]
  electricityGasAndWater: number[]
  silvicultAndForestExpl: number[]
  financialInstitutions: number[]
  extractiveIndustry: number[]
  fisheries: number[]
  transportAndCommunication: number[]
  otherSector: number[]
}

const unitPotentiation = 1000000

interface CreditByActivitySectorData {
  creditByActivitySectorLines: CreditByActivitySectorLines
}

export const creditByActivitySectorFormatter = ({ creditByActivitySectorLines }: CreditByActivitySectorData): CreditByActivitySector[] => {
  const {
    total,
    agriculture,
    construction,
    tourismIndustry,
    fisheries,
    electricityGasAndWater,
    silvicultAndForestExpl,
    manufacturingIndustry,
    trading,
    financialInstitutions,
    extractiveIndustry,
    livestock,
    transportAndCommunication,
    otherSector
  } = creditByActivitySectorLines

  const unit = 'MZN'
  const type = {
    pt: "Por Sector de Atividades",
    en: "By Activity Sectors"
  }

  return [{
    _id: "6351831c4630a096007da370",
    name: {
      pt: "Comércio",
      en: "Trading"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(trading)
  },
  {
    _id: "6351831c4630a096007da36a",
    name: {
      pt: "Pescas",
      en: "Fisheries"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(fisheries)
  },{
    _id: "6351831c4630a096007da36d",
    name: {
      pt: "Electricidade Gás E água",
      en: "Electricity Gas and water"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(electricityGasAndWater)
  },{
    _id: "6351831c4630a096007da36c",
    name: {
      pt: "Indústria Transformadora",
      en: "Manufacturing Industry"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(manufacturingIndustry)
  },{
    _id: "6351831c4630a096007da36f",
    name: {
      pt: "Indústria  de Turismo",
      en: "Tourism Industry"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(tourismIndustry)
  },{
    _id: "6351831c4630a096007da368",
    name: {
      pt: "Pecuária",
      en: "Livestock"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(livestock)
  },{
    _id: "6351831c4630a096007da371",
    name: {
      pt: "Transporte e Comunicações",
      en: "Transport and communication"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(transportAndCommunication)
  },{
    _id: "6351831c4630a096007da367",
    name: {
      pt: "Agricultura",
      en: "Agriculture"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(agriculture)
  },{
    _id: "6351831c4630a096007da369",
    name: {
      pt: "Silvicult. E Expl Florestal",
      en: "Silvicult. And Forest Expl"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(silvicultAndForestExpl)
  },{
    _id: "6351831c4630a096007da36b",
    name: {
      pt: "Indústria Extrativa",
      en: "Extractive Industry"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(extractiveIndustry)
  },{
    _id: "6351831c4630a096007da372",
    name: {
      pt: "Instituições Financeir. N. Monetária",
      en: "Financial Institutions N. Monetary"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(financialInstitutions)
  },{
    _id: "6351831c4630a096007da36e",
    name: {
      pt: "Construção e Obras Públicas",
      en: "Construction and Public building"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(construction)
  },
  {
    _id: "63503b410fb0a210901b8921",
    name: {
      pt: "Outro Sectores",
      en: "Other Sector"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(otherSector)
  },
  {
    _id: "6351831c4630a096007da374",
    name: {
      pt: "Total",
      en: "Total"
    },
    type,
    unit,
    values: getCreditByActivitySectorLine(total)
  }]
}

interface Value {
  date: {
    year: number
    month: number
  },
  value: number
}

function getCreditByActivitySectorLine (creditByActivitySectores: number[]) {
  let year = 2008
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
        value: value * unitPotentiation
      }
    )

    index++
  }

  return formatted
}