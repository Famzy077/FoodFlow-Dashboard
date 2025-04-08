import React from 'react'

const StepIndicator = ({ step, page, complete }) => {

  return (
    <>
    {/* ===========step indicator============= */}
    <div className='flex bg-white z-50 justify-between mx-8 px-5'>
    {step?.map ((steps, ind)=>(
    <div key={ind} 
   className={ ind !== step.length - 1 ?  'z-50 flex items-center justify-center w-full' : 'flex justify-center items-center'} >
      <div>
        {/* =============to display circle and tickbox/number============ */}
        <button 
        // onClick={()=>''}
        className={`rounded-full transition duration-500 ease-in-out border h-10 w-10 flex items-center justify-center py-2 text-black font-bold ${ind + 1< page || complete ? "bg-primary border-primary": "border-zinc-400"}`}>
          {ind + 1 < page ? ( <span className='text-white'>&#10003;</span> ) : (ind + 1)}
        </button>

        {/* ================to display step description================ */}
        <div className={`absolute text-center font-bold ${ind + 1 < page ? 'text-primary' : 'text-black'}`}>
          {steps}
        </div>
      </div>
            
            {/* =============to display line between steps=================== */}
      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${ ind + 1 < page ? "border-t-primary": "border-t-zinc-400"}`}>
      </div>
    </div>
       ))} 
    </div>
    </>
  )
}

export default StepIndicator