import React from 'react';
import '../styles/HomeServices.scss';
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
import Texture from '../assets/images/texture.png';
import Texture1 from '../assets/images/texture3.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomeServices = () => {
    return (
        <div className='HomeServices parent'>
            <img src={Vector} alt="vector" className="vector" />
            <img src={Texture} alt="texture" className="texture" />
            <img src={Texture1} alt="texture" className="texture-1" />
            <div className="wrapper gap-3">
                <AnimationOnScroll animateIn="animate__backInRight">
                    <div className="head gap-2">
                        <h1 className="sub-title">xizmatlar</h1>
                        <div className="left gap-1">
                            <div className="line"></div>
                            <h3 className="name">03</h3>
                        </div>
                    </div>
                </AnimationOnScroll>
                <div className="services">
                    <Link to="/services/1">
                        <AnimationOnScroll className="service pd-2" animateIn="animate__slideInUp">
                            <img src={BackImg} alt="back-img" className="back-img" />
                            <div className="tool-1 gap-1">
                                <h1 className="sub-title">digital</h1>
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
                        </AnimationOnScroll>
                    </Link>
                    <Link to="/services/2">
                        <AnimationOnScroll className="service pd-2" animateIn="animate__slideInUp">
                            <img src={BackImg} alt="back-img" className="back-img" />
                            <div className="tool-1 gap-1">
                                <h1 className="sub-title">media</h1>
                                <img src={Later1} alt="img" className='later' />
                            </div>
                            <div className="tool-2 gap-1 mtop-1">
                                <img src={Later2} alt="img" className='later' />
                                <img src={Later2} alt="img" className='later' />
                                <h1 className="sub-title">production</h1>
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
                        </AnimationOnScroll>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;