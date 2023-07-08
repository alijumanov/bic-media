import React from 'react';
import '../styles/HomeAbout.scss';
import { Link } from 'react-router-dom';
import TextImg from '../assets/images/text.png';
import LineImg from '../assets/images/line.png';
import Texture1 from '../assets/images/texture3.png';
import Texture2 from '../assets/images/texture1.png';
import CircleImg from '../assets/images/circles.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HomeAbout = () => {
    return (
        <div className='HomeAbout parent' id='about'>
            <img src={Texture1} alt="texture" className="texture-1" />
            <img src={Texture2} alt="texture" className="texture-2" />
            <div className="wrapper gap-1">
                <AnimationOnScroll animateIn="animate__backInLeft">
                    <div className="head gap-2">
                        <div className="left gap-1">
                            <div className="line"></div>
                            <h3 className="name">01</h3>
                        </div>
                        <h1 className="sub-title">biz haqimizda</h1>
                    </div>
                </AnimationOnScroll>
                <div className="infos gap-3">
                    <div className="info c1">
                        <img src={TextImg} alt="text" className="text-img" />
                        <div className="texts mtop-3">
                            <h1 className='name'>* MAIN <br /> TEXT</h1>
                            <p className="text">not main tho</p>
                        </div>
                        <img src={LineImg} alt="line" className='line-img' />
                        <div className="shapes mtop-2 gap-1">
                            <img src={CircleImg} alt="img" className="circle_img" />
                        </div>
                    </div>
                    <AnimationOnScroll animateIn="animate__backInUp">
                        <div className="info gap-2 c2">
                            <p className="text">BiC media ishlab chiqarish va raqamli marketing xizmatlarining etakchi provayderidir. Bizning mutaxassislar jamoasi barcha o'lchamdagi bizneslarga raqamli dunyoda muvaffaqiyat qozonishga yordam berishga ishtiyoqlidir.</p>
                            <p className="text">Bizning media ishlab chiqarish xizmatlarimiz video ishlab chiqarish, fotosurat, grafik dizayn va animatsiyani o'z ichiga oladi. Biz mijozlarimiz bilan ularning g'oyalarini hayotga tatbiq etish va maqsadli auditoriyani jalb qiladigan yuqori sifatli kontent yaratish uchun yaqindan ishlaymiz.</p>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__backInUp">
                        <div className="info gap-2 c3">
                            <p className="text">Media ishlab chiqarishdan tashqari, biz ijtimoiy media menejmenti, SEO, PPC reklama, elektron pochta marketingi va boshqalarni o'z ichiga olgan bir qator raqamli marketing xizmatlarini taklif etamiz. Bizning maqsadimiz mijozlarimizga onlayn ko'rinishini oshirishga va o'z veb-saytlariga trafikni jalb qilishga yordam berishdir.</p>
                            <Link to="/about" className='text explore'>batafsil</Link>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;