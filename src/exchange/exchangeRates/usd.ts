
const usdRates = (exchanges: any) => {
  const line = exchanges[exchanges.length - 1].Line
  
  return {
    buy: toNumber(line[1].split(',').join('.')),
    sale: toNumber(line[3].split(',').join('.'))
  }
}

function toNumber (num: string) {
  if(typeof Number(num) === 'string') throw new Error(`${num} is not a number`)

  return Number(num)
}

export default usdRates;
