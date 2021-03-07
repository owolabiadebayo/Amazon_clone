import React from 'react'
import './Checkout.css'
import {UseStateValue} from './StateProvider'
import Subtotal from './Subtotal'
import ProductCart from './ProductCart'

function Checkout() {
  const [{basket}] = UseStateValue()
  return (
    <div className="checkout">
    <div className="checkout_left">
    {basket.lenght === 0 ? (
      <div>
      <h2 className="checkout_title">Your Shopping basket is empty.</h2>
      <p>You have no items in your basket. Buy one</p>
      </div> 
    ): (
      <div>
      <h2 className="shoppingBaskettitle">Items in the shopping basket</h2>
      {
        basket.map(item => (<ProductCart  id={item.id} title={item.title}  image={item.image} price={item.price} rating={item.rating}/>))
      }
      </div>
    )
    }
    </div>
    <div className="checkout_right">
      <Subtotal />
    </div>
    </div>
  )
}

export default Checkout
