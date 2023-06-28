import React from 'react'
import Product from '../components/Product'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Homescreen = () => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
const fetchProducts = async ()=>{
  const {data} =await axios.get('/api/products')
  setProducts(data)
}
fetchProducts()
  },[])
  return (
    <div className=' mt-2 grid grid-col-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center mx-2 mb-2 '>
        {products.map((product)=>{
return(
    <div className=''>
        <Product product={product}/>
    </div>
)
        })}
    </div>
  )
}

export default Homescreen