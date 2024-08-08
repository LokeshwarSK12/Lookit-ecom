import React from 'react'
import CountdownTimer from './CountdownTimer';

const NavHead = ({offerEndTime}) => {
  return (
    <nav className='navhead'>
        <h1>Deal of the day</h1>
        <div className='clockdiv'>
            End in:<CountdownTimer offerEndTime={offerEndTime} />
        </div>
        <a href="#">View all</a>
    </nav>
  )
}

export default NavHead