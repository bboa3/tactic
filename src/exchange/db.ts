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
		const currency = getCurrency(iso, currencies)
		if (!currency) return null

		currency.trades.push(trade)
		return currency
  }

	const newCurrencies: Currency[] = []

	for (const newTrade of newTrades) {
		const { iso, trade } = newTrade
		const newT = save(iso, trade)

		if (newT) {
			newCurrencies.push(newT)
		}
	}
	
  await fs.writeFile(path, JSON.stringify(newCurrencies))
  return newCurrencies
}

function getCurrency (iso: string, currencies: Currency[]): Currency | null {
	for (const currency of currencies) {
		if (currency.iso.code === iso) {
			return currency
		}
	}

	return null
}