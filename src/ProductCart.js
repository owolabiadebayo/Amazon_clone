import React from 'react'
import './ProductCart.css'
import {UseStateValue} from './StateProvider'
function ProductCart({id,title,image,price,rating}) {
  const [{basket}, dispatch] = UseStateValue()
const removeItem =() => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    id: id
  })
}
  return (
    <div className='productCart'>
     <img className="productCart__image" src={image} alt=""/> 
     <div className="product__info">
      <p className='productCard_title'>{title}</p>
      <p className="productCard_price">{price}</p>
     
     <div className='product_rating'>
       {
         Array(rating)
         .fill()
         .map((_) => (
           <p>*</p>
         ))
       }
     </div>
     <button onClick={removeItem}>Remove from the cart</button>
     </div>
    </div>
  )
}

export default ProductCart
