import "./index.scss"
import  { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import smoky from '../../assets/smoky-noods.jpg';
import spicy from '../../assets/spicy-noods.png';
import yellow from '../../assets/yellow-curry.png';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react';

const Splash3 = () => {
    const history = useHistory();
    const wrapper = useRef();

    return (
        <Swiper className='nood-swiper' id='nood-outer-container'
            spaceBetween={50}
            slidesPerView={2.5}
            loop={true}
            allowSlidePrev={true}
            allowSlideNext={true}
            slideToClickedSlide={true}
            centeredSlides={true}
            allowTouchMove={false}
            ref={wrapper}
        >
            <SwiperSlide className='nood-inner-wrapper' onClick={() => {
                wrapper.current.style.backgroundColor = 'rgb(255, 227, 148)'
            }}>
                <div className='nood' id='yellow'>
                    <div className='nood-image' >
                        <img src={yellow} alt='yellow-curry'/> 
                    </div>
                    <div className='nood-header'>YELLOW CURRY</div>
                    <button onClick={() => {history.push('/products/4')}}>TRY NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='nood-inner-wrapper' onClick={() => {
                wrapper.current.style.backgroundColor = 'rgb(254, 184, 175)'
            }}>
                <div className='nood' id='spicy' >
                    <div className='nood-image'>
                        <img src={spicy} alt='spicy' />
                    </div>
                    <div className='nood-header'>SPICY KIMCHI</div>
                    <button onClick={() => { history.push('/products/5') }}>TRY NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='nood-inner-wrapper' onClick={() => {
                wrapper.current.style.backgroundColor = 'rgb(189, 218, 189)'
            }}>
                <div className='nood' id='smoky' >
                    <div className='nood-image'>
                        <img src={smoky} alt='smoky' />
                    </div>
                    <div className='nood-header'>SMOKY MUSHROOM & MISO</div>
                    <button onClick={() => { history.push('/products/3') }}>TRY NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='nood-inner-wrapper' onClick={() => {
                wrapper.current.style.backgroundColor = 'rgb(255, 227, 148)'
            }}>
                <div className='nood' id='yellow'>
                    <div className='nood-image'>
                        <img src={yellow} alt='yellow-curry' />
                    </div>
                    <div className='nood-header'>YELLOW CURRY</div>
                    <button onClick={() => { history.push('/products/4') }}>TRY NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='nood-inner-wrapper' onClick={() => {
                wrapper.current.style.backgroundColor = 'rgb(254, 184, 175)'
            }}>
                <div className='nood' id='spicy'>
                    <div className='nood-image'>
                        <img src={spicy} alt='spicy' />
                    </div>
                    <div className='nood-header'>SPICY KIMCHI</div>
                    <button onClick={() => { history.push('/products/5') }}>TRY NOW</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='nood-inner-wrapper' onClick={() => {
                wrapper.current.style.backgroundColor = 'rgb(189, 218, 189)'
            }}>
                <div className='nood' id='smoky'>
                    <div className='nood-image'>
                        <img src={smoky} alt='smoky' />
                    </div>
                    <div className='nood-header'>SMOKY MUSHROOM & MISO</div>
                    <button onClick={() => { history.push('/products/3') }}>TRY NOW</button>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Splash3;