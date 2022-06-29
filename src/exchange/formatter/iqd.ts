import { find } from "./find"

const iqdRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 27 })
  const saleLine = find({ exchanges, id: 30 })

  return {
    buy: toNumber(buyLine[1].split(',').join('.')),
    sale: toNumber(saleLine[1].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default iqdRates
