const express = require('express');
const app = express();
const products = require('./data/products');
const useParams = require('react-router-dom')

const {id} = useParams();


app.get('/',(req,res)=>{
res.send('api is running')
})
app.get('/api/products',(req,res)=>{
res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
 const product = products.find((p)=>{
p._id === req.id
 })
    res.json(product)
    })


app.listen(5000,console.log("server running on port 5000"))

