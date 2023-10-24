import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'

import './Preview.scss'
import { useNavigate } from 'react-router-dom';

const Preview = ({title,items,linkUrl}) => {

  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div className='collection-preview'>
        <h1 className='title' onClick={handleTitleClick}>{title}</h1>

        <div className='preview'>
            {
                items
                .filter((item,idx)=>idx<5)
                .map(item=>(
                <CollectionItem key={item.id} item={item}/>
            ))} 
        </div>
    </div>
  )
}

export default Preview
