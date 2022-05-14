import { Request, Response } from 'express'
import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', 'files', 'interestRates.json')

interface Rate {
  updatedAt: string
  value: number
}

interface InterestRates {
  FPD: Rate[]
  FPC: Rate[]
  'Taxa MIMO': Rate[]
  'Prime Pate': Rate[]
}

const filterRates = (rates: Rate[]) => {
  const interestRates = [] as Rate[]

  rates.forEach(rate => {
    const prevRate = interestRates[interestRates.length - 1]

    if (!prevRate) {
      return interestRates.push(rate)
    }

    if (rate.value !== prevRate.value) {
      interestRates.push(rate)
    }
  })

  return interestRates
} 

export const rates = async (_request: Request, response: Response) => {
  const prevRates: InterestRates = JSON.parse((await fs.readFile(path, 'utf8')))
  const { FPD, FPC, "Prime Pate": Prime, "Taxa MIMO": MIMO } = prevRates
  
  const interestRates = {
    FPD: filterRates(FPD),
    FPC: filterRates(FPC),
    'Prime Pate': filterRates(Prime),
    'Taxa MIMO': filterRates(MIMO),
  }
  
  await fs.writeFile(path, JSON.stringify(interestRates))
  response.status(200).json(interestRates)
}