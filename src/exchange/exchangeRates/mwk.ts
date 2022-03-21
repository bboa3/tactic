const mwkRates = (exchanges: any) => {
  const line = exchanges[41].Line
  const line2 = exchanges[43].Line

  return {
    buy: Number(line[0].split(',').join('.')),
    sale: Number(line2[0].split(',').join('.'))
  }
}

export default mwkRates;
