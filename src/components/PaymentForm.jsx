import { useSelector, useDispatch } from "react-redux"
import { clearAddress, getAddress } from "../stores/userInfo/addressSlice"
import { clearCart, cartProducts } from "../stores/cart/cartSlice"
import  {useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react"


const PaymentForm = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()
    const cart = useSelector(cartProducts)
    const address = useSelector(getAddress)
    const navigate = useNavigate()

    const handleSubmit = (data) =>{
        data.preventDefault()
        console.log(data.target[0].value)
        navigate('/payment')
    }
  return (
     <form className="md:-2/3 md:mx-auto px-2 pt-1" id="payment-form" onSubmit={handleSubmit}>
            <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
             <div class="input_text mt-6 relative"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="John Snow" required/> <span class="absolute left-0 text-sm -top-4">Cardholder Name</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
        <div class="input_text mt-8 relative"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" required/> <span class="absolute left-0 text-sm -top-4">Card Number</span> <i class="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
        <div class="mt-8 flex gap-5 ">
            <div class="input_text relative w-full"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my"  required/> <span class="absolute left-0 text-sm -top-4">Expiry</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
            <div class="input_text relative w-full"> <input type="text" class="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" required/> <span class="absolute left-0 text-sm -top-4">CVV</span> <i class="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
        </div>
        <div class="flex justify-center mt-4"> <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Pay Now
  </span>
</button></div>
        </form>
  )
}

export default PaymentForm