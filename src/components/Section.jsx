import React from 'react';
import s from '../styles/Section.module.css'

const Section = () => {
    return (
        <div className={s.container}>
            <div className={s.iconContainer}>
                <img height='33px' width='33px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/t/40/assets/shop_icon_a.png?v=122755409179901583161667830582" alt="" />
                <p className={s.iconText}>ENVÍOS GRATIS A TODO EL PAÍS</p>
            </div>
            <div className={s.iconContainer}>
                <img height='33px' width='33px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/t/40/assets/shop_icon_b.png?v=68490880306878867601667830582" alt="" />
                <p className={s.iconText}>TARJETA DE CRÉDITO Y DÉBITO</p>
            </div>
            <div className={s.iconContainer}>
                <img height='33px' width='33px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/t/40/assets/shop_icon_c.png?v=121144347581229687931667830582" alt="" />
                <p className={s.iconText}>TIEMPOS DE ENVÍOS</p>
            </div>
        </div>
    );
};

export default Section;