// Import createStore and combineReducers here.
import { createStore, combineReducers } from 'redux';

// Import the slice reducers here.
import { inventoryReducer } from '../features/inventory/inventorySlice.js';
import { cartReducer } from '../features/cart/cartSlice.js';
import { currencyFilterReducer } from '../features/currencyFilter/currencyFilterSlice.js';

// Create and export the store here.
export const store = createStore(combineReducers({
    inventory: inventoryReducer,
    cart: cartReducer,
    currency: currencyFilterReducer
}));