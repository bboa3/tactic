
const dkkRates = (exchanges: any) => {
  const line = exchanges[27].Line
  const line2 = exchanges[57].Line

  return {
    buy: toNumber(line[4].split(',').join('.')),
    sale: toNumber(line2[4].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default dkkRates;
