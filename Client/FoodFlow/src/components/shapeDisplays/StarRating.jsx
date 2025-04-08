'use client'

import { IoIosStar } from "react-icons/io"

export default function StarRating({rating=4, maxRating=5, size='text-xs'}) {
  return (
    <div className="flex items-center">
        {
            Array(maxRating).fill(1)
            .map((_, i)=>{
                return(
                    <span key={i} className={`${size} ${i <= (rating - 1)?'text-primary': 'text-secondary'}`}><IoIosStar/></span>
                )
            })
        }
    </div>
  )
}
