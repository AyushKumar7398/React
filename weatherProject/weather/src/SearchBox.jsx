import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
     let[city,setCity]=useState("");
     let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"     
    const API_KEY="dcf90f828c6bfd86dd26f349c1ca2310";
    
    let getWeatherInfo= async()=>{

    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);   
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result= {
         city:city,
         temp:jsonResponse.main.temp,
         temp_max:jsonResponse.main.temp_max,
         temp_min:jsonResponse.main.temp_min,
         pressure:jsonResponse.main.pressure,
         feels_like:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description,
         humidity:jsonResponse.main.humidity,
       }
       console.log(result);
       return result;
    }catch(error){
        throw error;
    }
   
    }
    
   

    let handleChange =(event)=>{
        
        setCity(event.target.value);
        
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo);
        }catch(error){
            setError(true);
        }
       

    }
    return (
        <div className="SearchBox" >
            
             <form onSubmit={handleSubmit} >
                <TextField type="text" id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                 <br /><br />
                <Button variant="contained" type="submit" >
                     Search
                </Button>
                {error && <p style ={{color:"red"}}>No such place Exist</p>}
             </form>
        </div>
    );
}
