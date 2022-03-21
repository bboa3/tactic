
const cadRates = (exchanges: any) => {
  const line = exchanges[32].Line
  const line2 = exchanges[35].Line

  return {
    buy: Number(line[1].split(',').join('.')),
    sale: Number(line2[1].split(',').join('.'))
  }
}

export default cadRates;
