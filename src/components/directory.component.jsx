import React from "react";
import GroceryItems from "./GroceryItems.components";

class Directory extends React.Component{
   constructor(){
       super();

       this.state={
        sections: [
            {
              title: 'Biscuits',
              imageUrl: 'https://images.pexels.com/photos/110934/pexels-photo-110934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 1,
              linkUrl: 'biscuits'
            },
            {
              title: 'jackets',
              imageUrl: 'https://images.pexels.com/photos/110934/pexels-photo-110934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=238&w=197',
              id: 2,
              linkUrl: ''
            },
            {
              title: 'jackets',
              imageUrl: '',
              id: 2,
              linkUrl: ''
            },
            {
              title: 'jackets',
              imageUrl: '',
              id: 2,
              linkUrl: ''
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