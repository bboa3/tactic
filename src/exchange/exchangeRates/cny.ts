
const cnyRates = (exchanges: any) => {
  const line = exchanges[32].Line
  const line2 = exchanges[35].Line

  return {
    buy: Number(line[3].split(',').join('.')),
    sale: Number(line2[3].split(',').join('.'))
  }
}

export default cnyRates;
