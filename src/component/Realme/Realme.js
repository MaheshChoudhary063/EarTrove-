import React from "react";
import RealmeData from "./Realme.data";
import Preview from "../Preview/Preview";

class Realmee extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:RealmeData
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

export default Realmee;