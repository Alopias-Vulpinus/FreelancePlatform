const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


const app = express();

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

app.use(bodyParser.json());

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

/*app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'scr', 'index.html'))
})*/

app.use('/auth' , require('./routes/auth.routes'));
app.use('/skill', require('./routes/skill.routes'));
app.use('/freelancer', require('./routes/freelancer.routes'));
app.use('/customer', require('./routes/customer.routes'));
app.use('/task', require('./routes/task.routes'));
app.use('/status', require('./routes/status.routes'));
app.use('/role', require('./routes/role.routes'));
app.use('/profile', require('./routes/profile.routes'));
app.use('/', express.static(path.join(__dirname, 'client', 'build')))


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

