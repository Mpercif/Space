import React from 'react';

export const Navbar = () => {

    

  return <header className='navbar'>
            <picture className='navbar__picture'>
            </picture>
            <nav className='navbar__items'>
                <div className='item__container'>
                    <a className='navbar__item navbar__item--active'><span className='navbar__number'>00</span> HOME</a>
                    <span className='active'></span>
                </div>
                <div className='item__container'>
                    <a className='navbar__item'><span className='navbar__number'>01</span> DESTINATION</a>
                    <span className='active'></span>
                </div>
                <div className='item__container'>
                    <a className='navbar__item'><span className='navbar__number'>02</span> CREW</a>
                    <span className='active'></span>
                </div>
                <div className='item__container'>
                    <a className='navbar__item'><span className='navbar__number'>03</span> TECHNOLOGY</a>
                    <span className='active'></span>
                </div>
            </nav>
        </header>
};
