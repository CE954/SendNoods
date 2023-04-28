import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = "reviews/receiveReviews";
const RECEIVE_REVIEW = "reviews/receiveReview";
const REMOVE_REVIEW = "reviews/removeReview";

const receiveReviews = payload => ({
    type: RECEIVE_REVIEWS,
    payload
});

const receiveReview = payload => ({
    type: RECEIVE_REVIEW,
    payload
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
});

export const getReviews = state => (
    state.reviews ? Object.values(state.reviews) : []
);

export const getReview = reviewId => state => (
    state.reviews ? state.reviews[reviewId] : null
);

export const fetchReviews = productId => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}/reviews`);
    const reviews = await res.json();
    dispatch(receiveReviews(reviews));
}

export const addReview = review => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(review)
    });
    const newReview = await res.json();
    dispatch(receiveReview(newReview));
}

export const updateReview = data => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${data.review.id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const updatedReview = await res.json();
    dispatch(receiveReview(updatedReview));
}

export const deleteReview = reviewId => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    });
    const deletedReview = await res.json();
    dispatch(removeReview(deletedReview.id));
}

const reviewsReducer = (state = {}, action) => {
    let newState; 
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return action.payload.reviews;
        case RECEIVE_REVIEW:
            newState = {...state, ...action.payload.review};
            return newState;
        case REMOVE_REVIEW:
            newState = {...state};
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;