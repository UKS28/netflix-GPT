import React from 'react'
import { auth } from '../utils/firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Netflix_Logo, AVATAR } from '../utils/constant';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
const Header = () => {
   const dispatch =useDispatch();
   const user=useSelector(store=>store.user);
   const navigate=useNavigate()
   const handleSignout=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.

      }).catch((error) => {
        // An error happened.
        navigate('/error');

      });
   }

   
  useEffect(()=>{
    // console.log("useffect");
  const unSubscribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid ,displayName, email, photoURL }= user;
          dispatch((addUser({uid:uid, displayName:displayName,email:email ,photoURL:photoURL})));
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate('/');
        }
      });
  //  unsubscribe when compinent unmount
  return ()=> unSubscribe();
      
  },[])


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className="w-44"
      src={Netflix_Logo}
      alt='logo'/>
     

      {user &&<div className='flex p-2'>
          <img alt='user-icon ' className='w-12 h-12'
           src={AVATAR} />
          <button 
            onClick={handleSignout} 
            className='p-2 m-2 bg-red-700 font-bold text-white'>
            (Sign Out)
          </button>
      </div>
      }
     </div>
  )
}

export default Header
