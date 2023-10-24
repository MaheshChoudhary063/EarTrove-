import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollection } from "../../redux/shop/shop.selector";
import Preview from '../Preview/Preview'
import './CollectionOverview.scss'
const CollectionOverview = ({collections}) => { 
  return (
    <div className='collections-overview'>
        {
                    collections.map(({id,...otherCollectionProps})=>(
                        <Preview key={id} {...otherCollectionProps}/>
                    ))
                }
    </div>
  )
}
const mapStateToProps=createStructuredSelector({
    collections:selectCollection
})


export default connect(mapStateToProps)(CollectionOverview)