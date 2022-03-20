const szlRates = (exchanges: any) => {
  const line = exchanges[45].Line
  const line2 = exchanges[46].Line

  return {
    buy: Number(line[2].split(',').join('.')),
    sale: Number(line2[2].split(',').join('.'))
  }
}

export default szlRates;
