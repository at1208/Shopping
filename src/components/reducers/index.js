import { combineReducers } from 'redux';

const ProductReducer = () => {
  return([
    {name :'Macbook air', price:'₹73,999.00', imgpath:'macbookair.jpg'},
    {name: 'Macbook air gold', price:'₹106,990.00', imgpath:'macbookairgold.jpg'},
    {name:'Macbook air Ratina Display', price:'₹129,990.00', imgpath:'macbookairnew.jpg'},
    {name:'Macbook pro', price:'₹132,990.00',imgpath:'macbookpro.jpg'}
  ])
}


 export default combineReducers({
   Products: ProductReducer
 })
