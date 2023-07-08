import React from 'react';
import '../styles/Modal.scss';
import CheckImg from '../assets/images/check.png'
import { CloseIcon } from '../assets/svgIcons/svgIcons';

const Modal = ({ changeModal }) => {
    return (
        <div className='Modal'>
            <div className="children pd-3 gap-2">
                <div className="close-icon" onClick={changeModal}><CloseIcon /></div>
                <img src={CheckImg} alt="img" className="check-img" />
                <p className="name">Спасибо за сообщение!</p>
                <p className="big-text">Мы ценим Ваш интерес к нашим услугам и свяжемся с вами как можно скорее.</p>
            </div>
            <div className="contrast" onClick={changeModal}></div>
        </div>
    );
};

export default Modal;