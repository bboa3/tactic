import fs from 'fs/promises'
import dayjs from 'dayjs'
import { interestRate } from '@src/interestRates/interestRate'

const startDate = '13-03-2022'
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
    const lastDatePlusOneFormatted = lastDate.add(1, 'day').format('DD-MM-YYYY')

    await interestRate(lastDatePlusOneFormatted)

    await fs.writeFile('date.txt', lastDatePlusOneFormatted)
    const today = dayjs()

    isBefore = lastDatePlusOne.isBefore(today)
  } while (isBefore)
} 