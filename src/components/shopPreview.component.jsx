import { Link } from "react-router-dom";
import './shopPreview.styles.css';
import "./GroceryItems.css"

const Shoppreview=({title,routeName,items})=>{
return(
    <>
    <div>   
    <Link style={{textDecoration:'none',color:'red',padding:'10px'}} to={`/${routeName}`}><h2>{title}</h2></Link>
    <hr/>
    {
        items.map(({name,imageUrl,price})=>(
            <>
            <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
      <button className='btn btn-success'>ADD TO CART</button>
    <div className='collection-footer'>
      <span className='price'>{name}</span>
      <span className='price'>Rs.{price}</span>
    </div>
  </div>

            </>
           
        ))
    }
    </div>
    </>

);

}

export default Shoppreview;