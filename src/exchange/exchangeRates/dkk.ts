
const dkkRates = (exchanges: any) => {
  const line = exchanges[32].Line
  const line2 = exchanges[35].Line

  return {
    buy: Number(line[4].split(',').join('.')),
    sale: Number(line2[4].split(',').join('.'))
  }
}

export default dkkRates;
