
const sekRates = (exchanges: any) => {
  const line = exchanges[33].Line
  const line2 = exchanges[36].Line

  return {
    buy: Number(line[2].split(',').join('.')),
    sale: Number(line2[2].split(',').join('.'))
  }
}

export default sekRates;
