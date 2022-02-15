import React from "react";
import Shoppreview from "../components/shopPreview.component";
import shopdata from "../Data/shopdata";

class BiscuitsPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
           biscuits:shopdata
        }
    }
render()
{
    return(
      this.state.biscuits.filter((items)=>(items.id==1)).map(({id,...otherProps})=>(
      <Shoppreview key={id} {...otherProps}/>
           
      ))


    );
}
}


export default BiscuitsPage;