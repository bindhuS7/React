import React,{createContext, useState}from "react"
export const MyContext=createContext();

const NewContext=({children})=>{
    let [state,setState]=useState("hello");
    return(
        <MyContext.Provider value={{state,setState}}>
{children}
        </MyContext.Provider>
    );

}
export default NewContext;