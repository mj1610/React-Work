import React, {useState} from 'react';
import './App.css';
import CityInput from "./Components/CityInput";
import CityWeather from "./Components/CityWeather";

function App() {
  const [city,setCity]= useState("");
  const [cityWeather, setCityWeather]= useState("");
  const [err, setErr]= useState(null)
  
  const fetchCityWeather=()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be1bb3a69cb5d423a49740b152cb7512`
    )
    .then((res)=>res.json())
    .then((result)=>{
      if (result.cod == "404"){
        console.log(result);
        setCityWeather(null);
        setErr(result.message); 
      } 
      else {
      console.log(result);   
      setCityWeather(result);
      setErr(null);  
      }
    })
  }
  return (
    <div className="background">
    <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
    <CityWeather err={err} cityWeather={cityWeather} />
    </div>
  );
}

export default App;