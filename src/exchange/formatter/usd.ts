import { find } from "./find"

const usdRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 15 })
  const saleLine = find({ exchanges, id: 34 })

  return {
    buy: toNumber(buyLine[0].split(',').join('.')),
    sale: toNumber(saleLine[0].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default usdRates;
