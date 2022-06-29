import { find } from "./find"

const zmwRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 21 })
  const saleLine = find({ exchanges, id: 40 })

  return {
    buy: toNumber(buyLine[2].split(',').join('.')),
    sale: toNumber(saleLine[2].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default zmwRates;
