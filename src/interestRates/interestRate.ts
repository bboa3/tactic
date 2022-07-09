import { httpFetch } from '@src/interestRates/fetch'
import * as cheerio from 'cheerio'
import { Element } from 'cheerio'
import { InterestRatesData, saveInterestRates } from '@src/interestRates/db'
import dayjs from 'dayjs'

const tableSelector = '#ContentPlaceHolder1_Panel2 > div:nth-child(1) > table:nth-child(1)'

export const interestRate = async (date: string) => {
  const invertedDate = dayjs(date).format('DD-MM-YYYY')
  const response: string = await httpFetch(invertedDate)

  const $ = cheerio.load(response)

  const table = $(tableSelector)

  const preRates = []

  table.find('tbody > tr').slice(1).each((_i: number, element: Element) => {
    const td = $(element).find('td:nth-child(2)')

    const rate = Number(td.text().replace(/,/g, '.'))

    preRates.push(rate)
  })

  const data: InterestRatesData = {
    date,
    FPD: preRates[0],
    FPC: preRates[1],
    'Taxa MIMO': preRates[2],
    'Prime rate': preRates[3]
  }

  const t = await saveInterestRates(data)
  console.log(t)
}
