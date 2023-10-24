import React from "react";
import MiviData from "./Mivi.data";
import Preview from "../Preview/Preview";

class Mivii extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:MiviData
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

export default Mivii;