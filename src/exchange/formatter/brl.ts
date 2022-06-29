import { find } from "./find"

const brlRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 16 })
  const saleLine = find({ exchanges, id: 35 })

  return {
    buy: toNumber(buyLine[2].split(',').join('.')),
    sale: toNumber(saleLine[2].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default brlRates;
