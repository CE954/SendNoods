import csrfFetch from "./csrf";

const RECEIVE_CART_ITEMS = "cartItems/receiveCartItems";
const RECEIVE_CART_ITEM = "cartItems/receiveCartItem";
const REMOVE_CART_ITEM = "cartItems/removeCartItem";

const receiveCartItems = payload => ({
    type: RECEIVE_CART_ITEMS,
    payload
});

const receiveCartItem = payload => ({
    type: RECEIVE_CART_ITEM,
    payload
});

const removeCartItem = cartItemId => ({
    type: REMOVE_CART_ITEM,
    cartItemId
});

export const getCartItems = state => (
    state.cartItems ? Object.values(state.cartItems) : []
);

export const getCartItem = cartItemId => state => (
    state.cartItems ? state.cartItems[cartItemId] : null
);

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch('/api/cart_items');
    const cartItems = await res.json();
    dispatch(receiveCartItems(cartItems));
}

export const addCartItem = cartItem => async dispatch => {
    const res = await csrfFetch('/api/cart_items', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(cartItem)
    });
    const newCartItem = await res.json();
    dispatch(receiveCartItem(newCartItem));
}

export const updateCartItem = data => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${data.cartItem.id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const updatedCartItem = await res.json();
    dispatch(receiveCartItem(updatedCartItem));
}

export const deleteCartItem = (cartItemId, productId) => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    });
    dispatch(removeCartItem(productId));
}

const cartItemsReducer = (state = {}, action) => {
    let newState; 
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return action.payload.cartItems;
        case RECEIVE_CART_ITEM:
            newState = { ...state, ...action.payload.cartItem};
            return newState;
        case REMOVE_CART_ITEM:
            newState = { ...state };
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    }
} 

export default cartItemsReducer;