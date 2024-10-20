import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fetctproductlist } from './actions/Actions';



function Content_page() {
  const dispatch =  useDispatch()
  const{productList} = useSelector((state) => state.product)

 useEffect(()=>{
    dispatch(Fetctproductlist());
 },[])

 console.log(productList)
  return (
   <>
    <p className='text-orange-400'>suraj</p>
   </>
  )
}
export default Content_page;