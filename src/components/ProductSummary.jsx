import { useSelector } from "react-redux"
import { cartProducts } from "../stores/cart/cartSlice"
import ProductSummaryCard from "./ProductSummaryCard"


const ProductSummary = () => {
    const cart = useSelector(cartProducts)
    console.log('In productSummary: ', cart)
  return (
    <div className="flex flex-col">
            { cart && cart?.map((product, index) => {
              console.log("In productSummary each: ", product)
                return (
                    <ProductSummaryCard product={product} key={index} />
                )
            })}
        </div>
  )
}

export default ProductSummary