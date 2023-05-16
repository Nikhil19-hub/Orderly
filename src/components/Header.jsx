
import { Link } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import Cart from '../assets/icons/cart.svg'

const Header = () => {
  return (
    <header>
    <nav id="header" className="bg-black text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={Logo} alt="logo" className="w-30 h-40 object-cover" />
          </Link>
        </div>
        <div className="mav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">Home</Link>
          <Link to="/about" className="text-xl">About</Link>
          <Link to="/contact" className="text-xl">Contact Us</Link>
        </div>
        <div className="flex item-center justify-center space-x-4">
          
          <Link to="/login" className="text-xl">Login</Link>
          <Link to="/register" className="text-xl">Sign Up</Link>
          <Link to="/cart" ><img src={Cart} alt="cart" /></Link>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
