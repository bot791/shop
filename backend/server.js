const express = require('express')
const app = express();
const products = require('./data/products')

app.get('/',(req,res)=>{
res.send('api started...')
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=> {
      return (p._id === req.params.id) 
    })
   
    res.json(product)
    console.log(product)

})




app.listen(5000,console.log("server started"))
