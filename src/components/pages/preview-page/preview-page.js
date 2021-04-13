import React from 'react';
import {Link} from 'react-router-dom';
import './preview-page.scss';
import { ReactComponent as Logo } from './forky-fried.svg';
import { ReactComponent as PhoneIco } from './phone.svg';
import { ReactComponent as EmailIco } from './email.svg';

const PreviewPage = () => {
    return (
        <div className="preview-page">            
            <div className="preview-page__info">
                <div className="preview-page__info-logo">
                    <Logo/>
                </div>
                <div className="preview-page__info-text">
                    <h1 className="preview-page__info-title title">Welcome to Forky Fried</h1>
                    <p className="preview-page__info-descr">
                        Наша компания имеет 1000 ресторанов по всему миру и занимается
                        доставкой горячей еды на дом, но это не предел!
                        Мы растем с каждым клиентом и расширяем охват стран, где 
                        есть наши заведения, а также собственный ассортимент. 
                        Закажи сейчас - будь сыт через час!
                    </p>
                    <ul className="preview-page__info-contact-list contact-list">
                        <div className="contact-list__item">
                            <EmailIco className="contact-list__item-ico ico"/>
                            <p>Email: <span className="orange">ForkyFrieded@mail.ru</span></p>
                        </div>
                        <div className="contact-list__item">
                            <PhoneIco className="contact-list__item-ico ico"/>
                            <p>Phone: <span className="orange">+818347387238</span></p>
                        </div>
                    </ul>
                </div>
            </div>

            <Link to="/menu" className="preview-page__btn btn btn_border">
                Перейти в меню
            </Link>
        </div>
    )
}

export default PreviewPage;