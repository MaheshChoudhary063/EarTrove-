// import React from 'react';
// import { connect } from 'react-redux';
// import {  Routes, Route, Navigate } from 'react-router-dom';
// // import { useNavigate} from 'react-router-dom';
// import Home from './component/Home/Home';
// import Shop from './component/Shop/Shop';
// import './App.css'
// import Header from './component/Header/Header';
// import SignInSignUp from './component/SignInSignUp/SignInSignUp';
// import Boatt from './component/Boat/Boat';
// import Noisee from './component/Noise/Noise';
// import { auth ,createUserProfileDocument} from './Firebase/FirebaseUtils';
// import {setCurrentUser} from './redux/user/user.action'
// class App extends React.Component {

//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { setCurrentUser }=this.props;

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//       if (userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
         
//             setCurrentUser( {
//               id: snapShot.id,
//               ...snapShot.data()
//             })
//          Navigate('/')
//         });
//       }else{

//       setCurrentUser(userAuth );
//       }
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth();
//   }

//   render(){
//   return (
   
//       <div>
//       {/* <Header currentUser={this.state.currentUser}/> */}
//       <Header/>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/Shop' element={<Shop/>}/>
//           {/* <Route path='/signin' element={<SignInSignUp/>}/> */}
//           {/* <Route  exact path='/signin' render={()=> this.props.currentUser ? (<Navigate to='/' />) :(<SignInSignUp/>)}/> */}
//           <Route
//             exact
//             path="/signin"
//             element={this.props.currentUser ? <Navigate to="/" /> : <SignInSignUp />}
//           />
//           <Route path='/Boatt' element={<Boatt/>}/>       
//           <Route path='/Noisee' element={<Noisee/>}/> 

         
//         </Routes>
//       </div>

//   );
// }
// }

// const mapStateToProps=({user})=>({
//   currentUser:user.currentUser
// })
// const mapDispatchToProps=dispatch=>({
//   setCurrentUser:user=>dispatch(setCurrentUser(user))
// });

// export default connect(mapStateToProps,mapDispatchToProps)(App);

import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './component/Home/Home';
// import Shop from './component/Shop/Shop';
import Shop from './component/Shop/Shop'
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import SignInSignUp from './component/SignInSignUp/SignInSignUp';
import Boatt from './component/Boat/Boat';
import Noisee from './component/Noise/Noise';
import Mivii from './component/Mivi/Mivi';
import Realmee from './component/Realme/Realme';
import { auth, createUserProfileDocument } from './Firebase/FirebaseUtils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector'; 
import CheckoutPage from './component/CheckOut/Checkout';
import './App.css';
function App({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // navigate('/');
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser, navigate]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route exact path="/checkout" element={<CheckoutPage/>} />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInSignUp />}
        />
        <Route path="/Boatt" element={<Boatt/>} />
        <Route path="/Noisee" element={<Noisee/>} />
        <Route path="/Mivii" element={<Mivii/>}/>
        <Route path='/Realmee' element={<Realmee/>}/>
      </Routes>
    </div>
  );
}

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
