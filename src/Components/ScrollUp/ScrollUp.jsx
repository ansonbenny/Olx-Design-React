import React from 'react'
import './ScrollUp.css'

function ScrollUp() {
  return (
    <div className='scrollUpDiv'>
      <button className='scrollUpbtn' onClick={(() => { window.scrollTo(0, 0) })}><i className="fa-solid fa-chevron-up fa-xl"></i> Back to top</button>
    </div>
  )
}

export default ScrollUp
