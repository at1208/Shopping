export const Add = (product) => {
  return {
    type:'ADD',
    payload: product
  }
}

export const Subtract = (product) =>{
  return {
    type:'SUBTRACT',
    payload: product
  }
}
