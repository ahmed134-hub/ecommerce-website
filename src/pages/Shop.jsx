import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import Newcollection from '../components/newcollection/Newcollection'
import Newsletter from '../components/newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop
