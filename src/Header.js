import wishlist from './/images/wishlist.png';
import cart from './/images/cart.png'
import './Header.css';

function Header() {
    return (
        <>
            <div className='w-100 bg-red-200 flex justify-between p-1 content-center'>
                <p className='text-blue-900 content-center font-medium'>MY STORE</p>
                
                <input type='text' placeholder='Search' className='w-1/3 h-9 mb-4 content-center flex' ></input>
               

                <div className=' '>
                    {/* <img className='wishlistimage ' src={wishlist} /> */}
                    {/* <p>0</p> */}
                    <img className='w-9 mt-5' src={cart} />

                </div>

            </div>
        </>
    )

}
export default Header;