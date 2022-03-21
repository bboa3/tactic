
const tzsRates = (exchanges: any) => {
  const line = exchanges[41].Line
  const line2 = exchanges[43].Line

  return {
    buy: Number(line[1].split(',').join('.')),
    sale: Number(line2[1].split(',').join('.'))
  }
}

export default tzsRates;
