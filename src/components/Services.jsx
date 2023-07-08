import React from 'react';
import FAQ from './FAQ';
import '../styles/Services.scss';
import Additional from './Additional';
import OtherServices from './OtherServices';
import Img from '../assets/images/service.png';
import Texture from '../assets/images/texture.png';
import Texture1 from '../assets/images/texture1.png';
import Texture3 from '../assets/images/texture3.png';
import DecorImg from '../assets/images/service1.png';
import CircleImg from '../assets/images/service2.png';

const Services = () => {
    return (
        <>
            <div className='Services parent'>
                <img src={Texture} alt="texture" className="texture" />
                <img src={Texture1} alt="texture" className="texture-1" />
                <img src={Texture3} alt="texture" className="texture-3" />
                <img src={Img} alt="img" className="serv-img" />
                <img src={CircleImg} alt="img" className="circle-img" />
                <div className="shape-1"></div>
                <div className="shape-2"></div>
                <div className="shape-3"></div>
                <div className="wrapper">
                    <div className="left">
                        <h1 className="sub-title">*digital marketing</h1>
                        <div className="only">
                            <p className="text">Raqamli marketing korxonalar uchun maqsadli auditoriyaga erishish va tovar xabardorligini oshirish uchun muhim tarkibiy qism bo'lib, </p>
                            <img src={DecorImg} alt="decor" className="decor-img" />
                            <p className="text ml">korxonalarga kengroq auditoriyani jalb qilish, marketing harakatlarini aniqroq kuzatish va mijozlar bilan Real vaqt rejimida muloqot qilish imkonini beradi.</p>
                        </div>
                    </div>
                    <div className="infos">
                        <div className="texts">
                            <p className="big-text">Lorem ipsum dolor sit amet consectetur. Lectus aliquet in id nec nisi cursus. Euismod quam lacus elementum et arcu aenean at nunc orci. Semper aliquam ornare ultrices lectus amet in sit risus.</p>
                            <p className="text">Lorem ipsum dolor</p>
                        </div>
                        <div className="shapes">
                            <div className="square-1"></div>
                            <div className="square-2"></div>
                        </div>
                    </div>
                    <div className="lorem mtop-4 gap-1">
                        <p className="text">Lorem ipsum dolor</p>
                        <p className="big-text">Lorem ipsum dolor sit amet consectetur. Lectus aliquet in id nec nisi cursus. Euismod quam lacus elementum et arcu aenean at nunc orci. Semper aliquam ornare ultrices lectus amet in sit risus.</p>
                        <p className="text">Lorem ipsum dolor sit amet consectetur. Arcu ac sed tellus pharetra porta egestas eu libero quam. Fermentum arcu facilisis sagittis imperdiet purus diam ultricies. Massa sem a sociis pharetra mi fusce. Ac leo lectus egestas nulla tincidunt a gravida pharetra. Lacus id tristique amet adipiscing lobortis turpis maecenas risus at.</p>
                    </div>
                </div>
            </div>
            <Additional />
            <FAQ />
            <OtherServices />
        </>
    );
};

export default Services;