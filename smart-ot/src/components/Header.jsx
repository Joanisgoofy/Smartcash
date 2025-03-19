import { Link } from 'react-router-dom'; // Import Link
import Logo from '../assets/Logo.webp'
import '../App.css'

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <h1>Smart-OT</h1>
          <img src={Logo} alt="Smart-OT Logo" width="100" />
        </div>
        <div className='nav-links'>
          <a href="#services">Products & Services</a>
          <a href="">Locate an Agent</a>
          <a href="#help">Help & Support</a>
          <a href="about">About Us</a>
          <a href="#agent">Become an Agent</a>
        </div>
        <div className='cta'>
          <Link to="/login">
            <button>Login / Signup</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;