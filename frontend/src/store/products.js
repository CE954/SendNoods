import csrfFetch from "./csrf";

const SET_PRODUCTS = "products/SET_PRODUCTS";
const SET_PRODUCT = "products/SET_PRODUCT";

export const setProducts = payload => ({
    type: SET_PRODUCTS,
    payload
});

export const setProduct = payload => ({
    type: SET_PRODUCT,
    payload
});

export const getProducts = state => {
    return state.products ? Object.values(state.products) : [];
}

export const getProduct = productId => state => {
    return state.products ? state.products[productId] : null;
}

export const fetchProducts = () => async dispatch => {
    const res = await csrfFetch('/api/products');
    const products = await res.json();
    dispatch(setProducts(products));
}

export const fetchProduct = productId => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}`);
    const product = await res.json();
    dispatch(setProduct(product));
}

const productsReducer = (state = {}, action) => {
    let newState;

    switch (action.type) {
        case SET_PRODUCTS:
            return action.payload.products;
        case SET_PRODUCT:
            newState = { ...state, ...action.payload.product };
            return newState;
        default:
            return state;
    }
}

export default productsReducer;