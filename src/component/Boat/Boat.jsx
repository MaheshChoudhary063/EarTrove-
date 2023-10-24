import React from "react";
import BoatData from "./Boat.data";
import Preview from "../Preview/Preview";

class Boatt extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:BoatData
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id,...otherCollectionProps})=>(
                        <Preview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }   

}

export default Boatt;