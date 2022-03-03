import React, {useState} from 'react';

function EachCartItem() {
    const [quantity, setQuantity] = useState(1);

    const quantityValidator = (event) => {
        if (event.target.value < 100) {
            setQuantity(event.target.value);
        }
    }

    const increaseValidate = () => {
        if (quantity < 100) {
            setQuantity(parseInt(quantity)+1);
        }
    }
    const decreaseValidate = () => {
        if (quantity > 1) {
            setQuantity(parseInt(quantity)-1);
        }
    }
  return (
    <div className='each-item-flex'>
        <img className='cart-item-img' src='./images/bed1.png' />
        <div className='first'>
            <div>Royal Double Bed</div>
            <div className='light'>$45.00</div>
            <div className='quantity-container'>
                <button className='minus' onClick={decreaseValidate}>-</button>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => quantityValidator(e)}
                    min={"1"}
                    max={"100"} 
                />
                <button className='plus' onClick={increaseValidate}>+</button>
            </div>
        </div>
        <div className='second'>
            <div className='light mb-2'>Tenure</div>
            <div>12 Months</div>
        </div>
        <div className='third'>
            <div className='light mb-2'>Deposit</div>
            <div>Rs 799</div>
            <div className='refund'>Fully refundable</div>
        </div>
        <div className='fourth mb-2'>
            <div className='light'>Total</div>
            <div id='total-price'>Rs 1499</div>
        </div>
    </div>
  )
}

export default EachCartItem