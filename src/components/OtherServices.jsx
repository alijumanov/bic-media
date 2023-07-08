import React from 'react';
import '../styles/OtherServices.scss';
import { Link } from 'react-router-dom';
import Mish from '../assets/images/mish.png';
import Logo from '../assets/images/logo1.png';
import BackImg from '../assets/images/back.png';
import Shape1 from '../assets/images/shape1.png';
import Shape2 from '../assets/images/shape2.png';
import Shape3 from '../assets/images/shape3.png';
import Shape4 from '../assets/images/shape4.png';
import Later1 from '../assets/images/later1.png';
import Later2 from '../assets/images/later2.png';
import Vector from '../assets/images/vector2.png';
import Texture5 from '../assets/images/texture5.png';

const OtherServices = () => {
    return (
        <div className='OtherServices parent'>
            <img src={Vector} alt="vector" className="vector" />
            <img src={Texture5} alt="texture" className="texture5" />
            <div className="wrapper gap-3">
                <h1 className="sub-title">boshqa xizmatlar</h1>
                <div className="services">
                    <Link to="/services/1" className="service pd-2">
                        <img src={BackImg} alt="back-img" className="back-img" />
                        <div className="tool-1 gap-1">
                            <h1 className="sub-title">email</h1>
                            <img src={Later1} alt="img" className='later' />
                        </div>
                        <div className="tool-2 gap-1 mtop-1">
                            <img src={Later2} alt="img" className='later' />
                            <img src={Later2} alt="img" className='later' />
                            <h1 className="sub-title">marketing</h1>
                        </div>
                        <p className="text line-text mtop-1">Sizning Raqamli Marketing Hamkoringiz</p>
                        <div className="middle gap-2">
                            <img src={Shape1} alt="shape" className='shape-1' />
                            <div className="logo">
                                <div className="img">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p className="min-text">data type and shape exploration 365P. T/S N-70 by BiC</p>
                            </div>
                        </div>
                        <p className="text mtop-1 line-text-1">sizning brendingiz uchun moslashtirilgan strategiya yarating</p>
                        <img src={Shape2} alt="shape" className="shape-2" />
                        <div className="shapes">
                            <div className="left-imgs gap-1">
                                <img src={Shape3} alt="shape" className="shape" />
                                <img src={Mish} alt="shape" className="shape" />
                            </div>
                            <img src={Shape4} alt="shape" className="shape" />
                        </div>
                        <p className="min-text more-text pd-1">Lorem ipsum dolor sit amet consectetur. Nibh nec aenean lacinia consectetur malesuada. Lacus adipiscing lorem maecenas maecenas adipiscing integer. Mi at aliquam pellentesque varius arcu eget aliquam. Lacus adipiscing lorem. Lorem ipsum dolor sit amet consect.</p>
                    </Link>
                    <Link to="/services/2" className="service pd-2">
                        <img src={BackImg} alt="back-img" className="back-img" />
                        <div className="tool-1 gap-1">
                            <h1 className="sub-title">content</h1>
                            <img src={Later1} alt="img" className='later' />
                        </div>
                        <div className="tool-2 gap-1 mtop-1">
                            <img src={Later2} alt="img" className='later' />
                            <img src={Later2} alt="img" className='later' />
                            <h1 className="sub-title">marketing</h1>
                        </div>
                        <p className="text line-text mtop-1">Sizning Raqamli Marketing Hamkoringiz</p>
                        <div className="middle gap-2">
                            <img src={Shape1} alt="shape" className='shape-1' />
                            <div className="logo">
                                <div className="img">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p className="min-text">data type and shape exploration 365P. T/S N-70 by BiC</p>
                            </div>
                        </div>
                        <p className="text mtop-1 line-text-1">sizning brendingiz uchun moslashtirilgan strategiya yarating</p>
                        <img src={Shape2} alt="shape" className="shape-2" />
                        <div className="shapes">
                            <div className="left-imgs gap-1">
                                <img src={Shape3} alt="shape" className="shape" />
                                <img src={Mish} alt="shape" className="shape" />
                            </div>
                            <img src={Shape4} alt="shape" className="shape" />
                        </div>
                        <p className="min-text more-text pd-1">Lorem ipsum dolor sit amet consectetur. Nibh nec aenean lacinia consectetur malesuada. Lacus adipiscing lorem maecenas maecenas adipiscing integer. Mi at aliquam pellentesque varius arcu eget aliquam. Lacus adipiscing lorem. Lorem ipsum dolor sit amet consect.</p>
                    </Link>
                    <Link to="/services/3" className="service pd-2">
                        <img src={BackImg} alt="back-img" className="back-img" />
                        <div className="tool-1 gap-1">
                            <h1 className="sub-title">PPC</h1>
                            <img src={Later1} alt="img" className='later' />
                        </div>
                        <div className="tool-2 gap-1 mtop-1">
                            <img src={Later2} alt="img" className='later' />
                            <img src={Later2} alt="img" className='later' />
                            <h1 className="sub-title">advertising</h1>
                        </div>
                        <p className="text line-text mtop-1">Sizning Raqamli Marketing Hamkoringiz</p>
                        <div className="middle gap-2">
                            <img src={Shape1} alt="shape" className='shape-1' />
                            <div className="logo">
                                <div className="img">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <p className="min-text">data type and shape exploration 365P. T/S N-70 by BiC</p>
                            </div>
                        </div>
                        <p className="text mtop-1 line-text-1">sizning brendingiz uchun moslashtirilgan strategiya yarating</p>
                        <img src={Shape2} alt="shape" className="shape-2" />
                        <div className="shapes">
                            <div className="left-imgs gap-1">
                                <img src={Shape3} alt="shape" className="shape" />
                                <img src={Mish} alt="shape" className="shape" />
                            </div>
                            <img src={Shape4} alt="shape" className="shape" />
                        </div>
                        <p className="min-text more-text pd-1">Lorem ipsum dolor sit amet consectetur. Nibh nec aenean lacinia consectetur malesuada. Lacus adipiscing lorem maecenas maecenas adipiscing integer. Mi at aliquam pellentesque varius arcu eget aliquam. Lacus adipiscing lorem. Lorem ipsum dolor sit amet consect.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;