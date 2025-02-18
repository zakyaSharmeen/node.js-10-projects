import { useState } from "react"
import { Link } from "react-router-dom"
import {AiOutlineClose,AiOutlineMenu}  from "react-icons/ai"
import logonav from "../assets/logoQdeli.png"
import CardIcon from "./CardIcon"

function Navbar() {
    const[nav, setNav] = useState(false)
    const toggleNav = ()=>{
        setNav(!nav)
    }

   


  return (
    <div>
        <div className='bg-gradient-to-r from-green-500 to-green-600 shadow-lg'>
        <div className='flex justify-between items-center p-4'>
            <a href="/" className="flex items-center">
                <img src={logonav} alt="logo" className="max-w-[100px]"/>
            </a>

            <Link to="/cart">
            <CardIcon/>
            </Link>


            <button onClick={toggleNav} className='text-white lg:hidden'>
                {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            <nav className={`${nav ? "flex": "hidden"} absolute lg:static bg-green-600 w-full lg:w-auto lg:flex flex-col lg:flex-row items-center
                            space-y-5 lg:space-y-0 lg:space-x-6 top-14 left-0 right-0 py-5 lg:py-0 z-20`}>
                  
                 
                        <>
                        <Link to="/" className='text-white'>Home</Link>
                        <Link to="/contact" className='text-white'>Contact</Link>
                    </>
                  

                    
                  
              
               
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Navbar