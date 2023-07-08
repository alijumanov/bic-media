import FAQ from './FAQ';
import React, { useState } from 'react';
import '../styles/Contacts.scss';
import { getName } from '../languages/language';
import Texture4 from '../assets/images/texture4.png';

const Contacts = ({ changeModal }) => {

    // filter options

    const dataFilters = [
        { id: 1, name_uz: "artist", name_ru: "artist", name_en: "artist" },
        { id: 2, name_uz: "oziq-ovqat kompaniyasi", name_ru: "oziq-ovqat kompaniyasi", name_en: "oziq-ovqat kompaniyasi" },
        { id: 3, name_uz: "potentsial homiy", name_ru: "potentsial homiy", name_en: "potentsial homiy" },
        { id: 4, name_uz: "blogger", name_ru: "blogger", name_en: "blogger" },
        { id: 5, name_uz: "ajam tadbirkor", name_ru: "ajam tadbirkor", name_en: "ajam tadbirkor" },
    ];

    // input values

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [companyValue, setCompanyValue] = useState("");
    const [messageValue, setMessageValue] = useState("");
    const [professionValue, setProfessionValue] = useState([]);

    // change values and invalids functions

    function changeName(item) {
        setNameValue(item);
    };

    function changeEmail(item) {
        setEmailValue(item);
    };

    function changeNumber(item) {
        setNumberValue(item);
    };

    function changeCompany(item) {
        setCompanyValue(item);
    };

    function changeMessage(item) {
        setMessageValue(item);
    };

    function changeProfession(item) {
        setProfessionValue(professionValue.includes(item) ? professionValue.filter((c) => c != item) : [...professionValue, item])
    };

    // send message to telegram bot

    let bot = {
        TOKEN: "6126043572:AAGcd-E5wIbpAbdZik67S6JGAREGvPa_lRM",
        chatID: "-1001946350327",
        message: `%0AIsmi: ${nameValue}; %0ATelefon raqami: ${numberValue}; %0AEmaili: ${emailValue}; %0AKompaniyasi: ${companyValue}; %0AKimligi: ${professionValue}; %0AXabari: ${messageValue}.`
    };

    function sendMessage(e) {
        e.preventDefault();

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
            method: "GET"
        })
            .then(success => {
                console.log('send message')
            }, error => {
                console.log(error)
            })

        changeModal();
        setNameValue("");
        setEmailValue("");
        setNumberValue("");
        setCompanyValue("");
        setMessageValue("");
    };

    return (
        <>
            <div className="Contacts parent">
                <img src={Texture4} alt="texture" className="texture4" />
                <div className="wrapper gap-2">
                    <h1 className="sub-title">muhokama qilishga tayyormisiz? biz bilan bog'laning!</h1>
                    <form onSubmit={sendMessage} className="forms">
                        <div className="left gap-1">
                            <input type="text" placeholder='ism' required className="text pd-1" value={nameValue} onChange={(e) => changeName(e.target.value)} />
                            <input type="email" placeholder='email' required className="text pd-1" value={emailValue} onChange={(e) => changeEmail(e.target.value)} />
                            <p className="text mtop-2">siz kimsiz?</p>
                            <div className="filters gap-1 mtop-1">
                                {dataFilters.map((item) => (
                                    <div key={item.id} className="filter gap-1">
                                        <input type="checkbox" name={item.name_uz} id={item.name_uz} onChange={() => changeProfession(item.name_uz)} />
                                        <label htmlFor={item.name_uz} className="text">{getName(item)}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="right gap-1">
                            <input type="text" placeholder='companiya' required className="text pd-1" value={companyValue} onChange={(e) => changeCompany(e.target.value)} />
                            <input type="number" placeholder='telefon raqami' required className="text pd-1" value={numberValue} onChange={(e) => changeNumber(e.target.value)} />
                            <textarea rows="14" placeholder='loyiha tafsilotlari' className='text pd-1 mtop-2' value={messageValue} onChange={(e) => changeMessage(e.target.value)}></textarea>
                            <div className="btns mtop-2">
                                <button type="submit" className='text btn'>yuborish</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <FAQ texture5={true} />
        </>
    );
};

export default Contacts;