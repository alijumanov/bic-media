import React, { useState } from 'react';
import '../styles/FAQ.scss';
import { dataFAQ } from '../api/Api';
import Img from '../assets/images/rectangle.png';
import Texture4 from '../assets/images/texture4.png';
import Texture5 from '../assets/images/texture5.png';
import { AddIcon } from '../assets/svgIcons/svgIcons';
import { getAnswer, getQuestion } from '../languages/language';

const FAQ = ({ texture5 }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className='FAQ parent'>
            <img src={Texture4} alt="texture" className="texture4" />
            {texture5 &&
                <img src={Texture5} alt="texture" className="texture5" />
            }
            <div className="wrapper">
                <div className="left gap-3">
                    <h1 className="sub-title">eng ko'p so'ralgan</h1>
                    <div className="questions">
                        {dataFAQ.map((item) => (
                            <div key={item.id} className="bar">
                                <div className="question">
                                    <h4 className="text pd-3">{getQuestion(item)}</h4>
                                    <div onClick={() => activeIndex != dataFAQ?.indexOf(item) ? setActiveIndex(dataFAQ?.indexOf(item)) : setActiveIndex(null)} className={`icon ${activeIndex == dataFAQ?.indexOf(item) && "active-icon"}`}>
                                        <AddIcon />
                                    </div>
                                </div>
                                <div className={`answer ${activeIndex == dataFAQ?.indexOf(item) && "active-answer"}`}>
                                    <p className="min-text">{getAnswer(item)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <img src={Img} alt="img" className='img' />
                </div>
            </div>
        </div>
    );
};

export default FAQ;