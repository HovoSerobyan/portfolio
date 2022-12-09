import React from 'react';
import './header.css'
import CTA from "./CTA";
import ME from '../../assets/1.jpg'
import HeaderScrolls from "./HeaderScrolls";


const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>hello I'm</h5>
                <h1>Tina Snow</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderScrolls/>

                <div className="me">
                    <img src={ME} alt="me" className='my_photo'/>
                </div>

                <a href="#contact" className='scroll_down'> Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;