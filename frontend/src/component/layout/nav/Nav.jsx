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
                <li><a href="/" rel="noreferrer" onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}>Home</a></li>
                <li><a href="/products" rel="noreferrer" onClick={() => setActiveNav('/products')} className= {activeNav ==='/products' ? 'active' : ''}>Products</a></li>
                <li><a href="/search" rel="noreferrer" onClick={() => setActiveNav('/search')} className= {activeNav ==='/search' ? 'active' : ''}>Search</a></li>
                <li><a href="/about" rel="noreferrer" onClick={() => setActiveNav('/about')} className= {activeNav ==='/about' ? 'active' : ''}>About</a></li>
                <li><a href="/contact" rel="noreferrer" onClick={() => setActiveNav('/contact')} className= {activeNav ==='/contact' ? 'active' : ''}>Contact</a></li>
                <li><a href="/login" rel="noreferrer" onClick={() => setActiveNav('/login')} className= {activeNav ==='/login' ? 'active' : ''}>Login</a></li>
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