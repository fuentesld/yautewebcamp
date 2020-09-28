const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')
const app = express()

// ROUTES
const dirRoot = require('./utils/path')
const main = require('./routes/main')
const conferencia = require('./routes/conferencia')
const registro = require('./routes/registro')
const errorController = require('./controllers/error')

// * MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(dirRoot, 'public')))

// EJS
app.set('view engine', 'ejs')
app.set('views', 'views')

// * ROUTES
app.use('/', main)
app.use('/conferencia', conferencia)
app.use('/registro', registro)
app.use(errorController.get404Page)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});
