export const DeleteReducer = (initialState=[], action) => {
  if(action.type ==='DELETE PRODUCT'){
    return initialState = initialState.filter(item => item !== action.payload)
  }
  return initialState
}
