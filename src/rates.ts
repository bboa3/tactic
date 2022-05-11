import { Request, Response } from 'express'
import { resolve } from 'path'
import fs from 'fs/promises'


const path = resolve(__dirname, '..', 'files', 'interestRates.json')
const dest = resolve(__dirname, '..', 'files', 'rates.json')

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

interface Data {
  FPD: number
  FPC: number
  'Taxa MIMO': number
  'Prime rate': number
}

export const rates = async (_request: Request, response: Response) => {
  const intRates = JSON.parse((await fs.readFile(path, 'utf8')))

  const keys = Object.keys(intRates)
  const values = Object.values(intRates)

  let interestRates = {
    FPD: [], 
    FPC: [], 
    'Prime rate': [], 
    'Taxa MIMO': []
  } as InterestRates

  const rates = keys.map((key, index) => ({
    updatedAt: key,
    data: values[index] as Data
  }))

  rates.forEach(rate => {
    const { 
      FPD,
      FPC,
      'Prime rate': Prime, 
      'Taxa MIMO': MIMO 
    } = interestRates

    if (!FPD[0]) {
      interestRates = {
        FPD: [{ updatedAt: rate.updatedAt, value: rate.data.FPD }],
        FPC: [{ updatedAt: rate.updatedAt, value: rate.data.FPC }],
        ['Prime rate']: [{ updatedAt: rate.updatedAt, value: rate.data['Prime rate']}],
        ['Taxa MIMO']: [{ updatedAt: rate.updatedAt, value: rate.data['Taxa MIMO'] }]
      }
      return
    }

    const prevFPD = FPD[FPD.length - 1].value
    const currentFPD = rate.data.FPD 
    if (currentFPD !== prevFPD) {
      interestRates.FPD = [
        ...FPD,
        {
          updatedAt: rate.updatedAt,
          value: currentFPD
        }
      ]
    }

    const prevFPC = FPC[FPC.length - 1].value
    const currentFPC = rate.data.FPC

    if (currentFPC !== prevFPC) {
      interestRates.FPC = [
        ...FPC,
        {
          updatedAt: rate.updatedAt,
          value: currentFPC
        }
      ]
    }

    const prevPrime = Prime[Prime.length - 1].value
    const currentPrime = rate.data['Prime rate']

    if (currentPrime !== prevPrime && currentPrime !== null) {
      interestRates['Prime rate'] = [
        ...Prime,
        {
          updatedAt: rate.updatedAt,
          value: currentPrime
        }
      ]
    }

    const prevMIMO = MIMO[MIMO.length - 1].value
    const currentMIMO = rate.data['Taxa MIMO']

    if (currentMIMO !== prevMIMO && currentMIMO !== null) {
      interestRates['Taxa MIMO'] = [
        ...MIMO,
        {
          updatedAt: rate.updatedAt,
          value: currentMIMO
        }
      ]
    }
  }) 
  

  await fs.writeFile(dest, JSON.stringify(interestRates))

  response.status(200).json(interestRates)
}