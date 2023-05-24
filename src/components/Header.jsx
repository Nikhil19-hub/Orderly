
import { Link, useNavigate } from "react-router-dom"
import Logo from '../assets/images/logo.png'
import Cart from '../assets/icons/cart.svg'
import { useEffect, useState } from "react";

const Header = ({cartCount}) => {
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState(false)

  const handleLogout = () => {
    sessionStorage.removeItem('Auth token')
    sessionStorage.removeItem('User Id');
    window.dispatchEvent(new Event("storage"))
    navigate("/")
  }

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, []) 

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
          {
                        isLogged ? 
<button onClick={handleLogout} type="submit" class="
          w-50
          px-6
          py-2.5
          bg-red-600
          text-yellow-400
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-orange-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Log Out</button> : 
                        (
                            <>
                              <Link to="/login" className="text-xl">Login</Link>
                              <Link to="/register" className="text-xl">Sign Up</Link>
                            </>
                        )
                    }
          <Link to="/cart" className="mr-4 relative" ><img src={Cart} alt="cart" />
          {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
          </Link>
        </div>
        <div className="flex item-center justify-center space-x-4">
          
          
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
