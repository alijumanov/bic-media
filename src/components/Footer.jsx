import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';
import Texture5 from '../assets/images/texture5.png';
import { AngleUpIcon, FacebookIcon, InstagramIcon, PhoneIcon, TelegramIcon } from '../assets/svgIcons/svgIcons';

const Footer = () => {
    return (
        <div className='Footer parent'>
            <img src={Texture5} alt="texture" className="texture5" />
            <div className="wrapper">
                <div className="top-footer pd-3">
                    <div className="left gap-2">
                        <h3 className="name">Birgalikda o'saylik.</h3>
                        <h3 className="name">Biz bilan bog'laning!</h3>
                    </div>
                    <div className="tools gap-1 links">
                        <i className="text">navigatsiya</i>
                        <Link to="/about" className='mtop-1-5'><i className="text">/ haqimizda</i></Link>
                        <Link to="/services" className='mtop-05'><i className="text">/ xizmatlar</i></Link>
                        <Link to="/projects" className='mtop-05'><i className="text">/ loyihalar</i></Link>
                        <Link to="/contacts" className='mtop-05'><i className="text">/ aloqalar</i></Link>
                    </div>
                    <div className="tools gap-1">
                        <i className="text">aloqa ma'lumotlari</i>
                        <a href="mailto:bic.agency.uz@gmail.com" className="text mtop-1-5">bic.agency.uz@gmail.com</a>
                        <a href="tel:+998993357655" className="text tel-icon mtop-05 gap-1">
                            <div className="icon"><PhoneIcon /></div>
                            + 99899 335 76 55
                        </a>
                    </div>
                    <div className="tools scroll-top gap-1" onClick={() => window.scrollTo(0, 0)}>
                        <div className="up-icon"><AngleUpIcon /></div>
                        <p className="text pd-1">yuqoriga qaytish</p>
                    </div>
                </div>
                <div className="bottom-footer mtop-3">
                    <p className="text">Beruniy, Innotechno park</p>
                    <div className="socials gap-3">
                        <a href="#" target={'_blank'} className="icon">
                            <InstagramIcon />
                        </a>
                        <a href="#" target={'_blank'} className="icon">
                            <TelegramIcon />
                        </a>
                        <a href="#" target={'_blank'} className="icon">
                            <FacebookIcon />
                        </a>
                        <a href="#" target={'_blank'} className="icon">
                            <PhoneIcon />
                        </a>
                    </div>
                    <p className="text">aloqada qoling</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;