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
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='bg-white m-2 p-2 h-8 w-10  rounded-md '>\<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> */}
            <img className='h-8 w-8 rounded-2xl'   src='data:image/png;base64,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'/>
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
