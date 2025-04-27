import React from 'react'
import "./items.css"
import { Link } from 'react-router-dom'
const Items = (props) => {

  function scroll(){
    scrollTo({top:0,left:0,behavior:"smooth"})
  }
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={scroll} src={props.image} alt="" /> </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
