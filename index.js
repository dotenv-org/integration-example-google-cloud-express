require('dotenv-vault-core').config()
console.log(process.env) // for debugging purposes. remove when ready.

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  process.exit(0)
})
