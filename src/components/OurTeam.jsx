import React from 'react';
import '../styles/OurTeam.scss';
import { dataOurTeam } from '../api/Api';
import Texture4 from '../assets/images/texture4.png';
import { getName, getProfession } from '../languages/language';

const OurTeam = () => {
    return (
        <div className='OurTeam parent'>
            <img src={Texture4} alt="texture" className="texture4" />
            <div className="wrapper gap-3">
                <div className="head gap-2">
                    <div className="left gap-1">
                        <div className="line"></div>
                        <h3 className="name">04</h3>
                    </div>
                    <h1 className="sub-title">bizning jamoamiz</h1>
                </div>
                <div className="persons grid-4">
                    {dataOurTeam.map((item) => (
                        <div key={item.id} className="person gap-1">
                            <img src={item.image} alt="img" className='img' />
                            <h3 className="name mtop-1">{getName(item)}</h3>
                            <p className="text">{getProfession(item)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurTeam;