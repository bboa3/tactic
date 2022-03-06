import express from 'express'
import fs from 'fs/promises'

const app = express()

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.get('/', async (req, res) => {
  const intRates = JSON.parse((await fs.readFile('interestRates.json', 'utf8')))

  res.json(intRates)
})

app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})


// import { interestRates } from "@src/interestRates";
// interestRates()