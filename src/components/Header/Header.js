import React, { useState } from 'react'
import CloseMenu from '../../assets/images/close.png'
import MenuIcon from '../../assets/images/menu.png'
import bar2 from '../../assets/images/RFA Logo Final.png'
import bar3 from '../../assets/images/search-solid.svg'

import Menu from '../Menu/Menu';

import './header.css'

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className='header'>
                <div className='nav-left'>
                    <div className='bar'>
                        {
                            showMenu ? <img src={CloseMenu} width="40px" height="40px" onClick={() => setShowMenu(!showMenu)} />
                                : <img src={MenuIcon} width="40px" height="40px" onClick={() => setShowMenu(!showMenu)} />
                        }

                        <p className='text2'>Menu</p>

                    </div>
                    <div className='nav-left-1'>
                        <img src={bar2} width="85px" height="85px"></img></div>
                    <div className='bar1'>
                        <h1 className='text1'>SOUTH CARLOLINA </h1>
                        <h1 className='text1'>  REVENUE AND FISCAL AFFAIRS OFFICE</h1>
                        <p className='text3'>
                            Transforming data into solutions for South Carolina
                        </p>
                    </div>
                </div>
                <div className='nav-right'>

                    <div className='items'>
                        <ul className='nav'>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>EVENTS</li>
                            <li>BOARDS & COMMITTEES</li>



                        </ul>
                    </div>
                    <div className='bar3'>
                        <img src={bar3}></img>


                    </div>





                </div>
            </div>
            {
                showMenu && <Menu />
            }
        </>
    )
}