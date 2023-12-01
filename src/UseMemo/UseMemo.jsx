import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    let [count,setCount]=useState(0)
    let [evenNum,setEvenNum]=useState(2)
const memohook=useMemo(function evenNumberDouble(){
    console.log("double");
    return evenNum*2;
},[evenNum])
  return (
    <div>
        <h6>Counter:{count}</h6>
        <h6>Even Numbers:{evenNum}</h6>
        <h6>even Number Double value:{memohook}</h6>
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setEvenNum(evenNum+2)}>even Numbers</button>
    </div>
  )
}

export default UseMemo

/*************
 * to avoid unneccessary re-rendering on the page .restrict them with the help of usememo hook  this speed of your
 * application instead of  usememeo if we use just normal function
 * then it will render the function even any changes in count state even we are not touch evenNumber state
 * below is example even we won't touch the evenNumber state but it will render the function we can see that by click the 
 * increment button  and the output in console
 * **************/


// const UseMemo = () => {
//     let [count,setCount]=useState(0)
//     let [evenNum,setEvenNum]=useState(2)
// function evenNumberDouble(){
//     console.log("double");
//     return evenNum*2;
// }
//   return (
//     <div>
//         <h6>Counter:{count}</h6>
//         <h6>Even Numbers:{evenNum}</h6>
//         <h6>even Number Double value:{evenNumberDouble()}</h6>
//         <button onClick={()=>setCount(count+1)}>increment</button>
//         <button onClick={()=>setEvenNum(evenNum+2)}>even Numbers</button>
//     </div>
//   )
// }

// export default UseMemo
