import React, { useReducer } from "react"

let reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
        return {count:state.count+1}
        case 'decrement':
            return{count:state.count-1}
        default:
            return state    
    }
}

let Index=()=>{
    let initialState={count:0};
let [state,dispatch]=useReducer(reducer,initialState);
    return(
<>
<h1>{state.count}</h1>
<button onClick={()=>{dispatch({type:'increment'})}}>+</button>
<button onClick={()=>{dispatch({type:'decrement'})}}>-</button>
</>
    );
}
export default Index;