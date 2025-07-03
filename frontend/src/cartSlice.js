import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast'

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if(existingIndex >= 0) {
        state.cartItems[existingIndex].cartQuantity += 1
      } else {
        const newCartItem = {...action.payload, cartQuantity: 1}
        state.cartItems.push(newCartItem)
      } 
      toast.success("Item added")
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(product => product.id !== action.payload)
      toast.success("Item removed")
    },
    decreaseCartItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
      if(state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1
      } else {
        return
      }
    },
    getTotals: (state, action) => {
      let { subTotal, totalQuantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem
        const totalPrice = price * cartQuantity

        cartTotal.subTotal += totalPrice
        cartTotal.totalQuantity += cartQuantity

        return cartTotal
      }, {
        subTotal: 0,
        totalQuantity: 0
      })

      state.cartTotalAmount = subTotal
      state.cartTotalQuantity = totalQuantity
    }
  }
})

export const { addToCart, removeFromCart, decreaseCartItem, getTotals } = cartSlice.actions
export default cartSlice.reducer