import express from 'express'
import { config } from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { demographics } from '@src/demographic/population'
import { meritalStatus } from '@src/demographic/maritalStatus'
import { homeOwnership } from '@src/demographic/homeOwnership'
import { waterFountainForDrinking } from '@src/demographic/waterFountainForDrinking'
import { energySources } from '@src/demographic/energySources'

dotenvExpand(config())

const app = express()

app.use(
  express.json({
    type: ['application/json', 'text/plain']
  })
)

app.get('/', energySources)

app.listen(3002, () => {
  console.log(`Server running on http://localhost:3002`)
})
