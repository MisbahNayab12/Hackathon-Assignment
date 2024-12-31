import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image'

interface CartItemState {
  name: string;
  id: number;
  imagePath: StaticImageData;
  price: number;
  description: string
  quantity: number
}

const initialState: CartItemState[] = []

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart:(state, action:PayloadAction<CartItemState[]>) => {
            return action.payload
        }
    }
})

export const {updateCart} = cart.actions
export default cart.reducer

// import { StaticImageData } from 'next/image';

// // Cart Item State Interface
// interface CartItemState {
//   name: string;
//   id: number;
//   imagePath: StaticImageData;
//   price: number;
//   description: string;
//   quantity: number;
// }

// // Initial State
// const initialState: CartItemState[] = [];

// // Action Types
// const UPDATE_CART = 'cart/updateCart';

// // Action Creator
// export const updateCart = (cartItems: CartItemState[]) => ({
//   type: UPDATE_CART,
//   payload: cartItems,
// });

// // Reducer
// const cartReducer = (state = initialState, action: any): CartItemState[] => {
//   switch (action.type) {
//     case UPDATE_CART:
//       return action.payload; // Update the state with the new cart items
//     default:
//       return state; // Return the current state if the action is not recognized
//   }
// };

// export default cartReducer;
