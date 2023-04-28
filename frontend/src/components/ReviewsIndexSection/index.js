import './index.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews, fetchReviews, addReview, updateReview, deleteReview } from '../../store/reviews';

const ReviewsIndexSection = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const reviews = useSelector(getReviews);


    useEffect(() => {
        dispatch(fetchReviews(productId));
    }, [dispatch, productId])

}

export default ReviewsIndexSection;