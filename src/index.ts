import express from 'express'
import { config } from 'dotenv'
import { resolve } from 'path'
import fs from 'fs/promises'
import dotenvExpand from 'dotenv-expand'
import { currentExchangeRates } from '@src/exchange/currentTrades'
import { exchangeRatesHistories } from '@src/exchange/TradeHistories'

dotenvExpand(config())

const app = express()

const path = resolve(__dirname, '..', 'files', 'interestRates.json')

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.use('/', exchangeRatesHistories)


app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})
