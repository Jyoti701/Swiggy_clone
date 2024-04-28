import React from 'react'
import Search from './Navcomponents/Search';
import Offer from './Navcomponents/Offer';
import Help from './Navcomponents/Help';
import Signin from './Navcomponents/Signin';
import Cart from './Navcomponents/Cart';
import './naavigation.css'


 const Navigation = () => {
  return (
    <div className='nav_container'>
     <Search/>
     <Offer/> 
     <Help/>
     <Signin/>
     <Cart/>
    </div>
  )
}

export default Navigation
