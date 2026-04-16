import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox";
import { useState } from 'react';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
                city:"Delhi",
                feels_like: 34.56,
                pressure: 1003,
                temp: 37.05,
                temp_max: 37.05,
                temp_min: 37.05,
                weather: "haze",
                humidity:14,
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2> Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    )
}