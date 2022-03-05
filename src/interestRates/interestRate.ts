import { httpFetch } from '@src/interestRates/fetch'
import * as cheerio from 'cheerio'
import { Element } from 'cheerio'
import { createRates } from '@src/interestRates/rates'

const tableSelector = '#ContentPlaceHolder1_Panel2 > div:nth-child(1) > table:nth-child(1)'

export const interestRate = async (date: string) => {
  const response: string = await httpFetch(date)

  const $ = cheerio.load(response)

  const table = $(tableSelector)

  const preRates = []

  table.find('tbody > tr').slice(1).each((_i: number, element: Element) => {
    const td = $(element).find('td:nth-child(2)')

    const rate = Number(td.text().replace(/,/g, '.'))

    preRates.push(rate)
  })

  const rates = createRates(preRates)

  return rates
}
