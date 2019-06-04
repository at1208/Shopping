import { combineReducers } from 'redux'
import { productReducer } from './productreducer'
import { AddReducer } from './addreducer'
import { DeleteReducer } from './deletereducer'
import { TotalReducer } from './totalreducer'
import { ShowReducer } from './showreducer'


export default combineReducers({
     Products: productReducer,
     AddedProduct: AddReducer,
     TotalAmount: TotalReducer,
     DeletedProduct: DeleteReducer,
 
})
