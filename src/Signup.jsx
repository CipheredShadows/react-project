import React from 'react'
import logo from './assets/images/logo.png';
import Google from './assets/images/Google.png';
import fb from './assets/images/fb.png';
import apple from './assets/images/apple.png';


const Signup = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <div className='h-20 w-full bg-white shadow-lg flex items-center justify-center gap-2'>
              <img src={logo} className='h-10 w-10 '/>
              <div style={{ color: "#0a56af" }} className="font-bold ">CompraloVendelo</div>
            </div>
 
      <div className='mt-20 flex flex-col sm:flex-row items-center justify-center gap-12 font-bold text-2xl'>
        <span className='text-gray-500'>Log in</span>
        <span className='border-b-4 rounded border-blue-700 text-black'>Sign up</span>
      </div>
      <div className='flex justify-center mt-10'>
        <form className="w-full max-w-md">
          <div className='flex flex-col mb-4'>
            <label className='text-gray-700'>Username</label>
            <input type="email" placeholder='Enter Username' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-gray-700'>Phone Number</label>
            <input type="password" placeholder=' +41 | 123456789' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-gray-700'>Email</label>
            <input type="email" placeholder='Enter Email' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-gray-700'>Password</label>
            <input type="password" placeholder='Create Password' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='text-gray-700'>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' className='border border-gray-300 p-2 w-full mt-3 rounded'/>
          </div>
          <div className='flex items-center gap-3 text-sm'>
            <input type="checkbox" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ' />
            <label>I have raed and agree to the <span className='text-blue-700'>Privacy Policy</span> & <span className='text-blue-700'>Terms & Conditions.</span></label>
          </div>
          <div className='flex items-center justify-center text-white w-full bg-[#0a56af] p-3 border rounded mt-3 transition-all duration-200 hover:-translate-y-1'>
            <button className='w-full'>Sign up</button>
          </div>
          <div className='text-blue-800 flex items-center justify-center mt-2 transition-all duration-200 hover:-translate-y-1'>Forgot your password?</div>
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
             
              <div style={{ backgroundColor: "#1c1c1c"}} className='relative h-12 w-full max-w-md flex items-center justify-center rounded-md text-white mb-10 transition-all duration-200 hover:-translate-y-1 '>
                <img src={apple} className='absolute left-3 h-9 w-10'/>
                <div>Continue with Apple</div>
              </div>
            </div>
    </div>
  )
}

export default Signup