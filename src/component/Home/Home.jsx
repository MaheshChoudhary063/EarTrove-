import React from 'react'
import './Home.scss'
import Directory from '../Directory/Directory'
import Video from '../../assests/video.mp4'

const Home = () => {
  return (
    <div>
         <div className='home'>
          <div className='mainText'>
            <h1>" Amplify Your Story with Us "</h1>
          </div>
                
          <div className='videoDiv'>
            <video src={Video}  autoPlay muted loop  className='video'></video>
          </div>
          </div>
                

    <div className='homepage'>
            <Directory/>
            <Directory/>
            <Directory/>
        </div>
    </div>
  )
}

export default Home