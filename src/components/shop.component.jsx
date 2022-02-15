import React from "react";
import shopdata from "../Data/shopdata";
import Shoppreview from "./shopPreview.component";

class Shop_component extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:shopdata
        };
    }
render()
{
    return(
      
      this.state.collections.map(({ id, ...otherCollectionProps }) => (
            <Shoppreview key={id} {...otherCollectionProps} />
          ))
    );
}

}

export default Shop_component;