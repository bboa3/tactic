import express from 'express'
import { config } from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { creditByPurpose } from '@src/creditByPurpose'

dotenvExpand(config())

const app = express()

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.get('/', creditByPurpose)


app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})
