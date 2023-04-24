import './index.scss';
import oglogo from '../../assets/oglogo.png';

const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-left'>
                    <a href="https://github.com/CE954/SendNoods" target="_blank">
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/christian-espinosa-bb0b47187" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <p>© 2023 SendNoods</p>
                </div>
                <div className='footer-right'>
                    <a href='https://futurenoodles.com/' target='_blank'>
                        <img src={oglogo} alt='future noodles link' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;