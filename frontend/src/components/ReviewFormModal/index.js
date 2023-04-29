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

    const [hover, setHover] = useState(0);
    const [body, setBody] = useState(currentReview.body);
    const [rating, setRating] = useState(0);
 
    console.log(currentReview);

    useEffect(() => {
        setBody(currentReview.body);
    }, [currentReview.body]);

    const closeReviewModal = () => {
        const form = document.getElementById('review-background');
        form.style.display = 'none';
    }

    const starRating = () => {

        return (
            <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill /> 
            </>
        )
    }

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
                <button id="submit-review" >SUBMIT</button>
            </div>
        </div>
    )
}

export default ReviewFormModal;