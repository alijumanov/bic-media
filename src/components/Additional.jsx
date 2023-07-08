import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import '../styles/Additional.scss';
import { dataProjects } from '../api/Api';
import Img1 from '../assets/images/app1.png';
import Img2 from '../assets/images/app2.png';
import Img3 from '../assets/images/app3.png';
import Img4 from '../assets/images/app4.png';
import Img5 from '../assets/images/app5.png';
import Img6 from '../assets/images/app6.png';
import { Autoplay, Pagination } from "swiper";
import AdvImg1 from '../assets/images/adv1.png';
import AdvImg2 from '../assets/images/adv2.png';
import AdvImg3 from '../assets/images/adv3.png';
import AdvImg4 from '../assets/images/adv4.png';
import { getName } from '../languages/language';
import { Swiper, SwiperSlide } from "swiper/react";
import ClientImg from '../assets/images/clients.png';
import Texture4 from '../assets/images/texture4.png';
import ClientImg1 from '../assets/images/clients1.png';

const Additional = () => {
    return (
        <div className='Additional parent'>
            <img src={Texture4} alt="texture" className="texture4" />
            <div className="wrapper gap-2">
                <h1 className="sub-title">dizayn jarayoni</h1>
                <div className="numbers gap-2 mtop-2">
                    <div className="number gap-2">
                        <div className="sub-title">1</div>
                        <p className="big-text">Tadqiqot va kashfiyot</p>
                    </div>
                    <div className="number gap-2">
                        <div className="sub-title">2</div>
                        <p className="big-text">G'oya va kontseptsiyani ishlab chiqish</p>
                    </div>
                    <div className="number gap-2">
                        <div className="sub-title">3</div>
                        <p className="big-text">Dizayn va takomillashtirish</p>
                    </div>
                    <div className="number gap-2">
                        <div className="sub-title">4</div>
                        <p className="big-text">Ishlab chiqish va amalga oshirish</p>
                    </div>
                    <div className="number gap-2">
                        <div className="sub-title">5</div>
                        <p className="big-text">Ishga tushirish va baholash</p>
                    </div>
                </div>
                <div className="lenta pd-1 gap-3 mtop-2">
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                </div>
                <h1 className="sub-title mtop-2">bizning ba'zi loyihalar</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        }
                    }}
                    pagination={{
                        type: "fraction",
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper mtop-2"
                >
                    {dataProjects.map((item) => (
                        <SwiperSlide key={item.id} className="project gap-1">
                            <img src={item.image} alt="img" className="img" />
                            <p className="name">{getName(item)}</p>
                            <p className="min-text">{item.date}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h1 className="sub-title mtop-3">dizayn uchun vositalarimiz</h1>
                <div className="logos mtop-2">
                    <div className="logo gap-1">
                        <img src={Img1} alt="logo" className="logo-img" />
                        <p className="big-text">illustrator</p>
                    </div>
                    <div className="logo gap-1">
                        <img src={Img2} alt="logo" className="logo-img" />
                        <p className="big-text">photoshop</p>
                    </div>
                    <div className="logo gap-1">
                        <img src={Img3} alt="logo" className="logo-img" />
                        <p className="big-text">figma</p>
                    </div>
                    <div className="logo gap-1">
                        <img src={Img4} alt="logo" className="logo-img" />
                        <p className="big-text">google analytics</p>
                    </div>
                    <div className="logo gap-1">
                        <img src={Img5} alt="logo" className="logo-img" />
                        <p className="big-text">blender</p>
                    </div>
                    <div className="logo gap-1">
                        <img src={Img6} alt="logo" className="logo-img" />
                        <p className="big-text">after effects</p>
                    </div>
                </div>
                <h1 className="sub-title mtop-3">nega bizni tanlaysiz</h1>
                <div className="advs mtop-2">
                    <div className="adv gap-1">
                        <img src={AdvImg1} alt="adv" className="adv-img" />
                        <p className="name">moslashtirilgan echimlar va g'oyalar</p>
                    </div>
                    <div className="adv gap-1">
                        <img src={AdvImg2} alt="adv" className="adv-img" />
                        <p className="name">maxsus yo'naltirilgan yondashuv</p>
                    </div>
                    <div className="adv gap-1">
                        <img src={AdvImg3} alt="adv" className="adv-img" />
                        <p className="name">ijodkorlik va eng yaxshi amaliyotlar</p>
                    </div>
                    <div className="adv gap-1">
                        <img src={AdvImg4} alt="adv" className="adv-img" />
                        <p className="name">ajoyib va ilhomlantiruvchi natijalar</p>
                    </div>
                </div>
                <div className="lenta pd-1 gap-3 mtop-2">
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                    <div className="line"></div>
                    <p className="big-text">ijodiy yechimlar</p>
                </div>
                <h1 className="sub-title mtop-4">bizning mijozlarimiz</h1>
                <div className="clients mtop-2">
                    <img src={ClientImg} alt="clients" className="clients-img c1" />
                    <img src={ClientImg1} alt="clients" className="clients-img c2" />
                </div>
            </div>
        </div>
    );
};

export default Additional;