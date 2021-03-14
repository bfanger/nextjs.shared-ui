const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const next1 = next({ dev, dir: './next/app1' })
const handle1 = next1.getRequestHandler()
const app1 = express()

next1.prepare().then(() => {
  const route1 = (req, res) => {
    return next1.render(req, res, `/`, req.query)
  }

  app1.get('/', route1)

  app1.all('*', (req, res) => {
    return handle1(req, res)
  })
})

module.exports = app1
