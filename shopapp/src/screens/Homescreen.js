import React from 'react'
import products from '../products'
import Product from '../components/Product'

const Homescreen = () => {
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