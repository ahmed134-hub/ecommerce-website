import React, { useContext, useState } from 'react'
import "./navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'


const Navbar = () => {

    const [menu,setmenu]=useState("shop")
const {getTotalCartItems}=useContext(Shopcontext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}>  <Link to="/">shop</Link> {menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setmenu("mens")}}> <Link to="/mens">men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}> <Link to="/womens">women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}> <Link to="/kids">kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>  
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>  
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
