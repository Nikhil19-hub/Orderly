import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Home from '../pages/home/index'
import Contact from '../components/Contact'
import Login from '../pages/login'
import Register from '../pages/register'
import Cart from '../pages/cart'
import Menu from '../pages/menu'
import Payment from '../pages/payment'
import About from "../components/About"
import Footer from "../components/Footer"
import { useSelector } from "react-redux"
import {cartProducts} from "../stores/cart/cartSlice"

const Navigation = () => {
  const productsInCart = useSelector(cartProducts)
  return (
<>
    <Header cartCount={productsInCart ? productsInCart.length : 0}/>
    {/* <Banner/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
    <Footer/>
</>
  )
}

export default Navigation