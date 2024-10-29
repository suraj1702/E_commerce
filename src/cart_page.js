import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetctCartproductlist } from './actions/Actions';

function Cart_page() {

    const dispatch = useDispatch();
    const { cartlistdata } = useSelector((state) => state.cartdata)

console.log(cartlistdata)
    useEffect(()=>{
        dispatch(FetctCartproductlist())
    },[])
  return (
    <div>Cart_page</div>
  )
}

export default Cart_page