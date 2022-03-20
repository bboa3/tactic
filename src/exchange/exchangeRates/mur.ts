
const murRates = (exchanges: any) => {
  const line = exchanges[45].Line
  const line2 = exchanges[46].Line

  return {
    buy: Number(line[3].split(',').join('.')),
    sale: Number(line2[3].split(',').join('.'))
  }
}

export default murRates;
