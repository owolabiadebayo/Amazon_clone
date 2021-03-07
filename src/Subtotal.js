import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { UseStateValue } from './StateProvider'
import {getBasketTotal} from './reducer';
function SubTotal() {
  const [{basket }, dispatch ] = UseStateValue();

  return (
   <div className = "subtotal">
     <CurrencyFormat 
     renderText = {(value) => (
       <>
       <p className= "center">
         Subtotal ({basket?.lenght} items): <strong>{value}</strong>
       </p>
         <small> <input className="center" type="checkbox" /> This order contains a gift </small>
    </>
     )}
     decimalScale={2}
     value={getBasketTotal(basket)}
     displayType = {"text"}
     thousandSeparator = {true}
     prefix = {"$"} />
     <div className="subtotal">
 <button>Proceed to Checkout</button>
 </div>
   </div>
  )
}



export default SubTotal
