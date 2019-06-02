import React, { Component } from 'react';
import './checkout.css'
import { connect } from 'react-redux'
import { Delete ,TotalAmount} from '../actions/index'



class Checkout extends Component {

render(){
  const Total = () => {
    const Totalprice = this.props.checkout.map((element) => {
      return element.price
    })
    const money = Totalprice.reduce(((accumulator,a,) => {return accumulator+a}), 0)
    return (money)
  }

 this.props.totalaction(Total())

 const CheckOutItem = () => {
   const Items = this.props.checkout.map((item) => {
     return  <div key={item.id} className='b7 card shadow row justify-content-center'>
           <h1 className='b2 '>{item.name}<button onClick={() => {return this.props.deleteaction(item)}}className='b5 btn-info float-right '>Delete</button></h1>

            </div>

   })
   return Items;

 }
console.log(this.props)
   return <div className='b1 text-center container card shadow'>
            <div className=''>
             <h1>Checkout</h1>
            </div>

           <div className='container-fluid row' >
          <div className='b4 btn-sm'>Total Items <span className='badge badge-light '>{this.props.checkout.length }</span>
          </div>
          <button className='b8 btn-primary btn-xm'>Pay<span className='badge badge-light '>₹{Total() }</span>
          </button>

          </div>
          <br />
          <div className='text-center'>
            {CheckOutItem()}

          </div>


         </div>
  }}

const mapStateToProp = (state) => {

  return {
      checkout: state.AddedProduct,
      removedout: state.DeletedProduct,
      totalMoney: state.TotalAmount




  }
}

export default connect(mapStateToProp, { deleteaction: Delete, totalaction:TotalAmount })(Checkout);
