import React, {useState, useEffect} from 'react';
import EachCartItem from './EachCartItem';

function AllCartItems() {
  const [list, setList] = useState([]);
  const cartItemsList = [
    {
      image: "bed1",
      name: "Royal Double Bed",
      usd: "45.00",
      tenure: "12",
      deposit: "799",
      total: "1499"
    },
    {
      image: "bed2",
      name: "Royal Double Bed",
      usd: "45.00",
      tenure: "12",
      deposit: "799",
      total: "1499"
    }
  ]

  useEffect(() => {
    setList(cartItemsList);
  }, []);
  return (
    <div className='cart-items-container'>
        {
          list.map((each, ind) => {
            return(
              <EachCartItem 
                key={ind} 
                img={each.image}
                name={each.name}
                usd={each.usd}
                tenure={each.tenure}
                deposit={each.deposit}
                total={each.total} />
            )
          })
        }
        <div className='d-flex justify-content-between align-items-center cart-options'>
          <button>Continue Shopping</button>
          <a href='#'>Need Help?</a>
        </div>
    </div>
  )
}

export default AllCartItems