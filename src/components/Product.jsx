import React, { useState } from 'react';
import s from '../styles/Product.module.css';
import { AiFillStar } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Product = () => {

    const [counter, setCounter] = useState(1)

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleMinus = () => {
        if (counter > 1) {

            setCounter(counter - 1)
        }
    }

    return (
        <div className={s.container}>
            <div>
                <img className={s.img} height='455px' width='455px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/products/FamigliaCorteUnico2020-1000x1000_b88a48ea-ee45-44e0-ba94-730d04af3f28_600x600.jpg?v=1653319815" alt="" />
            </div>
            <div className={s.desContainer}>
                <div className={s.labelContainer}>
                    <div className={s.label}>ENVIO GRATIS</div>
                    <div className={s.label2}>EXCLUSIVO ONLINE</div>
                    <div className={s.label3}>HAPPY HOUR</div>
                </div>
                <h1 style={{ color: '#333' }}>Famiglia Bianchi Corte Único</h1>
                <div className={s.starsContainer}>
                    <IconContext.Provider value={{ color: '#CDA434', size: '18px' }}>
                        <div className={s.stars}>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </IconContext.Provider>
                    <p>16 Experiencias</p>
                </div>
                <div className={s.oldPrice}>$19.085,00</div>
                <div className={s.priceContainer}>
                    <div className={s.price}>$9.542,00</div>
                    <div className={s.discount}>50%</div>
                    <div className={s.off}>OFF</div>
                </div>
                <p style={{ color: '#777777' }}>Precio caja x6 botellas</p>
                <div className={s.bottlePriceCont}>
                    <div className={s.bottlePriceTitle}>PRECIO POR BOTELLA</div>
                    <p className={s.bottlePrice}>$1.590,33</p>
                </div>
                <div>
                    <div className={s.paymentC}>
                        <img width='35px' height='35px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/files/icono-tarjetas_50x50.png?v=1567712777" alt="" />
                        <div>
                            <div style={{ fontSize: '12px', color: '#747474', fontWeight: 'bold' }}>MEDIOS DE PAGO</div>
                            <div style={{ fontSize: '12px', color: '#C98912' }}>Ver medios de pago</div>
                        </div>
                    </div>
                    <img height='26px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/t/11/assets/tarjetas_300x.png?v=15078402209208726433" alt="" />
                </div>
                <div className={s.paymentC}>
                    <img width='35px' height='35px' src="https://cdn.shopify.com/s/files/1/0005/4634/0925/files/icono-camion_308dbb14-d0dd-4687-81d9-66153b5f766c_35x35.png?v=1567712666" alt="" />
                    <div>
                        <div style={{ fontSize: '12px', color: '#747474', fontWeight: 'bold' }}>ENVIOS A TODO EL PAIS</div>
                        <div style={{ fontSize: '12px', color: '#C98912' }}>Calcular costo y tiempos de envío</div>
                    </div>
                </div>
                <div className={s.btnContainer}>
                    <div className={s.counterContainer}>
                        <button className={s.counterBtn} onClick={handleMinus}>-</button>
                        <div className={s.counterNumber}>{counter}</div>
                        <button className={s.counterBtn} onClick={handlePlus}>+</button>
                    </div>
                    <button className={s.btn}>AGREGAR AL CARRITO</button>
                </div>

            </div>
        </div>
    );
};

export default Product;