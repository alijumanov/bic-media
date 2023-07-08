import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import '../styles/Projects.scss';
import { Pagination } from "swiper";
import { dataProjects } from '../api/Api';
import { Swiper, SwiperSlide } from "swiper/react";
import Texture5 from '../assets/images/texture5.png';
import { getDescription, getName } from '../languages/language';

const Projects = () => {

    // pagination options

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div className='Projects parent'>
            <img src={Texture5} alt="texture" className="texture5" />
            <div className="wrapper">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {dataProjects.map((item) => (
                        <SwiperSlide key={item.id} className='project gap-2'>
                            <div className="side gap-1">
                                <p className="big-text">{item.date}</p>
                                <p className="big-text">{getName(item)}</p>
                                <p className="big-text">xizmat turi: brending, raqamli marketing</p>
                            </div>
                            <img src={item.image} alt="img" className="img" />
                            <p className="big-text desc">{getDescription(item)}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;