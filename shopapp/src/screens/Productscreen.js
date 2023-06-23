import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom'

const Productscreen = () => {
    const {id}=useParams();
    const product=products.find((p)=>p._id === (id)
    )
  return (
    <div className=' w-[60%] h-[80%] bg-zinc-200 rounded block m-auto mt-2 items-center'>
<img src={product.image} alt='' className=''/>
    </div>
  )
}

export default Productscreen