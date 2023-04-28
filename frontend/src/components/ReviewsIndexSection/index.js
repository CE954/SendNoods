import './index.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews, fetchReviews, addReview, updateReview, deleteReview } from '../../store/reviews';
import ReviewsIndexItem from '../ReviewsIndexItem';

const ReviewsIndexSection = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const reviews = useSelector(getReviews);
    const user = useSelector(state => state.session.user);
    
    useEffect(() => {
        dispatch(fetchReviews(productId));
    }, [dispatch, productId])

    const reviewMap = () => {
        if (reviews.length > 0) {
            return reviews.map(review => (
                <ReviewsIndexItem key={review.id} review={review} />
            )
        )} else {
            return <div className='no-reviews'>No reviews yet!</div>
        }
    }

}

export default ReviewsIndexSection;