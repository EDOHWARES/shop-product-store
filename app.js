const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRoutes = require('./router/admin');
const productListRoute = require('./router/shop');

const _404Controller = require('./controllers/not-found');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(productListRoute);

app.use(_404Controller);

app.listen(3000);