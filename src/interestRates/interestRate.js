const puppeteer = require("puppeteer")
const { createRates } =  require("@src/interestRates/rates")

const url = 'https://www.bancomoc.mz/fm_MercadosMMI.aspx?id=5'

// interface InterestRate {
//   FPD: number;
//   FPC: number;
//   "Taxa MIMO": number;
//   "Prime rate": number;
// }

const buttonId = '#zwebbtSearch'
const ratesTableSelector = '#ContentPlaceHolder1_Panel2 > div > table > tbody > tr > td'

const interestRate = async (date) => {
  const browser = await puppeteer.launch()
  
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(300000)
  
  await page.goto(url)

  await page.evaluate((date) => {
    document.querySelector("#ContentPlaceHolder1_zwebtxDtFim.field.required").value = date
  }, date)

  await Promise.all([page.click(buttonId), page.waitForTimeout(50000)])
  
  const rates = await page.$$eval(ratesTableSelector, createRates)

  await browser.close()

  return rates
}


module.exports = {interestRate}