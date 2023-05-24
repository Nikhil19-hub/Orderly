import Tabs from "../../components/Tabs"
import {useSelector} from "react-redux"
import {selectAllProducts} from '../../stores/menu/productSlice'
import {cartProducts} from '../../stores/cart/cartSlice'
import useTabSwitch from '../../hooks/useTabSwitch'
import { useState } from 'react'
import DeliveryForm from "../../components/DeliveryForm"
import ProductSummary from "../../components/ProductSummary"
import PaymentForm from "../../components/PaymentForm"


const Cart = () => {
  const cart = useSelector(cartProducts)
  const tabs = ['Summary', 'Delivery', 'Payment']
  const [currentTab, handleTabSwitch] = useState(tabs, 'Summary')

  if (!cart || cart.length === 0) {
    return (
      <div className='bg-white h-full text-black flex justify-center'>Your cart is empty</div>
    )
  }
  return (
    <div className="bg-white h-screen text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab}/>
      <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ' '}`}><ProductSummary/>
      <div className="flex justify-end p-2">
        <button onClick={() => handleTabSwitch('Delivery')} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-red-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Next
  </span>
</button>
      </div>
      </div>
      <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ' '}`}><DeliveryForm onTabSwitch={handleTabSwitch}/></div>
      <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ' '}`}><PaymentForm/></div>
      </div>
  )
}

export default Cart