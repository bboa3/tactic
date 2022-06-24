import express from 'express'
import { config } from 'dotenv'
import { resolve } from 'path'
import fs from 'fs/promises'
import dotenvExpand from 'dotenv-expand'

import { economicActivityIndex } from '@src/economicActivityIndex'
import { employmentIndex } from '@src/employmentIndex'
import { incomeIndex } from '@src/incomeIndex'
import { businessConfidence } from '@src/businessConfidence'

dotenvExpand(config())

const app = express()

const path = resolve(__dirname, '..', 'files', 'interestRates.json')

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.get('/', businessConfidence)


app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})
