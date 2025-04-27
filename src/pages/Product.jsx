import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/breadcrum/Breadcrum'
import Productdisplay from '../components/productdisplay/Productdisplay'
import Descriptionbox from '../components/description/Descriptionbox'
import Relatedproduct from '../components/relatedproduct/Relatedproduct'

const Product = () => {
  const {all_products}= useContext(Shopcontext)
  const {productId}=useParams()
  const product = all_products.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>
    </div>
  )
}

export default Product
