import React, { useState } from 'react'
import "../SearchBar/searchBar.css"
import {  BsSearch } from "react-icons/bs";

const SearchBar1 = ({setResults}) => {
    let [query,setQuery]=useState([]);

    let handleChange=(value)=>{
        setQuery(value);
         let fetchData=()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=>{
                 const results1=data.filter((user)=>
                 {
                  return ( 
                    value && user && user.name && user.name.toLowerCase().includes(value)
                  );
                }
             
            )
            // console.log(results1);
            setResults(results1)
         }).catch((err)=>{console.log(err);});
   
         }
         fetchData(value);
    }
    
  return (
    <div className='inputContainer'>
        <input type="text"  onChange={(e)=>{handleChange(e.target.value)}} placeholder='Search Here...'/>
        <button  type="button"  >< BsSearch/></button>
        
    </div>
  )
}

export default SearchBar1;