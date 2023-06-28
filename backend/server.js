const express = require('express');
const app = express();
const products = require('./data/products');


app.get('/',(req,res)=>{
res.send('api is running')
})
app.get('/api/products',(req,res)=>{
res.json(products)
})



app.listen(5000,console.log("server running on port 5000"))

