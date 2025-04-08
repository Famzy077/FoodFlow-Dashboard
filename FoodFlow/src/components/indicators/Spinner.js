import React from 'react'
import '../styles/Spinner.css'

const Spinner = () => {
  return (
    <div className='fixed inset-0 flex justify-center items-center backdrop-blur-md z-[9999] w-screen h-screen'>
      <div class="spinner"></div>
    </div>
  )
}

export default Spinner