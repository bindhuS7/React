import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseImperative =forwardRef((props,ref) => {
    let [state,setState]=useState(false);
    
    useImperativeHandle(ref,()=>({
 handleState(){
setState(!state)

}
    }))
  return (
    <div>
        {state?"hi":<i>hello</i>}
        {/* <button>childButton</button> */}
    </div>
  )
})

export default UseImperative