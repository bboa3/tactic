import { find } from "./find"

const mwkRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 28 })
  const saleLine = find({ exchanges, id: 31 })

  return {
    buy: toNumber(buyLine[1].split(',').join('.')) / 1000,
    sale: toNumber(saleLine[1].split(',').join('.')) / 1000
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default mwkRates;
