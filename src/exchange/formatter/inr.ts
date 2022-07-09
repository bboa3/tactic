import { find } from "./find"

const inrRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 27 })
  const saleLine = find({ exchanges, id: 30 })

  return {
    buy: toNumber(buyLine[0].split(',').join('.')) / 1000,
    sale: toNumber(saleLine[0].split(',').join('.')) / 1000
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default inrRates