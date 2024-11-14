/* eslint-disable react/prop-types */
// import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import logo from '../../assets/logo.png'
import { FaCartShopping } from 'react-icons/fa6'
// import DarkMode from './DarkMode'
import DarkMode from './DarkMode'



// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Top Rated",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "Kids Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Mens Wear",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Electronics",
//     link: "/#",
//   },
// ];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];



export default function Navbar ({ handleOrderPopup }) {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

    {/* upper Navbar */}
        <div className='bg-primary/40 py-2 '>
            <div className='container  flex justify-between items-center'>
              <div>
                <a href="#" className='font-bold 
                text-2xl sm:text-3xl flex gap-2'>
                    <img 
                    src={logo} alt="logo" 
                    className='w-10' />
                    Shopsy
                </a>
              </div>
            
         {/* search bar */}
            <div className='flex justify-btween items-center gap-4'>
                <div className='relative group hidden sm:block'>
                    <input 
                    type="text" 
                    placeholder='Search'
                    className="w-[200px] sm:w-[200px] 
                    group-hover:w-[300px] transition-all
                    duration-300 rounded-full border
                    border-gray-300 px-2 py-1
                    focus:outline-none focus:border-1
                    focus:border-primary"/>
                    <IoMdSearch 
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
            
          {/* order button */}
            <button
            onClick={() => handleOrderPopup()}
            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200
            text-white py-1 px-4 rounded-full flex items-center gap-3 group' 
            >
              <span className='group-hover:block hidden transition-all duration-200'>
                Order</span>
                <FaCartShopping 
                className='text-xl text-white drop-shadow-sm cursor-pointer '/>
            </button>

            {/* DarkMode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
          </div>
        </div>
        

      {/* lower Navbar */}
      <div></div>
    </div>
  )
};


