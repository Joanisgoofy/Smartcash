import Logo from '../assets/Logo.webp'
import '../App.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <h1>Smart-OT</h1>
          <img src={Logo} alt="Smart-OT Logo" width="100" />
        </div>
        <div className='nav-links'>
          <Link to="/services">Products & Services</Link>
          <Link to="">Locate an Agent</Link>
          <Link to="">Help & Support</Link>
          <Link to="">About Us</Link>
          <Link to="/agent">Become an Agent</Link>
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