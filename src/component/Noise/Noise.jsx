import React from "react";
import NoiseData from "./NoiseData";
import Preview from "../Preview/Preview";

class Noisee extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:NoiseData
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

export default Noisee;