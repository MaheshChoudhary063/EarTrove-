import React from 'react'
import './menuitem.scss'
import { useNavigate } from 'react-router-dom';
const Menuitem = ({title,imageUrl,linkUrl}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(linkUrl);
  };

  return (
    <div>
      <div className='menu-item'>
            <div className='content'>
            <img src={imageUrl} onClick={handleClick} alt='imagealt'/>
                <h1 className='title' >{title}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    </div>
  )  

}

export default Menuitem
