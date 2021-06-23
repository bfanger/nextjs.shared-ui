'use strict'

const express = require('express')
const cors = require('cors')
const vhost = require('vhost')

const app1 = require('./app1')
const app2 = require('./app2')

const port = 3030;

const server = express()

server.use(express.json())
server.use(
  express.urlencoded({
    extended: true,
    type: '*/x-www-form-urlencoded',
  }),
)

server.use(cors())

// In reallity this would be example1.com
server.use(vhost(`app1.localhost`, app1))

// In reallity this would be example2.com
server.use(vhost(`app2.localhost`, app2))

server.listen(port, (err) => {
  if (err) throw err
  console.log(`Listening on post ${port}`)
})
