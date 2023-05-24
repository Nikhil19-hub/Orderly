import React from 'react'

const ProductDetailCard = ({product, onAddProduct}) => {
  return (
    <div className="p-4 m-4 rounded-lg bg-slate-50">
            <div className="flex flex-col items-center justify-between">
                <h2 className="text-3xl">{product.name}</h2>
                <p className="text-2xl text-gray-500">
                    {product.desciption}
                </p>
                
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="flex items-center justify-between">
                    <div className="text-3xl text-black">${product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <button onClick={onAddProduct} class="relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 m-2 p-2 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Add to Cart
  </span>
</button>
            </div>
        </div>
  )
}

export default ProductDetailCard