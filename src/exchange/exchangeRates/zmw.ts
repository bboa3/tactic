
const zmwRates = (exchanges: any) => {
  const line = exchanges[41].Line
  const line2 = exchanges[43].Line

  return {
    buy: Number(line[2].split(',').join('.')),
    sale: Number(line2[2].split(',').join('.'))
  }
}

export default zmwRates;
