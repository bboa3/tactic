import express from 'express'
import { config } from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { exchangeRates } from '@src/exchange'

dotenvExpand(config())

const app = express()

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.get('/', exchangeRates)


// app.get('/', async (req, res) => {
//   const intRates = JSON.parse((await fs.readFile('interestRates.json', 'utf8')))

//   res.json(intRates)
// })

app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})


// import { interestRates } from "@src/interestRates";
// interestRates()