import './index.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReviews, fetchReviews, addReview, updateReview, deleteReview } from '../../store/reviews';
import ReviewsIndexItem from '../ReviewsIndexItem';
import ReviewFormModal from '../ReviewFormModal';
import { useHistory } from 'react-router-dom';

const ReviewsIndexSection = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const reviews = useSelector(getReviews);
    const user = useSelector(state => state.session.user);
    const [currentReview, setCurrentReview] = useState({});
    const history = useHistory();

    
    useEffect(() => {
        dispatch(fetchReviews(productId));
    }, [dispatch, productId])

    useEffect(() => {
        dispatch(fetchReviews(productId));
    }, [reviews.length])

    const openEdit = (e) => {
        if (!user) {
            history.push('/login');
        } else {
            const form = document.getElementById('review-background');
            form.style.display = 'flex';
        }
    }

    const reviewMap = () => {
        if (reviews.length > 0) {
            return reviews.map(review => (
                <ReviewsIndexItem key={review.id} review={review} openEdit={openEdit} setCurrentReview={setCurrentReview} currentReview={currentReview}/>
            )
        )} else {
            return <div id='no-reviews'>No reviews yet!</div>
        }
    }

    return (
        <div className='reviews-index'> 
            <div id='reviews-header'>REVIEWS</div>
            <div id='add-review-container'> 
                <button id='add-review' onClick={openEdit}>WRITE A REVIEW</button> 
            </div>
            <div id='reviews-items'>
                {reviewMap()}
            </div>
            <ReviewFormModal currentReview={currentReview} setCurrentReview={setCurrentReview}/>
        </div>
    )

}

export default ReviewsIndexSection;