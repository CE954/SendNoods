import "./index.scss"
import press1 from '../../assets/press1.png';
import press2 from '../../assets/press2.png';
import press3 from '../../assets/press3.png';
import press4 from '../../assets/press4.png';
import press5 from '../../assets/press5.png';
import press6 from '../../assets/press6.png';
import feature1 from '../../assets/feature1.jpg';
import feature2 from '../../assets/feature2.jpg';
import feature3 from '../../assets/feature3.jpg';
import feature4 from '../../assets/feature4.jpg';
import feature5 from '../../assets/feature5.jpg';
import feature6 from '../../assets/feature6.jpg';

const Splash2 = () => {

    function pressMap() {
        const press = [press1, press2, press3, press4, press5, press6];
        const arr = [];
        for (let i = 0; i < press.length; i++) {
            let div = <img key={i} src={press[i]} alt="press-logo" />
            arr.push(div);
        }
        return arr;
    }

    return (
        <>
            <div className='press-wrapper'>
                <div className='press-swiper'>
                    <div className='press-images'>
                        {pressMap()}  
                        {pressMap()} 
                        {pressMap()} 
                    </div>
                </div>
            </div>
            <div className='moving-text'>
                <svg className="text-path" viewBox="0 -20 425 300">
                    <path id="curve" d="M0,0C76.72,0,76.72,49.11,153.43,49.11S230.15,0,306.87,0,383.58,49.11,460.3,49.11,537,0,613.74,0" />
                    <text x="-500">
                        <textPath xlinkHref="#curve">
                            <animate attributeName="startOffset" dur="13s" values="-500;0" repeatCount="indefinite"></animate>
                            NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ NOT A NORMAL NOODLE ~ 
                        </textPath>
                    </text>
                </svg>
            </div>
            <div className="feature-grid">
                <div className="feature">
                        <img src={feature1} alt="feature1" />
                    <h1>
                        NUTRITIONALY
                        <br/>
                        COMPLETE
                    </h1>
                    <p>
                        Balanced in protein, fibre, carbs, vitamins & minerals
                    </p>
                </div>
                <div className="feature">
                        <img src={feature2} alt="feature2" />
                    <h1>
                        SUPER
                        <br />
                        TASTY
                    </h1>
                    <p>
                        Fresh flavours created by chef Carl Clarke
                    </p>
                </div>
                <div className="feature">
                        <img src={feature3} alt="feature3" />
                    <h1>
                        PLANT
                        <br />
                        BASED
                    </h1>
                    <p>
                        We are 100% vegan but you don't have to be
                    </p>
                </div>
                <div className="feature">
                        <img src={feature4} alt="feature4" />
                    <h1>
                        SUPER
                        <br />
                        CONVENIENT
                    </h1>
                    <p>
                        Just put the kettle on and add boiling water
                    </p>
                </div>
                <div className="feature">
                        <img src={feature5} alt="feature5" />
                    <h1>
                        HEALTHY
                        <br />
                        PLANET
                    </h1>
                    <p>
                        Sustainable ingredients and recyclable packaging
                    </p>
                </div>
                <div className="feature">
                        <img src={feature6} alt="feature6" />
                    <h1>
                        GOOD
                        <br />
                        VALUE
                    </h1>
                    <p>
                        Complete nutrition for just $5.00 per meal
                    </p>
                </div>
            </div>
        </>
    )

}

export default Splash2;