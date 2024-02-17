import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
 
   const [issignin,setIssignin] =useState(false);

  return (
    <div>
       <Header/>
       <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
       </div>
       
       
       <form className='w-3/12 p-12  bg-black  absolute my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90'>
            <h1 className='font-bold text-3xl py-4'>{issignin?"Sign in":"Sign Up"}</h1>
            {!issignin && <input type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>}
            <input type="text" placeholder='Email id' className='p-2 my-2 w-full bg-gray-700'/>
            <input type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
            <button 
            className='p-4 my-4 bg-red-700 w-full rounded-md'>
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
