import React from 'react';
import './itemlist.css'
import { connect } from 'react-redux'
import { Add } from '../actions/index'

const ItemList = (props) => {
console.log(props)


 const Items = props.items.product.map((e) => {
   return <div className='a2 card shadow text-center ' key={e.id}>
          <img className= 'a3' src={e.imgpath} alt=''  />
          <div className='card-body'>
          <h6 className='card-title'>{e.name}</h6>
          <h6 className='card-text'>{e.price}</h6>
          <button onClick={() => props.addproduct(e)} className='btn btn-sm btn-outline-info'>Buy Now</button>
           </div>
          </div>
 })


  return <div className='a1 container card shadow'>
          <div className='row justify-content-center '>

         {Items}
         </div>
         </div>
}




const mapStateToProp = (state) => {
  return  { items: state}
}
export default connect(mapStateToProp, {addproduct: Add})(ItemList);
