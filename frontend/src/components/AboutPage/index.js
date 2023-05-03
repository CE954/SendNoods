import './index.scss';
import { useEffect } from 'react';
import carl from '../../assets/carl.jpg';
import mypic from '../../assets/my-pic.jpg';
import planet from '../../assets/planet.png';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
        <div className='about-carl'>
            <div id='carl-pic'>
                <img src={carl} alt='carl'/>
            </div>
            <div id='carl-info'>
                <h1>PEACE, LOVE AND NOODLES.</h1>
                <div id='carl-text'>
                    We hope these little pots of noodles put a big smile on your face. 
                    It's been an incredible journey so far and we are extremely grateful 
                    to everyone for supporting us in these early days.
                    <br/>
                    <br/>
                    So thank you for believing in our dream to make super healthy, 
                    plant-based and planet friendly instant noodles like never before. 
                    This is just the start and we won't get everything right, so please 
                    help us get better.
                    <br/>
                    <br/>
                    Carl & Team Noodz 
                </div>
            </div>
        </div>
        <div className='about-me'>
            <div id='me-info'>
                <h1>BEHIND THE NOODS</h1>
                <div id='me-text'>
                    Big thank you to <a href="https://futurenoodles.com/" target='_blank'> Future Noodles </a> 
                    for inspiring this website clone. Christian here, fellow nood lover and 
                    full-stack software engineer with experience in JavaScript, React, Redux,
                    Ruby on Rails, PostgreSQL, and other technologies. 
                    <br/>
                    <br/>
                    My background in Kinesiology has given me a unique perspective on the 
                    intersection of technology and health and fitness. I am passionate about 
                    using my skills to improve people's lives and web accessibility.
                    <br/>
                    <br/>
                    Christian Espinosa
                </div>
            </div>
            <div id='me-pic'>
                <img src={mypic} alt='me'/>
            </div>
        </div>
        <div className='our-mission'>
            <h1>OUR MISSION</h1>
            <div>
                WE'RE MAKING OUR PLANET HEALTHIER ONE NOODLE AT A TIME.
            </div>
            <img src={planet} alt='planet'/>
        </div>
        </>
    )
}

export default AboutPage;