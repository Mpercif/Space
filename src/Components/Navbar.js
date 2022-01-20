import React, { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';

export const Navbar = () => {
    const {pathname} = useLocation()  
    const routeActual = pathname.split("/")

  return <header className='navbar'>
            <picture className='navbar__picture'>
            </picture>
            <nav className='navbar__items'>
                <div className='item__container'>
                    <Link to="/" 
                        className={
                                    (routeActual[1] === '')
                                    ?'navbar__item navbar__item--active'
                                    :'navbar__item'
                                }
                    ><span className='navbar__number'>00</span> HOME</Link>
                    <span className='active'></span>
                </div>
                <div className='item__container'>
                    <Link to="/destination" 
                        className={
                            (routeActual[1] === 'destination')
                            ?'navbar__item navbar__item--active'
                            :'navbar__item'
                        }
                    ><span className='navbar__number'>01</span> DESTINATION</Link>
                    <span className='active'></span>
                </div>
                <div className='item__container'>
                    <Link to="/crew" 
                        className={
                            (routeActual[1] === 'crew')
                            ?'navbar__item navbar__item--active'
                            :'navbar__item'
                        }
                    ><span className='navbar__number'>02</span> CREW</Link>
                    <span className='active'></span>
                </div>
                <div className='item__container'>
                    <Link to="/tech" 
                        className={
                            (routeActual[1] === 'tech')
                            ?'navbar__item navbar__item--active'
                            :'navbar__item'
                        }
                    ><span className='navbar__number'>03</span> TECHNOLOGY</Link>
                    <span className='active'></span>
                </div>
            </nav>
        </header>
};
