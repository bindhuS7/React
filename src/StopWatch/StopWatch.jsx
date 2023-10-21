
import  React from 'react';
import {useState,useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
  import  Button from 'react-bootstrap/Button';
  import  container from 'react-bootstrap/container';
const StopWatch=()=>{
let [time,setTime]=useState(0);
let [isRunning,setIsRunning]=useState(false);
let reset=()=>{
    setTime(0);
    setIsRunning(false);
}
let startStop=()=>{
    console.log(isRunning);
    setIsRunning(!isRunning);
}


useEffect(()=>{
    let timer;
    if(isRunning){
        timer=setInterval(()=>{
         setTime(prevTime=>prevTime+1);
        },1000)
    }else{
        clearInterval(timer);
    }
    return ()=>{
        clearInterval(timer)
    }
},[isRunning])


let timeFormate=(seconds)=>{
    let hours=Math.floor(seconds/3600);
    let minutes=Math.floor((seconds%3600)/60);
    let remainingSec=seconds%60;
return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(remainingSec).padStart(2,'0')}`
}
    return(
        <div style={{width:"99vw",height:"99vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="container" style={{border:'2px solid black', width:"280px", justifyItems:"center", display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"pink", borderRadius:"20px"}}>

<h1>Stop Watch</h1>
<div>
    
    <div className='container' style={{paddingBlockEnd:"5px", fontSize:"20px", backgroundColor:"white", borderRadius:"5px", margin:"10px" ,justifyContent:"center",alignItems:"center",display:"flex"}}>{timeFormate(time)}</div>
    </div >
    {/* bootstrap container */}
    <div className={container} style={{width:"200px",justifyContent:"space-evenly",display:"flex" }}>
<Button onClick={startStop} className='btn btn-warning'>{isRunning?'Stop':'start'}</Button>
<Button onClick={reset}  type="button" className='btn btn-info'>Reset</Button>
</div>
        </div>
        </div>
    )

}
export default StopWatch;