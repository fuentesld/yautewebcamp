const path = require('path')
const bodyParser = require('body-parser')

const express = require('express')

const dirRoot = require('./utils/path')
const main = require('./routes/main')
const conferencia = require('./routes/conferencia')
const registro = require('./routes/registro')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(dirRoot, 'public')))

app.use('/', main)
app.use('/conferencia', conferencia)
app.use('/registro', registro)
app.use('/', (req, res)=>{
  res.status(404).render(path.join( dirRoot, 'views', 'error404.ejs' ))
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});
