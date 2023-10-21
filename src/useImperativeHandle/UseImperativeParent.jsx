import React, { useRef } from 'react'
import UseImperative from './UseImperative';

const UseImperativeParent = () => {
    let childRef=useRef();
    let handlechild=()=>{
childRef.current.handleState();
    }
  return (
    <div>
        <button onClick={handlechild}>ParentButton</button>
        <UseImperative ref={childRef}/>
    </div>
  )
}

export default UseImperativeParent