import React from 'react'
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RiLoopLeftLine } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { GoGift } from "react-icons/go";
const Navbar = () => {
  return (
    <nav className='thirdnav'>
        <div className='bardiv'>
               <HiOutlineRocketLaunch />
               <h1>
                    Free delivery
               </h1>
               <br/>
               <p>For all order above $99</p>
        </div>
        <div className='bardiv2'>
            <RiLoopLeftLine />
               <h1>
                    90 Days return
               </h1>
               <br/>
               <p className='p2'>If goods have problem</p>
        </div>
        <div className='bardiv2'>
            <MdOutlinePayment  />
               <h1>
                    Secure Payment
               </h1>
               <br/>
               <p className='p2'>100% secure payment</p>
        </div>
        <div className='bardiv2'>
        <LuMessagesSquare />
               <h1>
                    24/7 Support
               </h1>
               <br/>
               <p className='p2'>Dedicated Support</p>
        </div>
        <div className='bardiv2'>
            <GoGift />

               <h1>
                    Gift Service
               </h1>
               <br/>
               <p className='p2'>Support Gift Service</p>
        </div>


    </nav>
  )
}

export default Navbar