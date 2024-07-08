import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({

    name: 'cart',

    initialState: [],

    reducers: {

        addToCart: (state, actions) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const isAvailable = state.find(
                (value) => value.name == actions.payload.name
            );
            isAvailable ?
                actions.payload['quantity'] += 1 :
                state.push({ ...actions.payload, quantity: 1 });
        },
        removeFromCart: (state, actions) => {
            const newList = state.filter((value) => value.name != actions.payload.name);
            return (state = newList)
        },
        incrementQuantity: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.name == actions.payload.name
            );
            isAvailable && isAvailable.quantity++;
        },
        decrementQuantity: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.name == actions.payload.name
            );
            isAvailable.quantity > 1 ? isAvailable.quantity-- : isAvailable;
        },

    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer