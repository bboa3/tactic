
const usdRates = (exchanges: any) => {
  const line = exchanges[exchanges.length - 1].Line
  
  return {
    buy: Number(line[1].split(',').join('.')),
    sale: Number(line[3].split(',').join('.'))
  }
}

export default usdRates;
