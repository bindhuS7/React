import React, { useState } from 'react'
import "../WeatherApp/Weather.css"
import { BsSearch, BsWind, BsFillMoonStarsFill, BsCloudMoon, BsFillCloudFill, BsFillCloudDrizzleFill, BsSnow2 } from "react-icons/bs"
import { RiWaterPercentLine } from "react-icons/ri"
import { IoMdSunny, IoIosPartlySunny, IoIosThunderstorm} from "react-icons/io"//sun
import {  LiaCloudSolid, LiaCloudSunRainSolid } from "react-icons/lia"//scattered cloud
import { LuCloudMoonRain} from "react-icons/lu"//sun

const WeatherApp = () => {
    const [weatherIcon,setWeatherIcon]=useState(<IoMdSunny className='climateIcon' style={{color:"yellow"}}/>)
    let[state,setState]=useState({
        place:"London",
        temp:"24°c",
        humidity:"64%",
        speed:"18km/s"
    })
let {place,temp,humidity,speed}=state
    let api_key="2e94f3a8f2bb3b2208c7d4c29faea4bd";
 const search=async()=>{
const element1=document.getElementById("search");
if(element1.value===''){
    return 0;
}
const URL=`https://api.openweathermap.org/data/2.5/weather?q=${element1.value}&units=Metric&appid=${api_key}`
let res=await fetch(URL);
let data= await res.json();
// let temp1=document.getElementById("temp");
// temp1.innerHTML=data.main.temp+" °C";
// console.log(data.main.temp);
// let humidity1=document.getElementById("humidity")
// humidity1.innerHTML=data.main.humidity+" %";
// console.log(data.main.humidity);
// let place1=document.getElementById("place");
// place1.innerHTML=data.name;
// console.log(data.name);
// let windSpeed=document.getElementById("speed");
// windSpeed.innerHTML=data.wind.speed+" km/h";
// console.log(data.wind.speed);


let payload={place:data.name,
             temp:data.main.temp+"°C",
             humidity:data.main.humidity+" %",
            speed:data.wind.speed+"km/sce"};
setState(payload)

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){

    if(data.weather[0].icon==="01n"){
setWeatherIcon(<BsFillMoonStarsFill className='climateIcon'/>)
    }else{
        setWeatherIcon(<IoMdSunny className='climateIcon' style={{color:"yellow"}}/>)
    }
}else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
    if(data.weather[0].icon==="02n"){
        setWeatherIcon(<BsCloudMoon className='climateIcon'/>)
            }else{
                setWeatherIcon(< IoIosPartlySunny className='climateIcon'/>)
            } 
}else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
    if(data.weather[0].icon==="03n"){
        setWeatherIcon(<LiaCloudSolid className='climateIcon'/>)
            }else{
                setWeatherIcon(< LiaCloudSolid className='climateIcon'/>)
            } 
}else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
    if(data.weather[0].icon==="03n"){
        setWeatherIcon(<BsFillCloudFill  className='climateIcon' style={{color:'black'}}/>)
            }else{
                setWeatherIcon(< BsFillCloudFill  className='climateIcon' style={{color:'black'}}/>)
            } 
}else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
    if(data.weather[0].icon==="09n"){
        setWeatherIcon(<BsFillCloudDrizzleFill className='climateIcon' style={{color:"black"}}/>)
            }else{
                setWeatherIcon(< BsFillCloudDrizzleFill className='climateIcon' style={{color:"black"}}/>)
            } 
}else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
    if(data.weather[0].icon==="010n"){
        setWeatherIcon(<LuCloudMoonRain className='climateIcon' style={{color:"black"}}/>)
            }else{
                setWeatherIcon(< LiaCloudSunRainSolid className='climateIcon'/>)
            } 
}else if(data.weather[0].icon==="11d" || data.weather[0].icon==="11n"){
    if(data.weather[0].icon==="11n"){
        setWeatherIcon(<IoIosThunderstorm  className='climateIcon' style={{color:'black'}}/>)
            }else{
                setWeatherIcon(< IoIosThunderstorm  className='climateIcon' style={{color:'black'}}/>)
            } 
}else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
    if(data.weather[0].icon==="013n"){
        setWeatherIcon(<BsSnow2 className='climateIcon' style={{color:"black"}}/>)
            }else{
                setWeatherIcon(<BsSnow2 className='climateIcon' style={{color:"black"}}/>)
            } 
        }





 }
  return (
    <div className='Container'>
    <div className='searchContainer'>
        <input type="text" placeholder='Search...'  id='search'/>
        <div>< BsSearch onClick={search}/></div>
    </div>
    <div className='climateContainer' >{weatherIcon}
    {/* <  BsFillCloudSnowFill className='climateIcon'/> */}
    </div>
    <div className='Temperature' id='temp'>{temp}</div>
    <div className='Place' id='place'>{place}</div>
    <div className='contentContainer'>
        <div className='HumidityContainer'>
        <div id='hum'>
        <RiWaterPercentLine className='humidityIcon'/>
        <div id="humidity">{humidity}</div>
        </div>
        <div id="hum1" >Humidity</div>
        </div>
        <div className='HumidityContainer'>
        <div id='hum'>
        <BsWind className='humidityIcon' style={{color:"white"}}/>
        <div id='speed'>{speed}</div>
        </div>
        <div id="hum1">Wind Speed</div>
        </div>
    </div>
    </div>
  )
}

export default WeatherApp