const express = require('express')
const path = require('path')
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')

const connectDb = require('./baza')
const autiRouter = require('./controlers/auti')

const app = express()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())





app.set('views', path.join(__dirname, 'views'))



app.engine('.hbs', engine({
    extname: "hbs",
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'main.hbs'
  }))
  app.set('view engine', '.hbs')

  app.use('/auti', autiRouter)


// app.listen(3000)
connectDb()
  .then(data => {
    console.log('Baza connected.');
    app.listen(3000, () => {
      console.log('server started at 3000.');
      console.log('http://localhost:3000/auti');
    }).on('error', err =>
      console.log('GRESKA U APPLISTEN:\n', err))
  })
  .catch(err => console.log('GRESKA U CONNECTDB\n:', err))