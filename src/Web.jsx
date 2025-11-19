import React from 'react'
import logo from './assets/images/logo.png';
import search from './assets/images/search.png';
import opacity from './assets/images/opacity.png';
import pagination from './assets/images/pagination.png';
import rent from './assets/images/rent.png';
import home from './assets/images/home.png';
import up from './assets/images/up.png';
import car from './assets/images/car.png';
import yo from './assets/images/yo.png';
import down from './assets/images/down.png';
import plane from './assets/images/plane.png';
import ring from './assets/images/ring.png';
import footer from './assets/images/footer.png';

const Web = () => {
    return (
        <div className='px-4 sm:px-6 md:px-0'>
            <div className='h-20 w-full bg-white shadow flex items-center sm:justify-between px-4 flex flex-col sm:flex-row'>
                <div className='flex items-center gap-2'>
                    <img src={logo} className='h-10 w-10' />
                    <span style={{ color: "#0a56af" }} className="font-bold text-sm ">CompraloVendelo</span>
                </div>
                <div className='w-72 gap-2 p-2 border border-black rounded-full flex items-center '>
                    <img src={search} className='h-5 w-5 ml-2' />
                    <input type="text" placeholder='Find your need...' className='placeholder:text-black text-sm' />
                </div>
                <div className='flex gap-3'>
                    <button className='border bg-blue-800 text-xs text-white px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-1'>SELL WITH US </button>
                    <button className='text-sm transition-all duration-200 hover:-translate-y-1'>Join/Log In</button>
                </div>
            </div>


            <div className='mt-4 ml-10 h[622px] w-[1440px]'>
                <ul className='flex gap-9 list-none'>
                    <li>Real Estate</li>
                    <li>Cars</li>
                    <li>Boats</li>
                    <li>Marketplace</li>
                    <li>Services</li>
                </ul>
            </div>


            <div className='mt-7 relative w-full h-[500px]'>
                <img src={opacity} className="w-full h-full " />
                <div className='absolute top-1/2 left-4 -translate-y-1/2 text-white  ml-10'>
                    <h1 className="text-2xl font-bold">Unlock Your Perfect Home: <br />Exclusive Buy and Long-term Rental Opportunities</h1>
                    <span className=" mt-3 text-lg whitespace-pre-line">Immerse Yourself In An Unparalleled Online Experience With A Vast Selection <br />Of Listings And Unique Features That You Won't Find Anywhere Else, From <br />Browsing A Comprehensive Rental Network To Effortlessly Applying And <br />Paying Rent.</span>
                </div>
                <img src={rent} className='absolute right-4 bottom-7 w-[400px] sm:w-[500px] md:w-[600px]' />
                <img src={pagination} className='absolute left-1/2 bottom-4 -translate-x-1/2 w-64' />
            </div>


            <div className='mt-10 flex flex-col md:flex-row items-center gap-8 px-4 md:px-10'>
                <div className='md:w-1/2 flex flex-col justify-center h-[437px]'>
                    <h2 className='font-bold text-4xl mb-4'>Home or Properties</h2>
                    <p className='text-lg text-gray-700 mb-5'>
                        Buy or rent with ease, guided by our expert team. Achieve your <br />
                        goals confidently and unlock the potential of your dream <br />
                        property.
                    </p>
                    <button className='text-blue-800 border border-blue-800 px-6 py-2 mt-5 rounded-full w-48 transition-all duration-200 hover:-translate-y-1'>
                        Browse Homes
                    </button>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={home} className='w-[420px] h-[430px] mb-20' />
                </div>
            </div>


            <div className='mt-7 relative w-full h-[500px]'>
                <img src={up} className='w-full h-full' />
                <div className='absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center gap-8 px-4 md:px-10'>
                    <div className='md:w-1/2 flex justify-center'>
                        <img src={car} className='w-[400px] h-[400px] o' />
                    </div>
                    <div className='md:w-1/2 flex flex-col justify-center h-[400px] text-white'>
                        <h2 className='font-bold text-4xl mb-4'>
                            Unlock the Perfect Vehicle with Our <br /> Buying Services
                        </h2>
                        <p className='text-lg mb-5'>
                            Discover the power to elevate your driving <br />
                            experience with our comprehensive new or used car <br />
                            or motorcycle buying services.
                        </p>
                        <button className='text-white border border-white px-6 py-2 mt-5 rounded-full w-48 transition-all duration-200 hover:-translate-y-1'>
                            Buy Vehicle
                        </button>
                    </div>
                </div>
            </div>


            <div className='mt-20 flex flex-col md:flex-row items-center gap-8 px-4 md:px-10'>
                <div className='md:w-1/2 flex flex-col justify-center h-[437px]'>
                    <h2 className='font-bold text-4xl mb-4'>Home or Properties</h2>
                    <p className='text-lg text-gray-700 mb-5'>
                        Buy or rent with ease, guided by our expert team. Achieve your <br />
                        goals confidently and unlock the potential of your dream <br />
                        property.
                    </p>
                    <button className='text-blue-800 border border-blue-800 px-6 py-2 mt-5 rounded-full w-48 transition-all duration-200 hover:-translate-y-1'>
                        Browse Homes
                    </button>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={yo} className='w-[420px] h-[430px] mb-20' />
                </div>
            </div>

            <div className='mt-20 relative w-full h-[500px]'>
                <img src={down} className='w-full h-full' />
                <div className='absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center gap-8 px-4 md:px-10'>
                    <div className='md:w-1/2 flex justify-center'>
                        <img src={plane} className='w-[400px] h-[400px] o' />
                    </div>
                    <div className='md:w-1/2 flex flex-col justify-center h-[400px] text-white'>
                        <h2 className='font-bold text-4xl mb-4'>Buy New and Used Aircraft for Your <br />Aviation Ventures
                        </h2>
                        <p className='text-lg mb-5'>
                            Lorem ipsum dolor sit amet consectetur.Accumsan <br />tristique sit a euismod ut. Ultricies et mauri linero <br />amet diam et prion
                        </p>
                        <button className='text-white border border-white px-6 py-2 mt-5 rounded-full w-48 transition-all duration-200 hover:-translate-y-1'>
                            Finding Services
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-20 flex flex-col md:flex-row items-center gap-8 px-4 md:px-10'>
                <div className='md:w-1/2 flex flex-col justify-center h-[437px]'>
                    <h2 className='font-bold text-4xl mb-4'>Find the Perfect Maret Place for Your <br />Needs</h2>
                    <p className='text-lg text-gray-700 mb-5'>
                        Buy and sell anything like car parts or bbq or any appliance <br />below 5,000
                    </p>
                    <button className='text-blue-800 border border-blue-800 px-6 py-2 mt-5 rounded-full w-48 transition-all duration-200 hover:-translate-y-1'>
                        Find Now
                    </button>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={yo} className='w-[420px] h-[430px] mb-20' />
                </div>
            </div>

            <div style={{ backgroundColor: "#F7F7F7" }} className='mt-20 flex flex-col sm:flex-row justify-center gap-7 p-4'>
                <div>
                    <img src={ring} className='h-12' />
                </div>
                <div>Get the latest updates, find job listings, real estate Projects <br />or News Subscribe now to be notified</div>
                <div className='flex gap-3'>
                    <button className='border bg-blue-700 text-white rounded-full text-sm px-4 py-2 transition-all duration-200 hover:-translate-y-1' >Subscribe</button>
                    <button className='border boredr-blue-700 text-blue-700 rounded-full text-sm px-4 py-2 transition-all duration-200 hover:-translate-y-1'>Maybe Later</button>
                </div>
            </div>
           <div className='w-full h-[200px] md:h-[400px] relative'>
  <img src={footer} className='w-full h-full object-cover' />
</div>


        </div>
    )
}

export default Web