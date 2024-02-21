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
import { setGptState } from '../utils/gptMovieSlice'; 
import { setLanguage } from '../utils/langConfigSlice';
import { useState } from 'react';
const Header = () => {
   const gptState=useSelector(store=> store.gptMovie.gptState);
   const user=useSelector(store=>store.user);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dispatch =useDispatch();
   const navigate=useNavigate();
   const handleSignout=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.

      }).catch((error) => {
        // An error happened.
        navigate('/error');
        
      });
   }
   
   const handleGptClick=()=>{
    // console.log("btn clicked");
    dispatch(setGptState());
   }
  //  
   const handleLanguageChange=(e)=>{
    // console.log(e.target.value);
    dispatch(setLanguage(e.target.value));
 
    // console.log(lang);
   }

   const handleLogoClick=()=>{
     if(gptState)
      dispatch(setGptState());

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
    <div className='fixed top-0 z-50 w-full flex items-center justify-between gap-4 px-4 md: py-3 bg-gradient-to-b from-black'>
      <img onClick={handleLogoClick}
      className="w-44 cursor-pointer"
      src={Netflix_Logo}
      alt='logo'/>
     

      {user &&<div className='flex p-2'>
          {!gptState &&
            <button class="hover:text-gray-400 flex gap-2 items-center mr-4"
                  onClick={handleGptClick} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='bg-white m-2 p-2 h-8 w-10  rounded-md '>\<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            <span className='text-white'>Search</span>
          </button>
          }
        {gptState && 
            <select 
              onChange={handleLanguageChange}
              className='mr-2 w-auto p-2'
             >
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          
         }
         
          <img alt='user-icon ' className='w-8 h-8 aspect-square cursor-pointer'
          onClick={()=>setIsDropdownOpen(!isDropdownOpen)}
           src={AVATAR} />
          {/* <button 
            onClick={handleSignout} 
            className='p-2 m-2 bg-red-700 font-bold text-white rounded-lg'>
            (Sign Out)
          </button> */}

          {isDropdownOpen && (
          <div className="origin-top-right absolute right-0 mt-14 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <button
              onClick={handleSignout}
              className='block p-2 text-sm text-red-700 hover:bg-gray-100 w-full text-left'
            >
              Sign Out
            </button>
          </div>
      )}

      </div>
      }
     </div>
  )
}

export default Header
