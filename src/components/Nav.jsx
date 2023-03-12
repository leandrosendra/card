import React from 'react';
import s from '../styles/Nav.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

const Nav = () => {
    return (
        <nav>
            <section className={s.discount}>
                ✨¡10% OFF EXTRA EN COMPRAS DE 2 CAJAS O MÁS!✨ TIPEÁ EN EL CARRITO EL CÓDIGO → GANE10% → 🛒 ANTES DE PAGAR
            </section>
            <section className={s.languages}>
                <a href="#">
                    <img src="https://cdn.shopify.com/s/files/1/2997/0906/files/spanish.png?5504" alt="" /> Español
                </a>
                <a href="#">
                    <img src="https://cdn.shopify.com/s/files/1/2997/0906/files/english.png?5938" alt="" /> Inglés
                </a>
            </section>
            <section className={s.maincontainer}>
                <div><GiHamburgerMenu /></div>
                <div><img className={s.logo} src="https://cdn.shopify.com/s/files/1/0005/4634/0925/files/logo_0da61f85-71aa-4621-b181-2726657b0dae_160x.png?v=1613743837" alt="" /></div>
                <div className={s.icons}>
                    <IconContext.Provider value={{ size: '22px' }}>
                        <AiOutlineSearch className={s.icon}/>
                        <AiOutlineUser className={s.icon}/>
                        <RiShoppingCartLine className={s.icon}/>
                    </IconContext.Provider>
                </div>
            </section>
            <hr />
        </nav>
    );
};

export default Nav;