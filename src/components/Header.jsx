import React from 'react';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';
import Vector from "../assets/images/vector.png";
import BottomImg from "../assets/images/header.png";
import Texture1 from "../assets/images/texture1.png";
import Texture2 from "../assets/images/texture2.png";
import { AngleDownIcon, DownCircleIcon, RocketIcon } from '../assets/svgIcons/svgIcons';

const Header = () => {
    return (
        <div className='Header parent'>
            <div className="rocket"><RocketIcon /></div>
            <img src={Vector} alt="vector" className="vector" />
            <img src={Texture1} alt="texture" className="texture1" />
            <img src={Texture2} alt="texture" className="texture2" />
            <img src={BottomImg} alt="bottom-img" className='bottom-img' />
            <div className="wrapper">
                <h1 className="big-title">kreativ shtormga</h1>
                <h1 className="big-title">tayyor turing!</h1>
                <p className="text">brendingizni keyingi bosqichga olib chiqishga tayyormisiz?</p>
                <a href='#about' className="down-icon ver-1">
                    <AngleDownIcon />
                </a>
                <a href='#about' className="down-icon ver-2">
                    <DownCircleIcon />
                </a>
                <Link to="/contacts" className="text round-05 pd-1 connect_btn">Bog'lanish</Link>
            </div>
        </div>
    );
};

export default Header;