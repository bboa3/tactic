const murRates = (exchanges: string[]) => {
  const regex = /Mauricias/i

  const exchange = exchanges.find(exchange => exchange.match(regex))
  if (!exchange) throw new Error(`${regex.source} exchange rates not found`)
  
  const rates = exchange.match(/\d+/g)

  const buy = `${rates[0]}.${rates[1]}`
  const sate = `${rates[2]}.${rates[3]}`

  return {
    buy: Number(buy),
    sale: Number(sate)
  }
}

export default murRates;
