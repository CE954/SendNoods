import './index.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addReview } from '../../store/reviews';
import { updateReview } from '../../store/reviews';
import { GrFormClose } from 'react-icons/gr';
import { BsStarFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const ReviewFormModal = ({setCurrentReview, currentReview}) => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const user = useSelector(state => state.session.user);

    const [isNewReview, setIsNewReview] = useState(true);
    const [body, setBody] = useState(currentReview ? currentReview.body : '');
    const [rating, setRating] = useState(currentReview ? currentReview.rating : 0);
    const [activeRating, setActiveRating] = useState(currentReview ? currentReview.rating : 0);

    useEffect(() => {
        if (Object.keys(currentReview).length !== 0) {
            setRating(currentReview.rating);
            setActiveRating(currentReview.rating);
            setIsNewReview(false);
        } else {
            setIsNewReview(true);
        }
    }, [currentReview]);

    useEffect(() => {
        if (currentReview) {
            setBody(currentReview.body);
        } else {
            setBody('');
        }
    }, [currentReview]);

    const starRating = () => {
        const hoverRating = activeRating || rating;

        const handleHover = (hoverRating) => {
            setActiveRating(hoverRating);
        };

        const handleClick = (clickedRating) => {
            setRating(clickedRating);
            setActiveRating(clickedRating);
        };

        return (
            <>
                {[1, 2, 3, 4, 5].map((index) => {
                    return (
                        <BsStarFill
                            key={index}
                            id='form-star'
                            className={
                                hoverRating >= index ? "star" : "star-empty"
                            }
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                            onClick={() => handleClick(index)}
                        />
                    );
                })}
            </>
        );
    };
    
    const closeReviewModal = () => {
        const form = document.getElementById('review-background');
        form.style.display = 'none';
    };

    const resetForm = () => {
        setBody('');
        setRating(0);
        setActiveRating(0);
        setIsNewReview(true);
        setCurrentReview({});
    }

    const submitReview = (e) => {
        e.preventDefault();

        const newReview = {
            review: {
                body,
                rating,
                productId,
                userId: user.id
            }
        };

        if (isNewReview) {
            dispatch(addReview(newReview));
        } else {
            const updatedReview = {
                review: {
                    ...currentReview,
                    body,
                    rating,
                    productId,
                    userId: user.id
                }
            };
            dispatch(updateReview(updatedReview));
        }

        resetForm();
        closeReviewModal();
    };

    
    return (
        <div id='review-background'> 
            <div className='review-form-modal'>
                    <GrFormClose id='close-review-form' onClick={closeReviewModal}/>
                <div id='review-header'>WRITE YOUR REVIEW</div>
                <div id='review-form'>
                    <label id='review-stars'>RATING:
                        <br/>
                        {starRating()}
                    </label>
                    <label id='review-form-body'>REVIEW:
                        <textarea id='review-body-input' value={ body } rows="8" cols="20" onChange={e => { setBody(e.target.value) }}>
                        </textarea>
                    </label>
                </div>
                <button id="submit-review" onClick={submitReview}>SUBMIT</button>
            </div>
        </div>
    )
}

export default ReviewFormModal;