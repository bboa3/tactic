import fs from 'fs/promises'
import dayjs from 'dayjs'
import { formatter } from '@src/interestRates/formatter'
import { saveInterestRates } from './db'

const startDate = '2018-01-01'
export const interestRates = async () => {
  await fs.writeFile('date.txt', startDate)
  let isEnd = false

  while (!isEnd) {
    const lastD = (await fs.readFile('date.txt', 'utf8'))

    const lastDate = dayjs(lastD)

    const lastDatePlusOne = lastDate.add(1, 'day')
    const lastDatePlusOneFormatted = lastDatePlusOne.format('YYYY-MM-DD')

    const rates = await formatter(lastDatePlusOneFormatted)

    await saveInterestRates(rates)

    await fs.writeFile('date.txt', lastDatePlusOneFormatted)
    const today = dayjs(new Date())

    isEnd = !(lastDatePlusOne.isBefore(today))
  }
} 