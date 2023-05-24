
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
                        // <Button onClick={handleLogout}>Log Out</Button>
                        <button onClick={handleLogout} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Log Out
  </span>
</button> : 
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
