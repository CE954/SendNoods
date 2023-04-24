import "./index.scss"
import press1 from '../../assets/press1.png';
import press2 from '../../assets/press2.png';
import press3 from '../../assets/press3.png';
import press4 from '../../assets/press4.png';
import press5 from '../../assets/press5.png';
import press6 from '../../assets/press6.png';

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
                    </div>
                </div>
            </div>
        </>
    )

}

export default Splash2;