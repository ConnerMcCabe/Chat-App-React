const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const ChatKit = require('@pusher/chatkit-server')

const app = express()

const chatkit = new ChatKit.default({
  instanceLocator: 'coming soon',
  key: 'coming soon',
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})