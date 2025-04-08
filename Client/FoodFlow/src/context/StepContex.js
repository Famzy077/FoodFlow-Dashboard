import React, { useContext, useState } from 'react';

export const multiStepContext = React.createContext();
export function useData(){
return useContext(multiStepContext);
}

export function DataProvider ({children}){
    const [formData, setFormData] = useState('')

    const  addFormData = (data) =>{
        setFormData ([...formData, data])
    }
    return(
        <div>
            <multiStepContext.Provider value={{
        formData, addFormData, setFormData
            }}>
            {children}
            </multiStepContext.Provider>
        </div>
    )
};
export default DataProvider;