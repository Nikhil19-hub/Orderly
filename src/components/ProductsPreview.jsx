import React, { useState, useEffect } from 'react'
import ProductPreviewCard from './ProductPreviewCard'
import Caraousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {useDispatch} from 'react-redux'
import { addTOCart } from '../stores/cart/cartSlice'

const ProductsPreview = () => {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    useEffect(() => {
        fetch('https://orderly-w729.onrender.com/api/products')
        .then(response => response.json())
        .then(data => setProduct(data?.data))
        .catch(e => console.log(e))
    }, [])

const onAddProduct = (product) => {
  dispatch(addTOCart(product))
}

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
        <h2>Products</h2>
        <Caraousel responsive={responsive}>
        {
            product.length > 0 && product.map((product, index) => {
                return(
                    <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
                    <ProductPreviewCard key={index} product={product} onAddProduct={onAddProduct}/>
                    </div>
                )
            })
        }
        </Caraousel>
    </div>
  )
}

export default ProductsPreview