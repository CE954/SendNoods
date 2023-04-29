import './index.scss';
import { BsStarFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../../store/reviews';

const ReviewsIndexItem = ({ review, openEdit, setCurrentReview, currentReview }) => {
    const { body, id, name, productId, rating, userId } = review;
    const user = useSelector(state => state.session.user);
    const [removed, setRemoved] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews(productId));
    }, [removed])

    useEffect(() => {
        if (user && user.id === userId) {
            setCurrentReview(review);
        }
    }, [review, setCurrentReview, user, userId]);

    const handleDeleteReview = (e) => {
        setRemoved(true);
        return dispatch(deleteReview(id));
    }
    
    return (
        <div className='review-item'>
            <div id='star-rating'>
                <BsStarFill className={rating >= 1 ? 'star' : 'star-empty'} />
                <BsStarFill className={rating >= 2 ? 'star' : 'star-empty'} />
                <BsStarFill className={rating >= 3 ? 'star' : 'star-empty'} />
                <BsStarFill className={rating >= 4 ? 'star' : 'star-empty'} />
                <BsStarFill className={rating >= 5 ? 'star' : 'star-empty'} />
            </div>
            <div id='review-body'>{body}</div>
            <div id='review-user'>{name}</div>
            <div className='review-buttons'>
                { user && user.id === userId ? <FaEdit className='edit-review' onClick={openEdit} /> : null}
                { user && user.id === userId ? <AiFillDelete className='delete-review' onClick={handleDeleteReview}/> : null}
            </div>
        </div>
    )
}

export default ReviewsIndexItem;