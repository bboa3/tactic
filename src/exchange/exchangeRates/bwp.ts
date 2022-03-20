
const bwpRates = (exchanges: any) => {
  const line = exchanges[45].Line
  const line2 = exchanges[46].Line

  return {
    buy: Number(line[1].split(',').join('.')),
    sale: Number(line2[1].split(',').join('.'))
  }
}

export default bwpRates;
