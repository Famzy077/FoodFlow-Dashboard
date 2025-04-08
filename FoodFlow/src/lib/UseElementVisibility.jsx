'use client'
import { useEffect, useRef, useState } from "react"

export default function useElVisibility() {
    const [isOpen, setIsOpen] = useState(false)
    const reference = useRef()

    
    useEffect(
      ()=>{
        const handleElOpen = (e)=>{
          if( !reference?.current.contains(e.target)) return setIsOpen(false)
        }
        window.addEventListener('click', handleElOpen )

        return ()=>{
          window.removeEventListener('click', handleElOpen)
        }
      },[isOpen]
    )
  return {reference, setIsOpen, isOpen}
}
