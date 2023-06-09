import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  {UserAuth}  from '../context/AuthContext'

const Signup = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/46bc87cd-4c4c-4485-8b93-d5f21c581d56/IN-en-20230710-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="mex-w=[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p><input type="checkbox"  className='mr-2'/>Remember Me</p>
                  <p>Need Help?</p>
                </div>
                  <p className="py-8">
                    <span className='text-gray-600'>Already subscribed to Netflix?
                    </span>{' '}
                     <Link to='/login'>Sign In</Link>
                    </p>
              </form>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup
