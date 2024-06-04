import { FaBars } from "react-icons/fa";

const NavBar = () =>{
    return (
    <div className="navbar">
       <div className="navbar__button"><FaBars/></div>
       <div className="navbar__languages"> 
              <div className='language'>
                EN
              </div>
              <div className='language selected'>
                ES
              </div>
       </div>
    </div>);
}

export default NavBar;