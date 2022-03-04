import fs from 'fs/promises'
import dayjs from 'dayjs'
import { interestRate } from '@src/interestRates/interestRate';

const intRates = {}

export const interestRates = async () => {
  const lastD = (await fs.readFile('date.txt', 'utf8')).split('-')
  const day = Number(lastD[0])
  const month = Number(lastD[1]) - 1
  const year = Number(lastD[2])
  
  const lastDate = dayjs(new Date(year, month, day))

  const today = dayjs()

  const isBefore = lastDate.isBefore(today)

  if(isBefore) {
    const newDate = lastDate.add(1, 'day').format('DD-MM-YYYY')

    const rates = await interestRate(newDate)
    intRates[newDate] = rates

    await fs.writeFile('interestRates.json', JSON.stringify(intRates))
  }
} 