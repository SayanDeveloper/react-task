import React, {useState} from 'react';
import {Modal,  ModalBody} from 'reactstrap';

function PriceList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='price-summary-container'>
        <button className='cen-btn'>
            <img src='./images/gift.png' alt='gift' />
            Have a Promo Code?
        </button>
        <div className='d-flex justify-content-between'>
            <div className='grey-text'>Monthly Rent</div>
            <div>Rs 3050</div>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='grey-text'>Security Deposit</div>
            <div>Rs 6799</div>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='grey-text'>GST</div>
            <div>Rs 300</div>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='grey-text'>Coupon Discount</div>
            <div className='red-text'>- Rs 2799</div>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='grey-text'>Delivery</div>
            <div className='green-text'>FREE</div>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
            <div>Total Payable</div>
            <div>Rs 30,000</div>
        </div>
        <button onClick={() => setIsModalOpen(true)} className='place-order'>Place Order</button>
        <Modal isOpen={isModalOpen}
            toggle={() => setIsModalOpen(!isModalOpen)}
            modalTransition={{ timeout: 100 }}
            centered
        >  
            <ModalBody className='promo-modal'>
                <button 
                    onClick={() => setIsModalOpen(false)}
                >
                    <i className='fa fa-times'></i>
                </button>
                <img src='./images/modalGift.png' alt='reward-gift' />
                <p className='text-center'>
                    You and Your friend get 30% off upto 500 on your next months rent
                </p>
                <span>Your promo code</span>
                <h3 className='d-red-text'>ANDNYD2S</h3>
                <hr />
                <span>Share on</span>
                <div className='share-icons-flex d-flex'>
                    <a className='d-flex justify-content-center align-items-center' href='#'><i className="fa fa-envelope" aria-hidden="true"></i></a>
                    <a className='d-flex justify-content-center align-items-center' href='#'><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                    <a className='d-flex justify-content-center align-items-center' href='#'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a className='d-flex justify-content-center align-items-center' href='#'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a className='d-flex justify-content-center align-items-center' href='#'><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </ModalBody>
        </Modal>
    </div>
    )
}

export default PriceList