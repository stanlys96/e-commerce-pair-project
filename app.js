const express = require('express');
const router = require('./routes/index');
// const session = require('express-session');
const formatPrice = require('./helpers/priceFormatter');

const app = express();
const port = 3000;

app.locals.formatPrice = formatPrice;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

app.set('trust proxy', 1) // trust first proxy
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));

app.use(router);

app.listen(port, () => {
  console.log(`Listening no port: ${port}...`);
})