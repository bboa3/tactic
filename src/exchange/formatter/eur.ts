import { find } from "./find"

const eurRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 18 })
  const saleLine = find({ exchanges, id: 37 })

  return {
    buy: toNumber(buyLine[0].split(',').join('.')),
    sale: toNumber(saleLine[0].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default eurRates;
