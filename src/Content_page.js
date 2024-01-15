import axios from 'axios'
import React, { useEffect } from 'react'

   function Content_page() {
    function api(){
    axios.get(' https://fakestoreapi.com/products')
    .then(response => {
      console.log(response.data);
    }, error => {
      console.log(error);
    });
    }
 useEffect(()=>{
    api()
 },[])

  return (
   <>
  
   </>
  )
}
export default Content_page;