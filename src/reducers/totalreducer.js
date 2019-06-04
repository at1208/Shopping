export const TotalReducer = (initialState=[], action) =>{
  if(action.type==='TOTAL'){
    return action.payload
  }
  return initialState;
}
