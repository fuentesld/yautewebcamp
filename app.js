const path = require('path')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

const express = require('express')
const app = express()

// ROUTES
const dirRoot = require('./utils/path')
const main = require('./routes/main')
const errorController = require('./controllers/error')

// db
// const db = require('./utils/database')


// * MIDDLEWARE
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(dirRoot, 'public')))

// EJS
app.set('view engine', 'ejs')
app.set('views', 'views')

// * ROUTES
app.use(main)
app.use(errorController.get404Page)

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});




