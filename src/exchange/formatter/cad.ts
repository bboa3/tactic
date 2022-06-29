import { find } from "./find"

const cadRates = (exchanges: any) => {
  const buyLine = find({ exchanges, id: 17 })
  const saleLine = find({ exchanges, id: 36 })

  return {
    buy: toNumber(buyLine[0].split(',').join('.')),
    sale: toNumber(saleLine[0].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default cadRates;
