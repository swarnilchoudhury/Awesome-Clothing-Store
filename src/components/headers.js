import { Link } from 'react-router-dom';
import './headers.css'


const Headers=()=>(

<>
    <div className='headers'>
        <h2 className='h2'>Awesome Grocery Store</h2>
        <div className='headers-children'>
  
            <Link className='headers-children' to="/">Home Page</Link>

            <Link  className='headers-children'to="/shop">SHOP NOW</Link>

            <Link  className='headers-children' to="/Contact">Contact Us</Link>
            <img className='images' src='https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png'/>
            <Link  className='cart' to="/cart">Cart</Link>
            <Link  className='sign' to="/Sign">SIGN IN</Link>
            </div>
            </div>
        </>

);

export default Headers;