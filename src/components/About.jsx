import React from 'react';
import "swiper/css";
import '../styles/About.scss';
import Contacts from './Contacts';
import { Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import { dataProjects } from '../api/Api';
import Side from '../assets/images/side.png';
import ArtImg from '../assets/images/art.png';
import Icon1 from '../assets/images/icon1.png';
import Icon2 from '../assets/images/icon2.png';
import Icon3 from '../assets/images/icon3.png';
import { getName } from '../languages/language';
import StarImg from '../assets/images/stars.png';
import FeedImg1 from '../assets/images/feed1.png';
import FeedImg2 from '../assets/images/feed2.png';
import { Swiper, SwiperSlide } from "swiper/react";
import Texture6 from '../assets/images/texture6.png';
import Texture7 from '../assets/images/texture7.png';
import CircleImg from '../assets/images/serv-circle.png';
import { RocketIcon } from '../assets/svgIcons/svgIcons';

const About = () => {
    return (
        <>
            <div className='About parent'>
                <div className="rocket"><RocketIcon /></div>
                <img src={Texture6} alt="texture" className="texture-6" />
                <img src={Texture7} alt="texture" className="texture-7" />
                <div className="wrapper gap-2">
                    <div className="ab-titles">
                        <h1 className="text ab-title a1">мы предоставляем</h1>
                        <h1 className="text ab-title a2">все виды</h1>
                        <h1 className="text ab-title a3">услуг для вас</h1>
                    </div>
                    <img src={Side} alt="side" className="side-1" />
                    <img src={Side} alt="side" className="side-2" />
                    <img src={ArtImg} alt="img" className="art-img" />
                    <img src={CircleImg} alt="img" className="circle-img mtop-3" />
                    <div className="services mtop-3">
                        <h1 className="sub-title left">xizmatlar</h1>
                        <div className="right gap-2">
                            <div className="service gap-1">
                                <h1 className="name">digital marketing</h1>
                                <p className="big-text mtop-1-5">engine optimization (SEO)</p>
                                <p className="big-text">pay-per-click advertising</p>
                                <p className="big-text">email marketing</p>
                                <p className="big-text">content marketing</p>
                                <p className="big-text">text</p>
                                <Link to="/services/1" className='explore big-text mtop-1-5'>batafsil</Link>
                            </div>
                            <div className="service gap-1">
                                <h1 className="name">media production</h1>
                                <p className="big-text mtop-1-5">media planning</p>
                                <p className="big-text">media buying</p>
                                <p className="big-text">creative development</p>
                                <p className="big-text">text</p>
                                <p className="big-text">text</p>
                                <Link to="/services/1" className='explore big-text mtop-1-5'>batafsil</Link>
                            </div>
                        </div>
                    </div>
                    <h1 className="sub-title">oldingi loyihalar</h1>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        breakpoints={{
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            }
                        }}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper mtop-2"
                    >
                        {dataProjects.map((item) => (
                            <SwiperSlide key={item.id} className="project gap-1">
                                <img src={item.image} alt="img" className="img" />
                                <p className="name">{getName(item)}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="txt gap-1 mtop-2">
                        <p className="name">Biz har bir mijozning noyob ehtiyojlarini tushunish va ushbu ehtiyojlarni qondirish uchun xizmatlarimizni moslashtirishga sodiqligimizga ishonamiz.</p>
                        <p className="big-text">Bizning jamoamiz sog'liqni saqlash, moliya va boshqa sohalardagi korxonalar uchun trafikni va ko'rinishni kuchaytirgan ingl. Biz reklama videosini yaratamizmi, veb-saytni loyihalashtiramizmi yoki ijtimoiy media kampaniyasini boshqaramizmi, biz har doim mijozlarimizni birinchi o'ringa qo'yamiz. Bizning portfelimiz mijozlarimiz kutganidan yuqori sifatli ishlarni etkazib berishga bo'lgan sadoqatimizni aks ettiradi</p>
                    </div>
                    <div className="feedback mtop-3">
                        <div className="texts gap-2">
                            <img src={StarImg} alt="star" className="star-img" />
                            <p className="big-text">"men ko'rgan eng yaxshi jamoaviy ish!”</p>
                            <p className="text">Martin Luther</p>
                        </div>
                        <div className="imgs gap-2">
                            <img src={FeedImg1} alt="img" className="feed-img" />
                            <img src={FeedImg2} alt="img" className="feed-img" />
                        </div>
                    </div>
                    <h1 className="sub-title mtop-3" style={{ textAlign: "center" }}>nima uchun biz</h1>
                    <div className="why gap-3">
                        <div className="info pd-2 gap-2">
                            <img src={Icon1} alt="icon" className="icon" />
                            <p className="text">01</p>
                            <p className="big-text">Moslashtirilgan Yondashuv</p>
                        </div>
                        <div className="info pd-2 gap-2">
                            <img src={Icon2} alt="icon" className="icon" />
                            <p className="text">01</p>
                            <p className="big-text">Moslashtirilgan Yondashuv</p>
                        </div>
                        <div className="info pd-2 gap-2">
                            <img src={Icon3} alt="icon" className="icon" />
                            <p className="text">01</p>
                            <p className="big-text">Moslashtirilgan Yondashuv</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contacts />
        </>
    );
};

export default About;