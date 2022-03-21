
const eurRates = (exchanges: any) => {
  const line = exchanges[34].Line
  const line2 = exchanges[37].Line

  return {
    buy: Number(line[1].split(',').join('.')),
    sale: Number(line2[1].split(',').join('.'))
  }
}

export default eurRates;
