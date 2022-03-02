import React from 'react';
import EachCartItem from './EachCartItem';

function AllCartItems() {
  return (
    <div className='cart-items-container w-70'>
        <EachCartItem />
        <EachCartItem />
    </div>
  )
}

export default AllCartItems