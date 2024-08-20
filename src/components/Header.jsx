import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';import '../css/header.css'

export default function Header() {
  return (
    <div className='header'>
      <img className='header-logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
      />

      <div className='header-search'>
        <input className='header-search-input' type='text'/>
        <SearchIcon className='header-search-icon'/>
      </div>

        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-option-line-one'>Hello Guest</span>
                <span className='header-option-line-two'>Sign In</span>
            </div>
            <div className='header-option'>
                <span className='header-option-line-one'>Returns</span>
                <span className='header-option-line-two'>& Orders</span>
            </div>
            <div className='header-option'>
                <span className='header-option-line-one'>Your</span>
                <span className='header-option-line-two'>Prime</span>
            </div>
            <div className='header-option-basket'>
                <ShoppingBasketIcon/>
                <span className='header-option-line-two header-basket-count'>0</span>
            </div>
            
        </div> 
    </div>
  )
}
