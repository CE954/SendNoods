import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import "swiper/css/pagination";
import 'swiper/css';

const Splash4 = () => {

    return (
        <>
        <h1>DON'T JUST TAKE OUR WORD FOR IT </h1>
        <Swiper
            className='reviews-swiper'
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide className='review-slide'>
                <div className='review-text'>
                    <p>"THESE ARE SIMPLY THE BEST NOODS I'VE EVER SEEN OR EATEN."</p>
                    <h2>GORDON RAMSAY - CELEBRITY CHEF</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='review-slide'>
                <div className='review-text'>
                    <p>"THESE ARE THE GREATEST NOODLES THE WORLD HAS EVER SEEN. 
                        TRULY THE GREATEST. TRUST ME, I KNOW WHAT GOOD NOODS ARE."
                    </p>
                    <h2>DONALD J. TRUMP - FORMER PRESIDENT</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='review-slide'>
                <div className='review-text'>
                    <p>"IF I HAD TO SPECIFY ONE FOOD THAT CAN CHANGE THE TRAJECTORY 
                        OF THE HUMAN RACE, IT WOULD BE THESE NOODLES RIGHT HERE."
                    </p>
                    <h2>ELON MUSK - CEO OF TESLA</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='review-slide'>
                <div className='review-text'>
                    <p>"I'M PLEASED TO SAY THEY WERE PRETTY DAMN GOOD"</p>
                    <h2>MOB KITCHEN</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='review-slide'>
                <div className='review-text'>
                    <p>"SEND NOODS ARE TOTALLY DELICIOUS AND HAVE GOT EXACTLY WHAT 
                        YOU NEED."
                    </p>
                    <h2>GQ</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide className='review-slide'>
                <div className='review-text'>
                    <p>"THESE ARE DELICIOUS BOWLS OF GOODNESS."
                    </p>
                    <h2>LISA MARKWELL - SUNDAY TIMES</h2>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
    )
}

export default Splash4;
