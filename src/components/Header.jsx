import React from 'react'
import '../css/header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom'
import auth  from '../Firebase'
import Firebase from '../Firebase'

export default function Header() {
  const [{basket , user} , dispatch] = useStateValue()
  const navigate = useNavigate();
  const handleAuthentication = () => {
    if(user){
      Firebase.auth.signOut();
    }
  }
  return (
    <div className='header'>
      <img className='header-logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        onClick={() => navigate('/')}
      />

      <div className='header-search'>
        <input className='header-search-input' type='text'/>
        <SearchIcon className='header-search-icon'/>
      </div>

        <div className='header-nav'>
        <Link to={!user && '/login'}>
            <div className='header-option' onClick={handleAuthentication}>
                <span className='header-option-line-one'>Hello {!user? 'Guest' : user.email}</span>
                <span className='header-option-line-two'>{user? 'Sign Out' : 'Sign In'}</span>
            </div>
        </Link>
            <div className='header-option'>
                <span className='header-option-line-one'>Returns</span>
                <span className='header-option-line-two'>& Orders</span>
            </div>
            <div className='header-option'>
                <span className='header-option-line-one'>Your</span>
                <span className='header-option-line-two'>Prime</span>
            </div>

            <Link to='/checkout'>
              <div className='header-option-basket'>
                  <ShoppingBasketIcon/>
                  <span className='header-option-line-two header-basket-count'>
                    {basket?.length}
                  </span>
              </div>
            
            </Link>

        </div> 
    </div>
  )
}
