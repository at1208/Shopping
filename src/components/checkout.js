import React, { Component } from 'react';
import './checkout.css'
import { connect } from 'react-redux'

class Checkout extends Component {

 componentDidMount(){
 
}

render(){

 console.log(this.props)
  return <div className='b1 text-center container card shadow float-left'>
       <h1>Checkout</h1>
           <div className='container'>
          <p>Total Item   {this.props.checkout.length}</p>

           </div>
         </div>
  }}

const mapStateToProp = (state) => {

  return {
      checkout: state.AddedProduct
  }
}

export default connect(mapStateToProp)(Checkout);
