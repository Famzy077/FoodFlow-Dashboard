'use client'
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchInput({searchIconPos='top-2.5 left-6', pl='pl-10', placeholder='Search', bg='bg-zinc-50', border='border-0', rounded='rounded-3xl'}) {
    const icon = useRef()
    const [input, setInput] = useState('')
    const [iconColor, setIconColor] = useState('zinc-400')

  return (
    <div className={`relative w-full ${bg} ${rounded} ${border}`}>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          onFocus={()=>setIconColor('black')}
          onBlur={()=>setIconColor('zinc-400')}
           type="search"
            className={`outline-none w-full rounded-2xl bg-inherit ${pl} p-1 placeholder:text-${iconColor} caret-black placeholder:pl-1`}
             placeholder={placeholder} />
            <span ref={icon}><CiSearch className={`absolute ${searchIconPos} text-${iconColor} pointer-events-none`}/></span>
        </div>
  )
}
