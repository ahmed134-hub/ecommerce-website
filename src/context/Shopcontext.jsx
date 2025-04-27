import React, { createContext, useState } from "react";
import all_products from '../components/assets/all_product'


export const Shopcontext = createContext(null)

const getdefaultcard = ()=>{
    let cart = {}
    for (let index = 0; index < all_products.length+1; index++) {
        cart[index]=0
    }
    return cart 
}
const Shopcontextprovider = (props)=>{
    const[cartitems,setcartitems]=useState(getdefaultcard())
    
    
        const addtocart = (itemid)=>{
            setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
        const removefromcart = (itemid)=>{
            setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        }

        const getTotlaCartAmount = ()=>{
            let totalAmount = 0
            for(const item in cartitems){
                if(cartitems[item] > 0 ){
                    let iteminfo = all_products.find((product)=> product.id===Number(item))
                    totalAmount += iteminfo.new_price * cartitems[item]
                    
                }
                
            }        
            return totalAmount
            }

            const getTotalCartItems = () => {
                let totalItem = 0 
                for(const item in cartitems){
                    if(cartitems[item]>0){
                        totalItem+=cartitems[item]
                    }
                }
                return totalItem
            }

        const contextvalue = {getTotalCartItems,getTotlaCartAmount,all_products,cartitems,addtocart,removefromcart}
    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default Shopcontextprovider

