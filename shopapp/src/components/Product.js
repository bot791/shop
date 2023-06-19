import React from 'react'

const Product = ({product}) => {
  return (
    <div className=' p-4 bg-emerald-500 hover:bg-emerald-800 hover:text-neutral-100'>
        <img src={product.image} alt=''/>

        <h1 className=' font-bold text-lg  p-2  '>{product.name}</h1>
        <p className=' font-semibold text-sm p-2'>{product.description}</p>
    </div>
  )
}

export default Product