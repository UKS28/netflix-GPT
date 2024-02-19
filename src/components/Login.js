import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';
import { NETFLIX_BG} from '../utils/constant'
const Login = () => {

   const dispatch=useDispatch();
   const [issignin,setIssignin] =useState(false);
   const [errorMessage,setErrorMessage]=useState(null)
   const name=useRef(null);
   const email=useRef(null);
   const password=useRef(null);
   
   const handleSubmit=()=>{
       const mssg=checkValidData(email.current.value,password.current.value);
        setErrorMessage(mssg);
        if(mssg)  return;

        if(!issignin)
        {
            // signup
             createUserWithEmailAndPassword(
                auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // update profile

                // console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocL4KCVArrFgV9Z2JSaTetKnEyEFQGbQCfl4FFpXtkZ0=s441-c-no"
                    }).then(() => {
                        // Profile updated!
                        const { uid ,displayName, email, photoURL }= auth.currentUser;
                        dispatch((addUser({uid:uid, displayName:displayName,email:email ,photoURL:photoURL})));
                        
                       
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                  
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode," - ",errorMessage);
            });

        }
        else
         {
            // signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
               
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode," - ",errorMessage);
            });

         }
   }

  return (
    <div>
       <Header/>
       <div className='absolute'>
        <img src={NETFLIX_BG} alt="" />
       </div>
       
       
       <form 
       className='w-3/12 p-12  bg-black  absolute my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90'
       onSubmit={(ev)=>{ev.preventDefault()}}
       >
            <h1 className='font-bold text-3xl py-4'>{issignin?"Sign in":"Sign Up"}</h1>
            {!issignin && <input ref={name} type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>}
            <input ref={email} type="text" placeholder='Email id' className='p-2 my-2 w-full bg-gray-700'/>
            <input ref={password} type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
            <p className='font-bold text-red-600 text-lg p-2'>{errorMessage}</p>
            <button 
                onClick={handleSubmit}
                className='p-3 my-4 bg-red-700 w-full rounded-md'>
                {issignin?"Sign in":"Sign Up"}
            </button>
            <p className='py-2 cursor-pointer'
             onClick={()=>setIssignin(!issignin)}>{!issignin?"Already Registered? Click to signin":"New User? Click here to Register"}
             </p>
       </form>
      
    </div>
  )
}

export default Login
