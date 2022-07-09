import fs from 'fs/promises'
import dayjs from 'dayjs'
import { interestRate } from '@src/interestRates/interestRate'
import { saveInterestRates } from './db'

const startDate = '2018-01-01'
export const interestRates = async () => {
  await fs.writeFile('date.txt', startDate)
  let isBefore = true

  do {
    const lastD = (await fs.readFile('date.txt', 'utf8'))

    const lastDate = dayjs(lastD)

    const lastDatePlusOne = lastDate.add(1, 'day')
    const lastDatePlusOneFormatted = lastDatePlusOne.format('YYYY-MM-DD')

    const rates = await interestRate(lastDatePlusOneFormatted)

    await saveInterestRates(rates)

    await fs.writeFile('date.txt', lastDatePlusOneFormatted)
    const today = dayjs(new Date())

    isBefore = lastDatePlusOne.isBefore(today)
  } while (isBefore)
} 