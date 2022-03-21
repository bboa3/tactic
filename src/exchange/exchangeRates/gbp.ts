
const gbpRates = (exchanges: any) => {
  const line = exchanges[33].Line
  const line2 = exchanges[36].Line

  return {
    buy: Number(line[0].split(',').join('.')),
    sale: Number(line2[0].split(',').join('.'))
  }
}

export default gbpRates;
