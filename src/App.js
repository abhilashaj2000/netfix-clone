import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Loginscreen from './screens/Loginscreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //login
      
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //logout
        dispatch(logout()) 
      }
    });
    return ()=>{
      unsubscribe();
    };
  },[dispatch])
  return (
    <div className='app'> 
          <Router>
            {!user?(
              <Loginscreen/>
            ): (
            <Routes>
              <Route path="/" element={<HomeScreen/>}/>  
              <Route path="/profile" element={<ProfileScreen/>}/>
            </Routes>
          )}
          </Router>
    </div>
  );
}

export default App;
