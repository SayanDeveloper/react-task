import React from 'react';
import EachCartItem from './EachCartItem';

function AllCartItems() {
  return (
    <div className='cart-items-container'>
        <EachCartItem />
        <EachCartItem />
        <div className='d-flex justify-content-between align-items-center cart-options'>
          <button>Continue Shopping</button>
          <a href='#'>Need Help?</a>
        </div>
    </div>
  )
}

export default AllCartItems