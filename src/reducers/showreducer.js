
export const ShowReducer = (initialState=0, action) =>{
  if(action.type ==='SHOW CHECKOUT'){
    return   initialState= initialState + action.payload
  }
  return initialState;
}
