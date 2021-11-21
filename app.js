const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const auth = require('./routes/auth.routes')

const app = express()

app.use(bodyParser.json());

app.use('/auth',auth)
app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(process.env.PORT || 5050, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

