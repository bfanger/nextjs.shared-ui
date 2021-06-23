const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const next2 = next({ dev })
const handle2 = next2.getRequestHandler()
const app2 = express()

next2.prepare().then(() => {
  const route2 = (req, res) => {
    return next2.render(req, res, `/`, req.query)
  }

  app2.get('/', route2)

  app2.all('*', (req, res) => {
    return handle2(req, res)
  })
})

module.exports = app2
