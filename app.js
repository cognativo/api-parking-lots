var express         = require('express');
var path            = require('path');
var cookieParser    = require('cookie-parser');
var logger          = require('morgan');
const BodyParser    = require("body-parser")
const consign       = require('consign')

const PORT = process.env.PORT || 7000;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//Rotas/Serviços
consign()    
  .include('./api/routes')
  .into(app)

app.listen(PORT, () => console.log("Connected to `" + PORT + "`!"));

module.exports = app;
