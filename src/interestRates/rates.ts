import { resolve } from 'path'
import fs from 'fs/promises'

interface Rate {
  updatedAt: string
  value: number
}

interface prevRates {
  FPD: Rate[]
  FPC: Rate[]
  'Taxa MIMO': Rate[]
  'Prime rate': Rate[]
}

const path = resolve(__dirname, '..', '..', 'files', 'interestRates.json')

export const createRates = async (rates: number[], date: string): Promise<prevRates> => {
  const prevRates: prevRates = JSON.parse((await fs.readFile(path, 'utf8')))
  const { FPD, FPC, "Prime rate": Prime, "Taxa MIMO": MIMO } = prevRates
  
  const prevFPD = FPD[FPD.length - 1].value
  const currentFPD = rates[0] 
  
  if (currentFPD !== prevFPD) {
    prevRates.FPD = [
      ...FPD,
      {
        updatedAt: date,
        value: currentFPD
      }
    ]
  }
  
  const prevFPC = FPC[FPC.length - 1].value
  const currentFPC = rates[1]
  
  if (currentFPC !== prevFPC) {
    prevRates.FPC = [
      ...FPC,
      {
        updatedAt: date,
        value: currentFPC
      }
    ]
  }
  
  const prevPrime = Prime[Prime.length - 1].value
  const currentPrime = rates[3]
  
  if (currentPrime !== prevPrime && currentPrime !== null) {
    prevRates['Prime rate'] = [
      ...Prime,
      {
        updatedAt: date,
        value: currentPrime
      }
    ]
  }
  
  const prevMIMO = MIMO[MIMO.length - 1].value
  const currentMIMO = rates[2]
  
  if (currentMIMO !== prevMIMO && currentMIMO !== null) {
    prevRates['Taxa MIMO'] = [
      ...MIMO,
      {
        updatedAt: date,
        value: currentMIMO
      }
    ]
  }
  
  await fs.writeFile(path, JSON.stringify(prevRates))
  return prevRates
}