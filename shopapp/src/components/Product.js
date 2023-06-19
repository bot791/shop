import React from 'react'

const Product = ({product}) => {
  return (
    <div className=' p-4 bg-neutral-200 border border-neutral-900 '>
        <img src={product.image} alt=''/>

        <h1 className=' font-bold text-lg  p-2   text-center text-emerald-500'>{product.name}</h1>
        <p className=' font-semibold text-sm p-2 text-center text-neutral-700'>{product.description}</p>
        <p className=' font-bold font-mono       text-center text-gray-900'>Rs.{product.price}</p>
        <p className=' font-mono font-semibold text-center text-gray-700'>In Stock {product.countInStock}</p>
    </div>
  )
}

export default Product