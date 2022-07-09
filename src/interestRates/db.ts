import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', 'files', 'interestRates.json');

interface Rate {
  date: string
  value: number
}

interface InterestRate {
  id: number
  name: string
  values: Rate[]
}

export interface InterestRatesData {
  date: string
  FPD: number
  FPC: number
  'Taxa MIMO': number
  'Prime rate': number
}


export const saveInterestRates = async ({ FPD, FPC, "Taxa MIMO": MIMO, "Prime rate": Prime, date }: InterestRatesData) => {
  const fileParsed: InterestRate[] = JSON.parse((await fs.readFile(path, 'utf8')))

  const interestRates = fileParsed.map(({ id, name, values }) => {
    const saveValue = (value: number) => [...values, { date, value }]

    if (id === 0) {
      return {
        id,
        name,
        values: saveValue(FPD)
      }
    }

    if (id === 1) {
      return {
        id,
        name,
        values: saveValue(FPC)
      }
    }

    if (id === 2) {
      return {
        id,
        name,
        values: saveValue(MIMO)
      }
    }

    if (id === 3) {
      return {
        id,
        name,
        values: saveValue(Prime)
      }
    }
  })
	
  await fs.writeFile(path, JSON.stringify(interestRates))
  return interestRates
}