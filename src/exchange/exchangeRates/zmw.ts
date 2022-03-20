
const zmwRates = (exchanges: any) => {
  const line = exchanges[exchanges.length - 1].Line

  return {
    buy: Number(line[1]),
    sale: Number(line[3])
  }
}

export default zmwRates;
