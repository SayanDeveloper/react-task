import React from 'react'

function TagBox() {
  return (
    <div className='tag-boxes-container d-flex flex-column flex-md-row justify-content-between'>
      <div className='each-box d-flex flex-column align-items-center justify-content-center'>
        <i className="fa fa-tags" aria-hidden="true"></i>
        <div>MOST AFFORDABLE</div>
        <p className='text-center'>Find the best exclusive range of products</p>
      </div>
      <div className='each-box d-flex flex-column align-items-center justify-content-center'>
        <i className="fa fa-wrench" aria-hidden="true"></i>
        <div>FREE SERVICES</div>
        <p className='text-center'>Find the best exclusive range of products</p>
      </div>
      <div className='each-box d-flex flex-column align-items-center justify-content-center'>
        <i className="fa fa-bolt" aria-hidden="true"></i>
        <div>FREE DELIVERY</div>
        <p className='text-center'>Find the best exclusive range of products</p>
      </div>
    </div>
  )
}

export default TagBox