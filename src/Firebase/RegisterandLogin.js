import React, { useState } from 'react'
import { database } from './FirebaseUtils';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const RegisterAndLogin = () => {
    const[login,setlogin] = useState(false)

    const history=useNavigate()

    const handleSubmit =(e,type)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(type === 'signup'){
        createUserWithEmailAndPassword(database,email,password).then(data=>{
            console.log(data,"authData")
            history('/home')
        }).catch(err=>{
            alert(err.code)
            setlogin(true)
        })
    }
        else{
            signInWithEmailAndPassword(database,email,password).then(data=>{
                console.log(data,"authData")
                history('/home')}).catch(err=>{
                    alert(err.code)
                })
        }

    }
  return (
    <div className='App'>
    <div>
        <div className={login===false?'activeColor':'pointer'}  onClick={()=>setlogin(false)}>
            SignUp
        </div>
        <div className={login===false?'activeColor':'pointer'} onClick={()=>setlogin(true)}>SignIn</div>
    </div>
    <h1>{login?'SignIn':'SignUp'}</h1>
    <form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
        <input name='email' placeholder='Email'/>
        <br/>
        <input name='password' type='password' placeholder='Password'/><br/><br/>
        <button>{login?'SignIn':'SignUp'}</button>
    </form>
    </div>
  )
}

export default RegisterAndLogin