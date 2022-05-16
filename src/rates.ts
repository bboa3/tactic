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
  'Prime Rate': Rate[]
}

const resetDate = (rates: Rate[]) => {
  const interestRates = rates.map(rate => {
    const { value, updatedAt } = rate

    const dates = updatedAt.split('-')
    const day = dates[0]
    const month = dates[1]
    const year = dates[2]

    const date = `${year}-${month}-${day}`

    return {
      value,
      updatedAt: date
    }
  })

  return interestRates
} 

export const rates = async (_request: Request, response: Response) => {
  const prevRates: InterestRates = JSON.parse((await fs.readFile(path, 'utf8')))
  const { FPD, FPC, "Prime Rate": Prime, "Taxa MIMO": MIMO } = prevRates

  const interestRates = {
    FPD: resetDate(FPD),
    FPC: resetDate(FPC),
    'Prime Rate': resetDate(Prime),
    'Taxa MIMO': resetDate(MIMO),
  }
  
  await fs.writeFile(path, JSON.stringify(interestRates))
  response.status(200).json(interestRates)
}