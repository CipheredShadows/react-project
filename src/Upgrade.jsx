import React from 'react'
import logo from './assets/images/logo.png';
import Vector from './assets/images/Vector.png';
import ve from './assets/images/ve.png';

const Upgrade = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0 bg-gray-50">
      
        <div className='h-20 w-full bg-white shadow-lg flex items-center justify-between px-4'>
            <div className='flex items-center gap-2'>
                <img src={logo} className='h-10 w-10' alt="Logo" />
                <span style={{ color: "#0a56af" }} className="font-bold">CompraloVendelo</span>
            </div>
            <div className='text-blue-800 font-medium cursor-pointer hover:text-blue-600 transition-colors'>Sign Out</div>
        </div> 
        
        
        <div className="max-w-6xl mx-auto">

          <div className='flex items-center justify-center px-4 py-4'>
            <h1 className='text-2xl md:text-3xl font-bold mt-12 md:mt-20 text-center'>Choose the plan that's right for you!</h1>
          </div>
          
          
          <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20 justify-center items-center mt-9 px-4 mb-9'>
           
            <div className='border-2 rounded-2xl border-blue-800 h-auto w-full max-w-[362px] flex items-center justify-center p-6 bg-white'> 
              <div className='text-center w-full'>
                <h2 className='border-2 rounded-2xl border-blue-800 p-3 text-2xl md:text-3xl font-bold'>Basic</h2>
                <h1 style={{color:" #0A56AF"}} className='font-bold mt-6 text-5xl md:text-6xl'>Free</h1>
                <ul style={{color:" #81A7BA"}} className='text-blue-300 mt-9 mb-7 space-y-3'>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />Access to tools</li>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />Home loan</li>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />Loan calculators</li>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />New offers</li>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />Discounts</li>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />Special deals</li>
                  <li className='flex items-center gap-2 line-through'><img src={Vector} alt="X" />carfax</li>
                </ul>
                <button className='bg-blue-100 w-full max-w-42 p-3 border-blue-100 rounded-lg text-blue-800 font-medium hover:bg-blue-200 transition-colors'>Choose Plan</button>
              </div>
            </div>
           
            <div className='border-2 rounded-2xl border-blue-800 h-auto w-full max-w-[362px] flex items-center justify-center p-6 bg-white '> 
              <div className='text-center w-full'>
                <h2 className='border-2 rounded-2xl border-blue-800 p-3 text-2xl md:text-3xl font-bold'>Premium</h2>
                <h1 style={{color:" #0A56AF"}} className='font-bold mt-6 text-5xl md:text-6xl'>$10 <span className='text-sm md:text-base'>/MONTH</span></h1>
                <ul className='text-blue-800 mt-9 mb-7 space-y-3'>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />Access to tools</li>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />Home loan</li>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />Loan calculators</li>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />New offers</li>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />Discounts</li>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />Special deals</li>
                  <li className='flex items-center gap-2'><img src={ve} alt="✓" />carfax</li>
                </ul>
                <button className='bg-blue-100 w-full max-w-42 p-3 border-blue-800 rounded-lg text-blue-800 font-medium hover:bg-blue-200 transition-colors'>Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Upgrade