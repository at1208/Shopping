import React from 'react';
import './itemlist.css'
import { connect } from 'react-redux'
import { Add } from '../actions/index'

const ItemList = (props) => {

 const Items = props.StateToPropData.map((e) => {
   return <div className='a2 card shadow text-center ' key={e.id}>
          <img className= 'a3' src={e.imgpath} alt=''  />
          <div className='card-body'>
          <h6 className='card-title'>{e.name}</h6>
          <h6 className='card-text'>₹{e.price}</h6>
           <button className='float-left btn-sm btn-outline-info'>-</button>
          <button onClick={() => props.addaction(e)} className=' btn btn-sm btn-outline-info'>Buy Now</button>
         <button className='float-right btn-sm btn-outline-info'>+</button>
           </div>
          </div>
 })



  return <div className='a1 container card shadow'>
          <div className='row justify-content-center col-xm-1 '>
         {Items}
         </div>

         </div>
}



const mapStateToProp = (state) => {
  return  { StateToPropData: state.Products}
}
export default connect(mapStateToProp, {addaction: Add})(ItemList);
