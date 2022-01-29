import React from "react";
import GroceryItems from "./GroceryItems.components";

class Directory extends React.Component{
   constructor(){
       super();

       this.state={
        sections: [
            {
              title: 'Biscuits & Cookies',
              imageUrl: 'https://images.pexels.com/photos/110934/pexels-photo-110934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 1,
              linkUrl: 'biscuits'
            },
            {
              title: 'Edible Oils',
              imageUrl: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 2,
              linkUrl: 'Oils'
            },
            {
              title: 'Snacks & Foods',
              imageUrl: 'https://images.pexels.com/photos/1582482/pexels-photo-1582482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 3,
              linkUrl: 'Snacks'
            },
            {
              title: 'Home Care',
              imageUrl: 'https://images.pexels.com/photos/4210336/pexels-photo-4210336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 4,
              linkUrl: 'homecare'
            },
            {
              title: 'Shampoos',
              imageUrl: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 5,
              linkUrl: 'shampoo'
            },
            {
              title: 'Dals & Cereals',
              imageUrl: 'https://www.educationworld.in/wp-content/uploads/2019/02/Untitled-design-23.jpg',
              id: 6,
              linkUrl: 'dals'
            },


        ]

       }
   }

   render(){

    return(
        <>
        <div className="directory">
           {
            this.state.sections.map(({id,...otherProps})=>(
                <GroceryItems key={id} {...otherProps}/>
            ))
        
           }
        </div>

          </>
    );
   }




}

export default Directory;