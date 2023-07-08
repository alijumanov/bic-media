import React from 'react';
import FAQ from './FAQ';
import '../styles/AllServices.scss';
import Additional from './Additional';
import OtherServices from './OtherServices';
import DownImg from '../assets/images/down.png';
import Texture3 from '../assets/images/texture3.png';
import Texture7 from '../assets/images/texture7.png';

const AllServices = () => {
    return (
        <>
            <div className="AllServices parent">
                <img src={Texture3} alt="texture" className="texture-3" />
                <img src={Texture7} alt="texture" className="texture-7" />
                <div className="wrapper">
                    <h1 className="serv-title c1"><span>biz</span> ajoyib dizaynni</h1>
                    <h1 className="serv-title c2"><div>qanday</div> <div>qilishni</div></h1>
                    <h1 className="serv-title c3"><span>sizga</span> o’rgatamiz</h1>
                    <h1 className="serv-title c4">va ko’rsatamiz!</h1>
                    <img src={DownImg} alt="down" className="down-img" />
                    <div className="infos">
                        <div className="left gap-1">
                            <h1 className="sub-title">Brendingizni yuqori sifatli ko'taring</h1>
                            <p className="text mtop-1">Media ishlab chiqarish-bu televizor, ijtimoiy tarmoqlar va veb-saytlar kabi turli platformalar uchun audio, video va grafik kontent yaratish jarayoni.</p>
                            <p className="text">Bu rejalashtirish, ishlab chiqish, suratga olish yoki yozib olish, tahrirlash va tarqatish kabi bir necha bosqichlarni o'z ichiga oladi.</p>
                        </div>
                        <div className="right gap-1">
                            <div className="top">
                                <h1 className="sub-title">media production (2022 - 2023)</h1>
                                <div className="serv pd-05">
                                    <div className="img"></div>
                                    <p className="min-text">some text can be added here in my opinion lalllalal what you think</p>
                                </div>
                            </div>
                            <div className="servs gap-1">
                                <div className="serv pd-05">
                                    <div className="img"></div>
                                    <p className="min-text">some text can be added here in my opinion lalllalal what you think</p>
                                </div><div className="serv pd-05">
                                    <div className="img"></div>
                                    <p className="min-text">some text can be added here in my opinion lalllalal what you think</p>
                                </div>
                                <div className="serv pd-05">
                                    <div className="img"></div>
                                    <p className="min-text">some text can be added here in my opinion lalllalal what you think</p>
                                </div>
                                <div className="serv pd-05">
                                    <div className="img"></div>
                                    <p className="min-text">some text can be added here in my opinion lalllalal what you think</p>
                                </div>
                                <div className="txt gap-1">
                                    <p className="name">brend uslubi</p>
                                    <p className="text">ishga bizning noyob yondashuvimiz</p>
                                    <p className="text op">Kontseptualizatsiyadan yakuniy yetkazib berishgacha biz har bir loyiha aniqlik va ehtiyotkorlik bilan bajarilishini ta'minlaymiz. Bizning e'tiborimiz nafaqat tinglovchilarni o'ziga jalb qiladigan, balki mo'ljallangan xabarni samarali etkazib beradigan qiziqarli tarkibni yaratishdir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Additional />
            <FAQ />
            <OtherServices />
        </>
    );
};

export default AllServices;