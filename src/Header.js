import wishlist from './/images/wishlist.png';
import cart from './/images/cart.png'
import './Header.css';

function Header() {
    return (
        <>
            <div id="header">
                <p id='logo'>MY STORE</p>
                <input type='text' id='search'></input>
                <button>serach</button>
                <div className='burger'>
                    <p></p>
                    <p></p>
                    <p></p>

                </div>
                <div className=' wishlist'>
                    <img className='wishlistimage ' src={wishlist} />
                    <img className='wishlistimage' src={cart} />

                </div>

            </div>
        </>
    )

}
export default Header;