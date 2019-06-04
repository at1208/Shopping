import React from 'react';
import './header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Header = (props) => {
  return <div className='text-center container-fluid jumbotron'>
  <Link to='/checkout'><button className=' w2 float-right btn btn-md '>Checkout Cart <span  className='badge badge-light w1 '>{props.cart.length}</span></button></Link>
          <h1>SHOP NOW </h1>
        </div>
}

const mapStateToProp = (state) => {
 return {
   cart: state.AddedProduct
 }
}
export default connect(mapStateToProp)(Header);
