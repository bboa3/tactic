import { find } from "./find"

const sekRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 21 })
  const saleLine = find({ exchanges, id: 40 })

  return {
    buy: toNumber(buyLine[1].split(',').join('.')),
    sale: toNumber(saleLine[1].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default sekRates;
