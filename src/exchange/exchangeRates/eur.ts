const eurRates = (exchanges: any) => {
  const line = exchanges[28].Line
  const line2 = exchanges[58].Line

  return {
    buy: toNumber(line[0].split(',').join('.')),
    sale: toNumber(line2[0].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default eurRates;
