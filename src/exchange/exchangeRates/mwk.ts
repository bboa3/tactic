const mwkRates = (exchanges: any) => {
  const line = exchanges[42].Line
  const line2 = exchanges[48].Line

  return {
    buy: toNumber(line[1].split(',').join('.')),
    sale: toNumber(line2[1].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default mwkRates;
