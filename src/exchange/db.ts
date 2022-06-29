import { resolve } from 'path'
import fs from 'fs/promises'

const path = resolve(__dirname, '..', '..', 'files', 'currencies', 'exchanges.json');

interface Currency {
  country: string
	flag: string
	name: string
	iso: {
		code: string
		number: number
	},
	units: {
		major: {
			name: string,
			symbol: string
		},
	minor: {
		name: string
		symbol: string
		majorValue: number
	}
	},
	banknotes: {
		frequent: string[],
		rare: string[]
	},
	coins: {
		frequent: string[],
	  rare: []
  },
  trades: Trade[]
}

interface Trade {
  buy: number
  sale: number
  date: string
}

interface Data {
  iso: string
  trade: Trade
}

export const saveTrades = async (newTrades: Data[]) => {
  const currencies: Currency[] = JSON.parse((await fs.readFile(path, 'utf8')))

  const save = (iso: string, trade: Trade) => {
    const currency = currencies.find(currency => currency.iso.code === iso)
		
    currency.trades.push(trade)
    return currency
  }
	console.log(newTrades)
	
  const newCurrencies: Currency[] = newTrades.map(({ iso, trade }) => save(iso, trade))  

  await fs.writeFile(path, JSON.stringify(newCurrencies))
  return newCurrencies
}
