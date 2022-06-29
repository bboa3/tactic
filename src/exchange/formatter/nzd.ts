import { find } from "./find"

const nzdRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 20 })
  const saleLine = find({ exchanges, id: 39 })
  
  return {
    buy: toNumber(buyLine[0].split(',').join('.')),
    sale: toNumber(saleLine[0].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default nzdRates;
