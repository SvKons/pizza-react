import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCartFromLS } from '../../utils/getCartFromLS';
import { calTotalPrice } from '../../utils/calTotalPrice';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({ ...action.payload, count: 1 });
            }
            state.totalPrice = calTotalPrice(state.items);
        },
        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        clearItem(state) {
            state.items = [];
            state.totalPrice = 0;
        },
    },
});

export const { addItem, minusItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
