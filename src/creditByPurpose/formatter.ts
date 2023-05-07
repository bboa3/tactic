import { CreditByPurpose } from '.'

export interface CreditByPurposeLines {
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

interface CreditByPurposeData {
  creditByPurposeLines: CreditByPurposeLines
}

const unitPotentiation = 1000

export const creditByPurposeFormatter = ({ creditByPurposeLines }: CreditByPurposeData): CreditByPurpose[] => {
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
  } = creditByPurposeLines

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
    values: getCreditByPurposeLine(trading)
  },
  {
    _id: "6351831c4630a096007da36a",
    name: {
      pt: "Pescas",
      en: "Fisheries"
    },
    type,
    unit,
    values: getCreditByPurposeLine(fisheries)
  },{
    _id: "6351831c4630a096007da36d",
    name: {
      pt: "Electricidade Gás E água",
      en: "Electricity Gas and water"
    },
    type,
    unit,
    values: getCreditByPurposeLine(electricityGasAndWater)
  },{
    _id: "6351831c4630a096007da36c",
    name: {
      pt: "Indústria Transformadora",
      en: "Manufacturing Industry"
    },
    type,
    unit,
    values: getCreditByPurposeLine(manufacturingIndustry)
  },{
    _id: "6351831c4630a096007da36f",
    name: {
      pt: "Indústria  de Turismo",
      en: "Tourism Industry"
    },
    type,
    unit,
    values: getCreditByPurposeLine(tourismIndustry)
  },{
    _id: "6351831c4630a096007da368",
    name: {
      pt: "Pecuária",
      en: "Livestock"
    },
    type,
    unit,
    values: getCreditByPurposeLine(livestock)
  },{
    _id: "6351831c4630a096007da371",
    name: {
      pt: "Transporte e Comunicações",
      en: "Transport and communication"
    },
    type,
    unit,
    values: getCreditByPurposeLine(transportAndCommunication)
  },{
    _id: "6351831c4630a096007da367",
    name: {
      pt: "Agricultura",
      en: "Agriculture"
    },
    type,
    unit,
    values: getCreditByPurposeLine(agriculture)
  },{
    _id: "6351831c4630a096007da369",
    name: {
      pt: "Silvicult. E Expl Florestal",
      en: "Silvicult. And Forest Expl"
    },
    type,
    unit,
    values: getCreditByPurposeLine(silvicultAndForestExpl)
  },{
    _id: "6351831c4630a096007da36b",
    name: {
      pt: "Indústria Extrativa",
      en: "Extractive Industry"
    },
    type,
    unit,
    values: getCreditByPurposeLine(extractiveIndustry)
  },{
    _id: "6351831c4630a096007da372",
    name: {
      pt: "Instituições Financeir. N. Monetária",
      en: "Financial Institutions N. Monetary"
    },
    type,
    unit,
    values: getCreditByPurposeLine(financialInstitutions)
  },{
    _id: "6351831c4630a096007da36e",
    name: {
      pt: "Construção e Obras Públicas",
      en: "Construction and Public building"
    },
    type,
    unit,
    values: getCreditByPurposeLine(construction)
  },
  {
    _id: "63503b410fb0a210901b8921",
    name: {
      pt: "Outro Sectores",
      en: "Other Sector"
    },
    type,
    unit,
    values: getCreditByPurposeLine(otherSector)
  },
  {
    _id: "6351831c4630a096007da374",
    name: {
      pt: "Total",
      en: "Total"
    },
    type,
    unit,
    values: getCreditByPurposeLine(total)
  }]
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

function getCreditByPurposeLine (creditByPurposes: number[]) {
  const length = creditByPurposes.length
  let year = 2003
  let index = 0
  const formatted: Value[] = []

  let circulIndex = 1 
  let investmentIndex = 2
  let totalIndex = 3

  while (totalIndex <= length) {
    if (index >= 12) {
      year++
      index = 0
    }

    formatted.push({
      date: { year, month: index + 1 },
      circul: creditByPurposes[circulIndex] * unitPotentiation,
      investment: creditByPurposes[investmentIndex] * unitPotentiation,
      total: creditByPurposes[totalIndex] * unitPotentiation
    })

    circulIndex += 3
    investmentIndex += 3
    totalIndex += 3

    index++
  }

  return formatted
}