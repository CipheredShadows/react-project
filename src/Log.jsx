import React from 'react'
import logo from './assets/images/logo.png';
import Google from './assets/images/Google.png';
import fb from './assets/images/fb.png';
import apple from './assets/images/apple.png';

const Log = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
         
          <div className='h-20 w-full bg-white shadow-lg flex items-center justify-center gap-2'>
            <img src={logo} className='h-10 w-10 '/>
            <div style={{ color: "#0a56af" }} className="font-bold ">CompraloVendelo</div>
          </div>
    
        
          <div className='mt-20 flex flex-col sm:flex-row items-center justify-center gap-5 font-bold text-2xl'>
            <span className='border-b-4 rounded border-blue-700 text-black-500'>Log in</span>
            <span className='text-gray-500'>Sign up</span>
          </div>
    
        
          <div className='flex justify-center mt-10'>
            <form className="w-full max-w-md">
              <div className='flex flex-col mb-4'>
                <label className='text-gray-700'>Email</label>
                <input type="email" placeholder='Enter Email' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
              </div>
              <div className='flex flex-col mb-4'>
                <label className='text-gray-700'>Password</label>
                <input type="password" placeholder='Create Password' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
              </div>
              <div className='flex items-center justify-center text-white w-full bg-[#0a56af] p-3 border rounded mt-3 transition-all duration-200 hover:-translate-y-1'>
                <button className='w-full'>Log in</button>
              </div>
              <div className='text-blue-800 flex items-center justify-center mt-2'>Forgot your password?</div>
            </form>
          </div>
    
        
          <div className='flex flex-col items-center mt-7 gap-5'>
      
            <div className='relative h-12 w-full max-w-md bg-white shadow-lg flex items-center justify-center rounded-md transition-all duration-200 hover:-translate-y-1'>
              <img src={Google} className='absolute left-3 h-9 w-10'/>
              <div>Continue with Google</div>
            </div>
          
            <div style={{ backgroundColor: "#1877f2" }} className='relative h-12 w-full max-w-md flex items-center justify-center rounded-md text-white transition-all duration-200 hover:-translate-y-1'>
              <img src={fb} className='absolute left-3 h-9 w-10'/>
              <div>Continue with Facebook</div>
            </div>
          
            <div style={{ backgroundColor: "#1c1c1c"}} className='relative h-12 w-full max-w-md flex items-center justify-center rounded-md text-white transition-all duration-200 hover:-translate-y-1 mb-10'>
              <img src={apple} className='absolute left-3 h-9 w-10'/>
              <div>Continue with Apple</div>
            </div>
          </div>
        </div>
  )
}

export default Log