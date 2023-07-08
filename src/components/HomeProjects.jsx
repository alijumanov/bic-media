import React from 'react';
import "swiper/css";
import '../styles/HomeProjects.scss';
import { dataProjects } from '../api/Api';
import Vector from '../assets/images/vector1.png';
import { Swiper, SwiperSlide } from "swiper/react";
import Texture from '../assets/images/texture.png';
import Project1 from '../assets/images/project1.png';
import Project2 from '../assets/images/project2.png';
import Texture3 from '../assets/images/texture3.png';
import Texture4 from '../assets/images/texture4.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomeProjects = () => {
    return (
        <div className='HomeProjects parent'>
            <img src={Vector} alt="vector" className="vector" />
            <img src={Texture} alt="texture" className="texture" />
            <img src={Texture3} alt="texture" className="texture3" />
            <img src={Texture4} alt="texture" className="texture4" />
            <div className="wrapper gap-3">
                <AnimationOnScroll className="service pd-2" animateIn="animate__slideInLeft">
                    <div className="head gap-2">
                        <div className="left gap-1">
                            <div className="line"></div>
                            <h3 className="name">03</h3>
                        </div>
                        <h1 className="sub-title">loyihalar</h1>
                    </div>
                </AnimationOnScroll>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper"
                >
                    {dataProjects.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="project mtop-3">
                                <div className="imgs">
                                    <img src={item.image} alt="img" className='img' />
                                    <p className="min-text">Adoro socks’ instagram posts</p>
                                </div>
                                <p className="text">BiC da biz turli sohalarda turli xil mijozlar bilan ishlaganimizdan faxrlanamiz. Boshlang'ichlardan tashkil etilgan korxonalarga qadar biz mijozlarimizga media ishlab chiqarish va raqamli marketing xizmatlari orqali o'z maqsadlariga erishishda yordam berdik</p>
                            </div>
                            <div className="project">
                                <p className="text">Bizning jamoamiz moda, texnologiya, mehmondo'stlik va boshqalar kabi sohalarda mijozlar uchun ingl. Bundan tashqari, biz sog'liqni saqlashdan moliyalashtirishgacha bo'lgan sohalarda biznes uchun trafikni va ko'rinishni oshiradigan moslashtirilgan raqamli marketing strategiyalarini ishlab chiqdik.</p>
                                <div className="imgs">
                                    <img src={item.image} alt="img" className='img' />
                                    <p className="min-text">instagram reels for najot taliim</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeProjects;