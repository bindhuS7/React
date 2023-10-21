import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffect = () => {
    let [state,setState]=useState("before changing");
    useEffect(()=>{

setState("after changing useEffect")
console.log(state);

    },[state])
    useLayoutEffect(()=>{
        setState("after changing2 useLayoutEffect")
        console.log(state);
    },[])
  return (
    <div>UseEffect</div>
  )
}

export default UseEffect
