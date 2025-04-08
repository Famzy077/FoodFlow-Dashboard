import React from 'react'

export default function Rounded2xlBtn({bg='bg-primary', hieght='h-8', color='white', border='border-0', borderColor='primary', content, width='w-40', size='sm', onclick}) {
    return (
        <button
                onClick={onclick}
                className={`${width} flex items-center justify-center ${hieght} ${bg} text-${color} rounded-3xl text-${size} ${border} border-${borderColor} `}>
                  {content}
            </button>
      )
    }
