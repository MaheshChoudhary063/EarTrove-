import React from 'react'
import { signOut} from 'firebase/auth';
import { database } from '../../Firebase/FirebaseUtils';
import { useNavigate } from 'react-router-dom';
// import './Home.css';
const HomeScreen = () => {
    const history = useNavigate()
      
    const handleClick = () =>{
        signOut(database).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
  return (
    <>
        <button onClick={handleClick}>Sign Out</button>
    </>
  )
}

export default HomeScreen