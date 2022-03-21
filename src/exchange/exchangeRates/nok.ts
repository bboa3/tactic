
const nokRates = (exchanges: any) => {
  const line = exchanges[33].Line
  const line2 = exchanges[36].Line

  return {
    buy: Number(line[1].split(',').join('.')),
    sale: Number(line2[1].split(',').join('.'))
  }
}

export default nokRates;
