import React from 'react';
import './item.css'

const Item = (props) => {
  return <div className='b1 card shadow text-center'>

  <img className='b2 card-img-top  ' src={props.path} alt=''/>
  <div className='b2card-body'>
  <h1 className='b3 card-title'>{props.name}</h1>
  <h1 className='b4 card-text'>{props.price}</h1>
  <button className='btn btn-sm btn-outline-info '>Buy Now</button>
  </div>

        </div>
}
export default Item;
