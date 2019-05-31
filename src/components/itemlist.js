import React from 'react';
import './itemlist.css';
import Item from './common/item'

const ItemList = () => {
  return <div className='shadow container a1 card '>
           <div className='row'>
           <div className='row col-lg-8'>
               <div className='a2 col-lg-4'>
                    <Item price='₹73,999.00' name='Macboook air' path='macbookair.jpg'/>
              </div>
              <div  className='a2 col-lg-4'>
                    <Item price='₹106,990.00' name='Macbook air gold' path='macbookairgold.jpg'/>
              </div>

              <div  className='a2 col-lg-4'>
                    <Item price='₹129,990.00' name='Macbook air Ratina Display' path='macbookairnew.jpg'/>
              </div>
              <div  className='a2 col-lg-4'>
                    <Item price='₹132,990.00' name='Macbook pro' path='macbookpro.jpg'/>
              </div>

          </div>
              <div className=' a3 card float-right col-xm-3 text-center shadow'>
              <h1>CheckOut</h1>
              </div>
          </div>

        </div>
}
export default ItemList
