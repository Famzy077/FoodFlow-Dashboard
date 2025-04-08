import React from 'react'

export default function CircularDisplay({size='w-[32px] h-[32px]', bg='',position='', content, color='text-primary', border='border-2 border-primary'}) {
  return (
    <div className={`rounded-full flex items-center justify-center ${size} ${color} ${border} ${bg} ${position}`} >
                {content}
    </div>
  )
}
