import express from 'express'
import { config } from 'dotenv'
import { resolve } from 'path'
import dotenvExpand from 'dotenv-expand'
import { employmentIndex } from '@src/employmentIndex'

dotenvExpand(config())

const app = express()

const path = resolve(__dirname, '..', 'files', 'interestRates.json')

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.get('/', employmentIndex)


app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})
