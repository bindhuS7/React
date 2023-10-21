import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement, reset,incrementByAmount} from './Counter/CounterSlice';
const Counter = () => {
    let [incrementAmount,setIncrementAmount]=useState(0);
    let addValue=Number(incrementAmount)||0;
    let count=useSelector((state)=>state.counter.count);
    let dispatch= useDispatch();
    let handleReset=()=>{
     setIncrementAmount(0);
     dispatch(reset())
    }
  return (
   <section>
    <p>{count}</p>
    <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
   <input type="text"  value={incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>

   <div>
    <button onClick={()=>dispatch(incrementByAmount(addValue))}>add Amount</button>
    <button onClick={handleReset}>reset</button>
   </div>

   </section>
  )
}

export default Counter