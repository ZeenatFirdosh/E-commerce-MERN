import './nav.css'
import {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa" 
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);
    const [activeNav, setActiveNav] = useState('#');
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY >= 100){
        setColor(true);
      }else{
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="container__navbar">
        <div className="logo">
          <Link to="/">E-Commerce</Link>
        </div>
        <div className="nav-elements">
            
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to="/" rel="noreferrer" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/products" rel="noreferrer" onClick={() => setActiveNav('/products')} className= {activeNav ==='/products' ? 'active' : ''}>Products</Link></li>
                <li><Link to="/search" rel="noreferrer" onClick={() => setActiveNav('/search')} className= {activeNav ==='/search' ? 'active' : ''}>Search</Link></li>
                <li><Link to="/about" rel="noreferrer" onClick={() => setActiveNav('/about')} className= {activeNav ==='/about' ? 'active' : ''}>About</Link></li>
                <li><Link to="/contact" rel="noreferrer" onClick={() => setActiveNav('/contact')} className= {activeNav ==='/contact' ? 'active' : ''}>Contact</Link></li>
                <li><Link to="/login" rel="noreferrer" onClick={() => setActiveNav('/login')} className= {activeNav ==='/login' ? 'active' : ''}>Login</Link></li>
          </ul>
          <div className="hamburger" onClick={handleClick} size={20}>
            {click ?(
              <FaTimes />
              ) :(
                <FaBars />
                )}
            </div>
            

        </div>
      </div>
    </div>
  )
}

export default Navbar