const zarRates = (exchanges: any) => {
  const line = exchanges[45].Line
  const line2 = exchanges[46].Line

  return {
    buy: Number(line[0].split(',').join('.')),
    sale: Number(line2[0].split(',').join('.'))
  }
}

export default zarRates
