

import React, { useState } from 'react';
import { Link } from 'react-scroll';
// import {Link} from "react-router-dom"
import data from '../restApi.json';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [show, setShow] = useState(false);

    
    const value = data.data.navbarLinks
    // we have take an extra variable value beccoz of the convinent of writing 
    // importing as data 

    // console.log(data);
    // console.log(value);
    
    

    return (
        <nav>
            <div className="logo" onClick={_ => console.log(data)}>ZAKYA</div>
            {/* <div className="logo" onClick={_ => console.log(data.data.navbarLinks)}>ZAKYA2</div> */}
                   
            <div className={show ? 'navLinks showmenu' : 'navLinks'}>
                <div className="links">
                    
                    {value.map((elem) => {
                       return(
                        <Link
                        to={elem.link}
                        key={elem.id}
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        {elem.title}
                    </Link>
                       )
                    })}
                </div>
                <button className="menuBtn">
                    Our Menu
                </button>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu />
            </div>
        </nav>
    );
}

export default Navbar;
