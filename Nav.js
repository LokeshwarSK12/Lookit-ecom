import React from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { US } from 'country-flag-icons/react/1x1';



const Nav = () => {
  return (
    <div className='secondnav'>
        <button><IoReorderThreeOutline/></button>
        <h1>Shop by Department</h1>
        <ul>
            <select className='fs1'>
                <option>Home</option>
                <option>Men</option>
                <option>women</option>
            </select>
            <select className='fs1'>
                <option>shop</option>
                <option>waitlist</option>
            </select>
            <select className='fs1'>
                <option>pages</option>
                <option>firstbut</option>
            </select>
            <select className='fs1'>
                <option>Blogs</option>
                <option>firstbut</option>
            </select>
        
        <a className="sell" href="#">Sell in Lookit      <span className='s1'>|</span></a>
        <a className="sell" href="#">Track your Order  <span className='s1'>|</span></a>
        <select className='fs1'>
                <option>USD</option>
                <option>firstbut</option>
        </select>
        <span className='s1'>|</span>
        
    </ul>
    <ul className='flexx'>
        <US title="United States" className='flag' />
        <select >
            <option>
                English
            </option>
            <option>
                Hindi
            </option>
        </select>
    </ul>
        
    </div>
  )
}

export default Nav