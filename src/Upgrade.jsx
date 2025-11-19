import React from 'react'
import logo from './assets/images/logo.png';
import Vector from './assets/images/Vector.png';
import ve from './assets/images/ve.png';

const Upgrade = () => {
  return (
    <div className="px-4 sm:px-6 md:px-0">
        <div className='h-20 w-full bg-white shadow-lg flex items-center justify-between px-4'>
            <div className='flex items-center gap-2'>
                <img src={logo} className='h-10 w-10' />
                <span style={{ color: "#0a56af" }} className="font-bold">CompraloVendelo</span>
            </div>
            <div>Sign Out</div>
        </div> 
        <div>
          <div className='flex items-center justify-center px-4 py-4'>
            <h1 className='text-2xl font-bold mt-20'>Choose the plan that's right for you!</h1>
          </div>
        </div>
        <div className='flex flex-row flex-wrap gap-20 justify-center mt-9
'>
          <div className='border-2 rounded-2xl border-blue-800 h-auto w-[362px] flex items-center justify-center p-4'> 
            <div className='text-center'>
              <h2 className='border-2 rounded-2xl border-blue-800 p-2 text-3xl font-bold'>Basic</h2>
              <h1 style={{color:" #0A56AF"}} className='font-bold mt-6 text-6xl '>Free</h1>
              <ul style={{color:" #81A7BA"}} className='text-blue-300 mt-9 mb-7'>
                <li className=' flex items-center gap-2 line-through'><img src={Vector} />Access to tools</li>
                <li className='flex items-center gap-2 line-through'><img src={Vector} />Home loan</li>
                <li className='flex items-center gap-2 line-through'><img src={Vector} />Loan calculators</li>
                <li className='flex items-center gap-2 line-through'><img src={Vector} />New offers</li>
                <li className='flex items-center gap-2 line-through'><img src={Vector} />Discounts</li>
                <li className='flex items-center gap-2 line-through'><img src={Vector} />Special deals</li>
                <li className='flex items-center gap-2 line-through'><img src={Vector} />carfax</li>
              </ul>
              <button className='bg-blue-100 w-42 p-2 border-blue-100 rounded'>Choose Plan</button>
            </div>
            </div>
          <div className='border-2 rounded-2xl border-blue-800 h-auto w-[362px] flex items-center justify-center p-4'> 
            <div>
              <h2 className='border-2 rounded-2xl border-blue-800 p-3 text-3xl font-bold'>Premium</h2>
              <h1 style={{color:" #0A56AF"}}className='font-bold mt-6 text-6xl '>$10 <span className='text-xs'>/MONTH</span></h1>
              <ul  className='text-blue-800 mt-9 mb-7'>
                <li className=' flex items-center gap-2 '><img src={ve} />Access to tools</li>
                <li className='flex items-center gap-2 '><img src={ve} />Home loan</li>
                <li className='flex items-center gap-2 '><img src={ve} />Loan calculators</li>
                <li className='flex items-center gap-2 '><img src={ve} />New offers</li>
                <li className='flex items-center gap-2 '><img src={ve} />Discounts</li>
                <li className='flex items-center gap-2 '><img src={ve} />Special deals</li>
                <li className='flex items-center gap-2 '><img src={ve} />carfax</li>
              </ul>
              <button className='bg-blue-100 w-42 p-2 border-blue-100 rounded'>Choose Plan</button>
            
              </div>
            </div>
        </div>
        
 

    </div>
  )
}

export default Upgrade