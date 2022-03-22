
const nokRates = (exchanges: any) => {
  const line = exchanges[29].Line
  const line2 = exchanges[59].Line

  return {
    buy: toNumber(line[2].split(',').join('.')),
    sale: toNumber(line2[2].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default nokRates;
