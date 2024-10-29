import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fetctproductlist } from './actions/Actions';



function Content_page() {
  const dispatch = useDispatch()
  const { productList } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(Fetctproductlist());
  }, [])

  console.log(productList)
  return (
    <>
      <div className='flex flex-wrap ms-5 mt-5'>
      {
        productList.map((product, index) => {
          return (
            <div class="w-52 rounded overflow-hidden shadow-lg flex items-center flex-col mb-5 ms-3">
              <img class="w-28 h-28 hover:w-32 hover:h-32" src={product.image} alt="Image description"/>
                <div class="p-4">
                  <h5 class="font-bold mb-2">{product.title}</h5>
                  <h5 class="font-bold mb-2">{product.price}$</h5>
                  <a href="#" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Cart
                  </a>
                </div>
            </div>

          )
        })
      }
      </div>
    </>
  )
}
export default Content_page;