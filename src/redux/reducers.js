const initialCart = {
  data: []
}

const CART = (state = initialCart, action) => {
  switch (action.type) {
    case "ADD_TO_INITIALCART":
      const index = state.data?.findIndex((e) => e.id === action.data.id)
      if (index > -1) {
        state.data.splice(index, 1)
        return {
          data: state.data
        }
      }
      return {
        data: [...state.data, action.data]
      }
    default:
      return {
        data: state.data
      }
  }
}
export {
  CART
}