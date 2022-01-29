import './GroceryItems.css'
import { useNavigate } from 'react-router-dom';

const GroceryItems=({imageUrl,title,linkUrl,match})=>{

    const navigate = useNavigate();
  
     return(
     
     <div className="grocery-items">
           
     <img className="image" src={imageUrl} alt='Images'/>
     <div className='title'><h2>{title}</h2></div>
     <button className='btn btn-primary' onClick={()=>{navigate(linkUrl)}}>SHOP NOW</button>
     
    </div>
);
       

}

export default GroceryItems;