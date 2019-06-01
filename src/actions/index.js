export const Add = (product) => {
  return {
    type: 'ADD PRODUCT',
    payload: product
  }
}
export const Delete = (product) => {
  return {
    type: 'DELETE PRODUCT',
    payload: product
  }
}
