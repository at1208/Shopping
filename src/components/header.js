import React from 'react';
import './header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = (props) => {
  const ShowCheckout = () => {
    if(props.cart.length>=1){
      return <div className='g3 float-right'>
      <Link to='/checkout'><button className=' w2 float-right btn btn-md '>Checkout Cart <span  className='badge badge-light w1 '>{props.cart.length}</span></button></Link>
            </div>
    }
 return null;
  }
  return <div className='text-center container-fluid jumbotron'>
          {ShowCheckout()}
          <h1 className='g2 row'>SHOP NOW </h1>
        </div>
}

const mapStateToProp = (state) => {
 return {
   cart: state.AddedProduct
 }
}
export default connect(mapStateToProp)(Header);
