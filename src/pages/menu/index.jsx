import { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts, selectAllProducts } from '../../stores/menu/productSlice'
import ProductDetailCard from '../../components/ProductDetailCard'
import Tabs from '../../components/Tabs'
import { addTOCart } from '../../stores/cart/cartSlice'

const Menu = () => {
  const dispatch = useDispatch()
  const product = useSelector(selectAllProducts)
  const [activeTab, setActiveTab] = useState('') 
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const onAddProduct = (product) => {
  dispatch(addTOCart(product))
}
const onTabSwitch = (newActiveTab ) => {
setActiveTab(newActiveTab)

let categories = product.products.map((product) => product.name.name)
let index = categories.findIndex(category => newActiveTab === category)
if (index > -1){
setActiveTabIndex(index)
}else {
  setActiveTabIndex(0)

}
}


  return (
    <div className='bg-white '>
      {
        product.status !== 'fulfilled'?
        <div>Loading...</div> :
        <div className='menu-wrapper'>
          {
            product.products && 
            <Tabs 
            list={product.products.map((product) => product.name.name)}
            activeTab={activeTab}
            onTabSwitch={onTabSwitch}
            />
          }
          {
            product.products && product.products[activeTabIndex]?.products.map((product, index) => {
              return (
                <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct}/>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default Menu