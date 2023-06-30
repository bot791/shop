import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Productscreen() {
  const [product, setProduct] = useState([])
  const {id} = useParams()

  useEffect(() => {

    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`)
      setProduct(data)
      console.log(data)
    }
    fetchProduct()
  }, [id])
  return (
    <div className=' w-full h-screen items-center flex sm:flex-row flex-col'>
      <div className='w-2/3 sm:w-1/2 p-1 rounded mt-5 sm:ml-5 flex flex-col'>
        <img src={product.image} alt='' className='rounded border border-zinc-600' />
        <button className=' text-zinc-100 ring-2 bg-emerald-900 hover:bg-emerald-500 ring-white text-center m-2 px-4 py-1 rounded font-bold'>BUY NOW</button>
        <button className=' text-zinc-100 ring-2 bg-emerald-900 hover:bg-emerald-500 ring-white text-center m-2 px-4 py-1 rounded font-bold'>ADD TO CART</button>
      </div>
      <div className=' flex flex-col'>
        <p className=' font-bold font-mono m-10 text-2xl text-gray-800'>{product.name}</p>
        <p className=' font-bold text-lg px-5'>Brand: {product.brand}</p>
        <p className=' font-semibold m-5'>{product.description}</p>
        <p className=' px-5 font-medium font-serif text-lg text-zinc-700'>In stock: {product.countInStock}</p>

      </div>
    </div>
  )
}

export default Productscreen