import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { auth } from '../Firebase';
import Nav from '../Nav'
import './ProfileScreen.css'


function ProfileScreen() {
    const user =useSelector(selectUser);

  return (
    <div className='profilescreen'>
     <Nav/>
     <div className='profilescreen_body'>
         <h1>Edit Profile</h1>
         <div className='profilescreen_info'>
             <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
             <div className='profilescren_details'>
                 <h2>{user.email}</h2>
                 <div className='profileScreen_plans'>
                     <h3>Plans (Current Plan Premiun)</h3>
                     <button onClick={()=>auth.signOut()} className='button'>Sign Out</button>
                 </div>
             </div>
         </div>
     </div>
    </div>
  )
}

export default ProfileScreen
