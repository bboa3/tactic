import { resolve } from 'path'
import fs from 'fs/promises'

interface Rate {
  updatedAt: string
  value: number
}

interface PrevRates {
  FPD: Rate[]
  FPC: Rate[]
  'Taxa MIMO': Rate[]
  'Prime Pate': Rate[]
}

const path = resolve(__dirname, '..', '..', 'files', 'interestRates.json')

const formatDate = (date: string) => {
  const dates = date.split('-')
  const day = dates[0]
  const month = dates[1]
  const year = dates[2]
  
  return `${year}-${month}-${day}`
}

export const createRates = async (rates: number[], date: string): Promise<PrevRates> => {
  const prevRates: PrevRates = JSON.parse((await fs.readFile(path, 'utf8')))
  const { FPD, FPC, "Prime Pate": Prime, "Taxa MIMO": MIMO } = prevRates

  const updatedAt = formatDate(date)
  
  const prevFPD = FPD[FPD.length - 1].value
  const currentFPD = rates[0] 
  
  if (currentFPD !== prevFPD && currentFPD !== null && !!currentFPD) {
    prevRates.FPD = [
      ...FPD,
      {
        updatedAt,
        value: currentFPD
      }
    ]
  }
  
  const prevFPC = FPC[FPC.length - 1].value
  const currentFPC = rates[1]
  
  if (currentFPC !== prevFPC && currentFPC !== null && !!currentFPC) {
    prevRates.FPC = [
      ...FPC,
      {
        updatedAt,
        value: currentFPC
      }
    ]
  }
  
  const prevMIMO = MIMO[MIMO.length - 1].value
  const currentMIMO = rates[2]
  
  if (currentMIMO !== prevMIMO && currentMIMO !== null && !!currentMIMO) {
    prevRates['Taxa MIMO'] = [
      ...MIMO,
      {
        updatedAt,
        value: currentMIMO
      }
    ]
  }

  const prevPrime = Prime[Prime.length - 1].value
  const currentPrime = rates[3]
  
  if (currentPrime !== prevPrime && currentPrime !== null && !!currentPrime) {
    prevRates['Prime Pate'] = [
      ...Prime,
      {
        updatedAt,
        value: currentPrime
      }
    ]
  }
  
  await fs.writeFile(path, JSON.stringify(prevRates))
  return prevRates
}