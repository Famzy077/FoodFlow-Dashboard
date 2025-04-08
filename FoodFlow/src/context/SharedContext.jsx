'use client'
import { createContext, useContext, useState } from "react"

const SharedCon = createContext()
export default function SharedContext({children}) {
    const [inventory_successId, setInventory_successId,] = useState('66e02034e8968c145afdf478')
    const [ inventory_successDetails, setInventory_successDetails] = useState(null)
  return (
    <SharedCon.Provider
     value={{
      inventory_successId, setInventory_successId,
      inventory_successDetails, setInventory_successDetails,
      }}>
        {children}
    </SharedCon.Provider>
  )
}

export const useSharedContext = ()=>{
    return useContext(SharedCon)
}