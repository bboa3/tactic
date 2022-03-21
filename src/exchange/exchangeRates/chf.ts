
const chfRates = (exchanges: any) => {
  const line = exchanges[34].Line
  const line2 = exchanges[37].Line

  return {
    buy: Number(line[0].split(',').join('.')),
    sale: Number(line2[0].split(',').join('.'))
  }
}

export default chfRates;
