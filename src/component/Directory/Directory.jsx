import React from "react";
import './Directory.scss'
import Menuitem from "../MenuItem/Menuitem";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import {connect} from 'react-redux'

const  Directory =({sections})=>{
    return(
            <div className="directory-menu">
                {
                    sections.map( ({id,...otherSectionsProps}) =>(
                        <Menuitem key={id} {...otherSectionsProps} />
                    ))
                }
            </div>
        )
    }

const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySection
})   


export default connect(mapStateToProps)(Directory)