import { filter, find } from "./find"

const zwlRates = (exchanges: any) => {
  const filtered = filter({ exchanges, id: 0 })

  const buyLine = filtered[15].Line
  const saleLine = filtered[17].Line

  return {
    buy: toNumber(buyLine[0].split(',').join('.')) / 1000,
    sale: toNumber(saleLine[0].split(',').join('.')) / 1000
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default zwlRates;