import React from 'react';
import './itemlist.css';
import Item from './common/item'
import { connect } from 'react-redux'

const ItemList = (props) => {
 
  return <div className='shadow container a1 card '>
           <div className='row'>
           <div className='row col-lg-8'>
               <div className='a2 col-lg-4'>
                    <Item price={props.macbook[0].price} name={props.macbook[0].name} path={props.macbook[0].imgpath}/>
              </div>
              <div  className='a2 col-lg-4'>
                    <Item price={props.macbook[1].price} name={props.macbook[1].name} path={props.macbook[1].imgpath}/>
              </div>

              <div  className='a2 col-lg-4'>
                    <Item price={props.macbook[2].price} name={props.macbook[2].name} path={props.macbook[2].imgpath}/>
              </div>
              <div  className='a2 col-lg-4'>
                    <Item price={props.macbook[3].price} name={props.macbook[3].name} path={props.macbook[3].imgpath}/>
              </div>

          </div>
              <div className=' a3 card float-right col-xm-3 text-center shadow'>
              <h1>CheckOut</h1>
              </div>
          </div>

        </div>
}

const mapStateToProp = (state) => {
  return {
    macbook: state.Products
  }
}
export default connect(mapStateToProp)(ItemList)
