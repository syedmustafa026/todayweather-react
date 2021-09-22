
import '../App.css';
import { useEffect, useState } from "react";


navigator.geolocation.getCurrentPosition((location) => {
  console.log(location)
})
function smoke() {
  var main = document.getElementById("main")
  main.style.backgroundImage = "url('http://media-s3-us-east-1.ceros.com/ceros-inspire/images/2018/02/20/198d300e06d1f186ebd0449d67a701f5/giphy.gif')";
}
function Card() {

  const [city, setCity] = useState("")
  const [search, setSearch] = useState("karachi")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f3d74fe7c4cf5b26d596c7f0f988d7a6&units=metric`)
      .then(response => response.json())
      .then(json => {
        setCity(json)
        console.log(json)

      })

  }, [])
  
  var weather = city.weather && city.weather[0].description
  function foo() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f3d74fe7c4cf5b26d596c7f0f988d7a6&units=metric`)
      .then(response => response.json())
      .then(json => {
        setCity(json)
        console.log(json)
        if (weather === "smoke") {
          smoke()
        }

      })

  }
  return (
    <body >
      <div id="main">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <h1><a href className="navbar-brand"><img width="60" height="60" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="ghfhd" /> Weather Update</a></h1>
            <nav className="navbar navbar-light bg-darker">
              <div className="container-fluid">
                <form className="d-flex">
                  <input id="input" onChange={(event) => { setSearch(event.target.value) }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-light" onClick={foo} type="button">Search</button>
                </form>
              </div>
            </nav>
          </div>
        </nav >

        <div className="card mb-3"  >
          <h1 className="main">Today's Weather</h1>
          <div className="sub">
            <h2 className="heading">{city.name}<span className="contry">{city.sys && city.sys.country}</span></h2>
            <h1 className="temp">{Math.round(city.main && city.main.temp)}°C</h1>
          </div>
          <div className="sub2">
            <h1 className="weather">{city.weather && city.weather[0].description} </h1>
            <h3> Feels Like: <span className="bold">{Math.round(city.main && city.main.feels_like)}°C</span></h3>
          </div>
          <div className="temp-details">
            <h3> 💨 Wind:  {city.main && city.main.pressure} %</h3>
            <h3> 🌫 Pressure:  {city.main && city.main.pressure} %</h3>
            <h3>💧 Humidity:  {city.main && city.main.humidity} %</h3>


            <button type="button" className="butn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              More Info
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">More Info</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="temp-details">
                      <h3> Feels Like: <span>{city.main && city.main.feels_like}°C</span></h3>
                      <h3>&#9729;&#65039; Pressure:  {city.main && city.main.pressure} %</h3>
                      <h3>💧 Humidity:  {city.main && city.main.humidity} %</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </body>
  )
}
export default Card;
