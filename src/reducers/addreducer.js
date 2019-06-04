export const AddReducer = (initialState=[], action) => {
  if(action.type === 'ADD PRODUCT'){
    return [...initialState, action.payload]
  }
return initialState
}
