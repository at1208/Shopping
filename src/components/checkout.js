import React, { Component } from 'react';
import './checkout.css'
import { connect } from 'react-redux'
import { Delete } from '../actions/index'

import { createStore } from 'redux'
import reducers from '../reducers/index'

const store = createStore(reducers);


class Checkout extends Component {

render(){
 const ItemListName = () => {
   const ItemList = this.props.checkout.map((item) => {
     return  <div key={item.id} className='b7 card shadow row justify-content-center'>
           <h1 className='b2 ' >{item.name}<button onClick={(item) => {this.props.Deleted(item)}} className='b5 btn-info float-right '>Delete</button></h1>
            </div>

   })
   return ItemList;

 }

 // const TotalPrice = () => {
 //   const totalamount = this.props.checkout.map((item) =>{
 //     return  <div>
 //            <h1>   {item.price}</h1>
 //           </div>
 //   })
 //   return totalamount;
 // }

 console.log(this.props)
 console.log(store.getState())
  return <div className='b1 text-center container card shadow'>
            <div className=''>
             <h1>Checkout</h1>
            </div>

           <div className='container-fluid'>
          <div className='b4'>Total Items <span className='badge badge-light '>{this.props.checkout.length }</span></div>
          <br />
          <div className='text-center'>
            {ItemListName()}

          </div>

           </div>
         </div>
  }}

const mapStateToProp = (state) => {

  return {
      checkout: state.AddedProduct
  }
}

export default connect(mapStateToProp, { Deleted: Delete })(Checkout);
