import React, { createContext, useState} from 'react'




export const TestContext = createContext()


function TestContextProvider ({children}) {
    const [name, setName ] = useState('leonard')

function nameChange () {
    setName('michael')
}
    return(
        <TestContext.Provider value={{name, nameChange}}>
            {children}
        </TestContext.Provider>
    )
}

export default TestContextProvider