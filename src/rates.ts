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
  'Prime rate': Rate[]
}

export const rates = async (_request: Request, response: Response) => {
  const prevRates: InterestRates = JSON.parse((await fs.readFile(path, 'utf8')))
  const { FPD, FPC, "Prime rate": Prime, "Taxa MIMO": MIMO } = prevRates
  
  const interestRates = {
    FPD: FPD.filter(rates => !!rates.value),
    FPC: FPC.filter(rates => !!rates.value),
    'Prime rate': Prime.filter(rates => !!rates.value),
    'Taxa MIMO': MIMO.filter(rates => !!rates.value)
  }
  
  
  await fs.writeFile(path, JSON.stringify(interestRates))
  
  response.status(200).json(interestRates)
}