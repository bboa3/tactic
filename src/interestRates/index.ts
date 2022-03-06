import fs from 'fs/promises'
import dayjs from 'dayjs'
import { interestRate } from '@src/interestRates/interestRate'

export const interestRates = async () => {
  await fs.writeFile('date.txt', '05-01-2020')
  let isBefore = true

  do {
    const intRates = JSON.parse((await fs.readFile('interestRates.json', 'utf8')))
    const lastD = (await fs.readFile('date.txt', 'utf8')).split('-')
    const day = Number(lastD[0])
    const month = Number(lastD[1]) - 1
    const year = Number(lastD[2])
    
    const lastDate = dayjs(new Date(year, month, day))

    const today = dayjs()

    const newDate = lastDate.add(1, 'day').format('DD-MM-YYYY')

    const rates = await interestRate(newDate)
    intRates[newDate] = rates

    await fs.writeFile('interestRates.json', JSON.stringify(intRates))
    await fs.writeFile('date.txt', newDate)

    isBefore = lastDate.isBefore(today)
  } while (isBefore)
} 