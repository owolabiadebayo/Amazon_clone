import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { Link } from 'react-router-dom'
import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import { UseStateValue } from './StateProvider'


function Header() {
  const [{basket}, dispatch] = UseStateValue();
  console.log("basket",basket);
  return (
    <nav className="header">
    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
    <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon"/>
    </div>
    <div className="header__nav">
    <Link to ="/" className="header__link"> 
      <div className="header__option">
        <span className="header__optionLineOne">Hello, User</span>
        <span className="header__optionLineTwo">Sign In or Sign Out</span>
      </div>
      </Link>
    <Link to ="/" className="header__link"> 
      <div className="header__option">
        <span className="header__optionLineOne">Return</span>
        <span className="header__optionLineTwo">& orders</span>
      </div>
      </Link>
      </div>
      <Link to ="/checkout" className="header_link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon/>
          <span className="header_optionLineTwo header__productCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Header;
