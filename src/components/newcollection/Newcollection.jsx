import React from 'react'
import "./newcollection.css"
import new_collections from '../assets/new_collections'
import Items from '../items/Items'

const Newcollection = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
    {new_collections.map((item,i)=>{
        return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })}
      </div>
    </div>
  )
}

export default Newcollection
