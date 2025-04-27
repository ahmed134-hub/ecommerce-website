import React, { useContext } from 'react'
import './cartitems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from "../assets/cart_cross_icon.png"

const CartItems = () => {

    const {getTotlaCartAmount,all_products,cartitems,removefromcart}=useContext(Shopcontext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>products</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
     {all_products.map((e)=>{
        
        if(cartitems[e.id] > 0 ){
            return (
                <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main">
                        <img className='carticon-product-icon' src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p> ${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartitems[e.id]}</button>
                        <p>${e.new_price*cartitems[e.id]}</p>
                        <img className='cartitems-remove-icon'  src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div> 
            )
        }else {return null}
     })}
     <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals </h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotlaCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping fee</p>
                    <p>free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotlaCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code , Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default CartItems



