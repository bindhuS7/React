import React from 'react'
import { useState } from 'react'
import "./Calculator.css"
const Calculator = () => {
    let [value,setValue]=useState("");

  return (
    <div className="container" >
        <form action="" >
            <div>
                <input type="text" value={value} className="operator" />
            </div>
            <div id='numbers'>
            <div>
                <input type="button" value="AC" onClick={(e)=>{setValue("")}}  className='firstrow'/>
                <input type="button" value="DE" onClick={(e)=>setValue(value.slice(0,-1))}  className='firstrow'  />
                <input type="button" value="/"   onClick={(e)=>{setValue(value+e.target.value)}} className='firstrow'/>
                <input type="button" value="."  onClick={(e)=>{setValue(value+e.target.value)}} className='firstrow'/>
            </div>
            <div>
                <input type="button" value="7"   onClick={(e)=>{setValue(value+e.target.value)}} />
                <input type="button" value="8"   onClick={(e)=>{setValue(value+e.target.value)}} />
                <input type="button" value="9"   onClick={(e)=>{setValue(value+e.target.value)}} />
                <input type="button" value="*"   onClick={(e)=>{setValue(value+e.target.value)}} className='firstrow'/>
            </div>
            <div>
                <input type="button" value="4"   onClick={(e)=>{setValue(value+e.target.value)}} />
                <input type="button" value="5"   onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="6"   onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="+"   onClick={(e)=>{setValue(value+e.target.value)}} className='firstrow'/>
            </div>
            <div>
                <input type="button" value="1"   onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="2"   onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="3"   onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="-"   onClick={(e)=>{setValue(value+e.target.value)}} className='firstrow'/>
            </div>
            <div>
                <input type="button" value="00"   onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="0"     onClick={(e)=>{setValue(value+e.target.value)}}/>
                <input type="button" value="="   onClick={(e)=>{setValue(eval(value))}} className='equal firstrow' />
            </div>
            </div>
        </form>
    </div>
  )
}

export default Calculator