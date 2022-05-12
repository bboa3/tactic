import fs from 'fs/promises'
import dayjs from 'dayjs'
import { interestRate } from '@src/interestRates/interestRate'

const startDate = '14-12-2018'
export const interestRates = async () => {
  await fs.writeFile('date.txt', startDate)
  let isBefore = true

  do {
    const lastD = (await fs.readFile('date.txt', 'utf8')).split('-')
    const day = Number(lastD[0])
    const month = Number(lastD[1]) - 1
    const year = Number(lastD[2])
    
    const lastDate = dayjs(new Date(year, month, day))

    const lastDatePlusOne = lastDate.add(1, 'day')
    const lastDatePlusOneFormatted = lastDatePlusOne.format('DD-MM-YYYY')

    await interestRate(lastDatePlusOneFormatted)

    await fs.writeFile('date.txt', lastDatePlusOneFormatted)
    const today = dayjs()

    isBefore = lastDatePlusOne.isBefore(today)
  } while (isBefore)
} 