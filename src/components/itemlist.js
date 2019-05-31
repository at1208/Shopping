import React from 'react';
import './itemlist.css';
import Item from './common/item'

const ItemList = () => {
  return <div className='shadow  container a1 card'>
           <div className='row col-sm-6'>
               <div className='a2'>
                    <Item />
              </div>
              <div  className='a2'>
                    <Item />
              </div>
              <div  className='a2'>
                    <Item />
              </div>
              <div  className='a2'>
                    <Item />
              </div>
          </div>
        </div>
}
export default ItemList
