const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require("cors")
const Routess =  require('../routers')
const port = 3000

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login',Routess)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const database = require('./lib/database')
const { Router } = require('express')
database.Connect


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})