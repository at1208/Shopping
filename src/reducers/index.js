import { combineReducers } from 'redux'

const productReducer = () => {
  return ([
    {id:0,name :'Macbook air', price:'₹73,999.00', imgpath:'macbookair.jpg'},
    {id:1,name: 'Macbook air gold', price:'₹106,990.00', imgpath:'macbookairgold.jpg'},
    {id:2,name:'Macbook air Ratina', price:'₹129,990.00', imgpath:'macbookairnew.jpg'},
    {id:3,name:'Macbook pro', price:'₹132,990.00',imgpath:'macbookpro.jpg'}])
}

const AddReducer = (initialState=[], action) => {
  if(action.type === 'ADD PRODUCT'){

    return [...initialState, action.payload]
  }
return initialState
}
export default combineReducers({
    product: productReducer,
     AddedProduct: AddReducer
})
