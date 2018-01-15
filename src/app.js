'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();




//conecta ao banco
mongoose.connect('mongodb://elton:elton@ds046367.mlab.com:46367/nodestore');
//carrega as models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');
//Middleware para transformar todos os requests bodies em json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productsRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);


module.exports = app;