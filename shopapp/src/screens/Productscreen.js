import React from 'react'
import products from '../products'

const Productscreen = ({match}) => {
    const product=products.find((p)=>p._id === match.params.id
    )
  return (
    <div className=' w-[60%] h-[80%] bg-zinc-200 rounded block m-auto mt-2 items-center'>
<div>{product.name}</div>    </div>
  )
}

export default Productscreen