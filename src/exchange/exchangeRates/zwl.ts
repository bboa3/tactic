
const zwlRates = (exchanges: any) => {
  const line = exchanges[42].Line
  const line2 = exchanges[44].Line

  return {
    buy: Number(line[0].split(',').join('.')),
    sale: Number(line2[0].split(',').join('.'))
  }
}

export default zwlRates;