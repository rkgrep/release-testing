import Nuxt from 'nuxt'
import express from 'express'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)

// Start nuxt.js
async function start() {
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  const nuxt = new Nuxt(config)
  app.use(nuxt.render)
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
