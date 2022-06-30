import { find } from "./find"

const tzsRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 28 })
  const saleLine = find({ exchanges, id: 31 })

  return {
    buy: toNumber(buyLine[2].split(',').join('.')) / 1000,
    sale: toNumber(saleLine[2].split(',').join('.')) / 1000
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default tzsRates;
