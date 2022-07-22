const tzsRates = (exchanges: string[]) => {
  const regex = /Tanzânia/i

  const exchange = exchanges.find(exchange => exchange.match(regex))
  if (!exchange) throw new Error(`${regex.source} exchange rates not found`)
  
  const rates = exchange.match(/\d+/g)

  const buy = `${rates[0]}.${rates[1]}`
  const sate = `${rates[2]}.${rates[3]}`

  return {
    buy: Number(buy) / 1000,
    sale: Number(sate) / 1000
  }
}

export default tzsRates;
