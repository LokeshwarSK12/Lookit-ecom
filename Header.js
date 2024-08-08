import React from 'react'
import { FaCartPlus,FaHeart } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag,HiOutlineUserCircle } from "react-icons/hi2";

const Header = () => {
  return (
    <header>
        <nav className='firstnav'>
            <h1>
                Look<span className='ss'>it</span>
            </h1>
            <select className='firstsel'>
                <option>All</option>
                <option>Filter</option>
                <option>Sort</option>
            </select>
            <input className='firstin' placeholder='search the item...'/>
            <button className='firstbut'>search</button>
            <div className='firstlist'>
                <a className='op1'  href="#"><CiHeart/></a>
                <a className='op1'  href="#"><PiShoppingCartLight/></a>
                <a className='op1'  href="#">< HiOutlineShoppingBag/></a>
                <a className='op1'  href="#"><HiOutlineUserCircle/></a>
                
            </div>
            <div className='inside'>
                    <a href="#" >Login</a><br/>
                    <a href="#" >Register</a>

                </div>

        </nav>
      
    </header>
  )
}

export default Header