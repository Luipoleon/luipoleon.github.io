'use client';
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const NavBar = ({toggleSidebar}) =>{

    return (
    <div className="navbar">
       
        <div className="navbar__content navbar__content--closed">
            {/* Bar closed */}
            <div  className="navbar__button">
                <button onClick={toggleSidebar}> <FaBars/></button>
            </div>
            <div className="navbar__languages"> 
                <div className='language'>
                    <button > EN </button>
                </div>
                <div className='language selected'>
                    <button > ES </button>
                </div>
            </div>
        </div>
        <div className="navbar__content navbar__content--open">
            {/* Bar open */}
            <div className="navbar__button">
                <button onClick={toggleSidebar} > <IoIosClose/></button>
            </div>
          
            <div className="navbar__menu">
                <ul className="navbar__menu__list">
                    <li className="navbar__menu__item selected"> <a href="#">Home </a> </li>
                    <li className="navbar__menu__item"> <a href="#">Portfolio </a> </li>
                    <li className="navbar__menu__item"> <a href="#">Certificates </a> </li>
                </ul>
            </div>
            <div className="navbar__languages"> 
                <div className='language'>
                    <button > EN </button>
                </div>
                <div className='language selected'>
                    <button > ES </button>
                </div>
            </div>
        </div>
    </div>);
}

export default NavBar;