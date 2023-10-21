import React, { useContext } from 'react'
import { MyContext } from '../Context/NewContext'

const Child1 = () => {
    let {state}=useContext(MyContext)
  return (
    <div>{state}</div>
  )
}

export default Child1