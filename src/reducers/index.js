import { combineReducers } from 'redux'

const productReducer = () => {
  return ([
    {id:0,name :'MacBook Air', price:73999.00, imgpath:'macbookair.jpg'},
    {id:1,name: 'MacBook Air Gold', price:106990.00, imgpath:'macbookairgold.jpg'},
    {id:2,name:'MacBook Air Ratina', price:129990.00, imgpath:'macbookairnew.jpg'},
    {id:3,name:'MacBook Pro', price:132990.00,imgpath:'macbookpro.jpg'}])
}

const AddReducer = (initialState=[], action) => {
  if(action.type === 'ADD PRODUCT'){
    return [...initialState, action.payload]
  }
return initialState
}

const DeleteReducer = (initialState=[], action) => {
  if(action.type ==='DELETE PRODUCT'){
    return initialState = initialState.filter(item => item !== action.payload)
  }
  return initialState
}

const TotalReducer = (initialState=[], action) =>{
  if(action.type==='TOTAL'){
    return action.payload
  }
  return initialState;
}


export default combineReducers({
     Products: productReducer,
     AddedProduct: AddReducer,
     TotalAmount: TotalReducer,
     DeletedProduct: DeleteReducer
})
