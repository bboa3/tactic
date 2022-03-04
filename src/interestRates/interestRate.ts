import puppeteer from "puppeteer";
import { createRates } from "@src/interestRates/rates";

const url = 'https://www.bancomoc.mz/fm_MercadosMMI.aspx?id=5'

interface InterestRate {
  FPD: number;
  FPC: number;
  "Taxa MIMO": number;
  "Prime rate": number;
}

const __EVENTTARGET = '#__VIEWSTATE'
const form = '#form1'
const inputId = '#ContentPlaceHolder1_zwebibDtFim'
const buttonId = '#zwebbtSearch'
const ratesTableSelector = '#ContentPlaceHolder1_Panel2 > div > table > tbody > tr > td'

export const interestRate = async (date: string): Promise<InterestRate> => {
  const browser = await puppeteer.launch({ headless: false })
  
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(300000)
  
  await page.goto(url)

  await page.type(__EVENTTARGET, date)
  await Promise.all([page.click(buttonId), page.waitForTimeout(100000)])
  
  const rates = await page.$$eval<object>(ratesTableSelector, createRates)

  await browser.close()

  return rates as any
}
