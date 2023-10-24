// import React from "react";
// import './SignIn.scss'
// import FormInput from "../FormInput/FormInput";
// import CustomButton from "../CustomButton/CustomButton";

// class SignIn extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             email:'',
//             password:''
//         }
//     }

//     handleSubmit=event=>{
//         event.preventDefault();

//         this.setState({email:'',password:''})
//     } 

//     handleChange=event=>{
//         const{value,name}=event.target;

//         this.setState({[name]:value})
//     }

//     render(){
//         return(
//             <div className="sign-in">
//                 <h2>I already have an account</h2>
//                 <span>Sign in with your eamil and password</span>

//                 <form onSubmit={this.handleSubmit}>
//                     <FormInput name="email" type="email" label='Email' handleChange={this.handleChange} value={this.state.email} required/>
   
//                     <FormInput name="password" type="password" label='Password' handleChange={this.handleChange} value={this.state.password} required/>
                 

//                     <CustomButton type="submit" value='Submit Form'>Sign In</CustomButton>
//                 </form>
//             </div>
//         )
//     }
// }
// export default SignIn


// import React from "react";
// import { useState } from "react";
// import './SignIn.scss'
// import FormInput from "../FormInput/FormInput";
// import CustomButton from "../CustomButton/CustomButton";
// import { database } from "../../Firebase/FirebaseUtils";
// import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



// const SignIn=()=>{
//     const [login, setlogin] = useState(false)
//     const history =useNavigate()

//     const handleSubmit=(e,type)=>{
//         e.preventDefault()
//         const email=e.target.email.value
//         const password=e.target.password.value
//         if(type === 'signup'){
//             createUserWithEmailAndPassword(database,email,password).then(data=>{
//                 console.log(data,"authData")
//                 history('/')
//             }).catch    (err=>{
//                 alert(err.code)
//                 setlogin(true)
//             })
//         }
//         else{
//             signInWithEmailAndPassword(database,email,password).then(data=>{
//                 console.log(data,'authData')
//                 history('/')

//             }).catch(err=>{
//                 alert(err.code)
//             })
//         }
//     }

//         return(
//             <div>
//                 <div>
                    
//                     <div className={login===false ? 'activeColor':"pointer"} onClick={()=>setlogin(false)}>SignUp</div>
//                     <div className={login===false ? 'activeColor':'pointer'} onClick={()=>setlogin(true)}>SignIn</div>                
//                 </div>
            
//             <div className="sign-in">
//                 <h1>{login ? 'SignIn':'SignUp'}</h1>
//                 <h2>I already have an account</h2>
//                 <span>Sign in with your eamil and password</span>

//                 <form onSubmit={(e)=>handleSubmit(e,login?'signin':'signup')}>
//                     <FormInput name="email" type="email" label='Email' required/>
   
//                     <FormInput name="password" type="password" label='Password'   required/>
                 

//                     <CustomButton type="submit" value='Submit Form'>{login ? 'SignIn':'SignUp'}</CustomButton>
//                 </form>
//             </div>
//             </div>
//         )
    
// }
// export default SignIn 

import React from 'react'
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../Firebase/FirebaseUtils';
import './SignIn.scss'
import { auth,createUserProfileDocument } from '../../Firebase/FirebaseUtils';
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>

      </div>
    );
  }
}

export default SignIn;