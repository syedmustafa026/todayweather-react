import react, { useEffect, useState } from "react";
import "./css/style.css"

const Weatherapp = () => {
    const [city ,setCity]=useState("")
    const [search ,setSearch]=useState("")
    useEffect (()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f3d74fe7c4cf5b26d596c7f0f988d7a6`)
  .then(response => response.json())
  .then(json =>setCity(json))


    },[search])    
    return (
        <>
    <div>
    <div>
    <input type="search" className="searchbox" onChange={(event)=>{
        setSearch(event.target.value)

    }}/>
    </div>
    <div className="information">
        {console.log(city)}
        <h2>{city.name}</h2>
        <h2 className="temp">{city.main && city.main.temp}</h2>
        <h2 className="temp">{city.main && city.main.humidity}</h2>
        <h2 className="temp">{city.weather && city.weather[0].description}</h2>
        <h6 className="maxmintemp">{city.main.temp_max} | {city.main.temp_min}</h6>
    </div>
    </div>
    </>
    )

}
export default Weatherapp;