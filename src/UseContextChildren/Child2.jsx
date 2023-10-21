import React, { useContext } from 'react'
import { MyContext } from '../Context/NewContext'

const Child2 = () => {
    let {state,setState}=useContext(MyContext)
    let handleState=()=>{
        setState("hi EveryOne i am updated  state from child 2 ")
    }
  return (
    <div>from child2:<i>{state}</i>
    <br/>
    <button onClick={handleState}>changeState</button>
    </div>
  )
}

export default Child2