import React, {useContext} from 'react'
import { TestContext } from './context/TestContext'

export default function Home() {
    const brother = useContext(TestContext) 
  return (
    <div>

        <h1>my name is leo and my brothers name is {brother.name} </h1>
        <button onClick={brother.nameChange}>Reveal brothers name</button>
    </div>
  )
}
