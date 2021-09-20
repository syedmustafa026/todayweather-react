import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap//dist/js/bootstrap.bundle.min'
import '../App.css';
import{ useEffect, useState } from "react";



function Card() {
  
  const [city, setCity] = useState("")
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f3d74fe7c4cf5b26d596c7f0f988d7a6`)
      .then(response => response.json())
      .then(json => setCity(json))


  }, [search])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1><a className="navbar-brand" href="#"><img width="60" height="60" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="ghfhd" /> Weather Update</a></h1>
          <nav className="navbar navbar-light bg-darker">
            <div className="container-fluid">
              <form className="d-flex">
                <input id="input" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" onChange={(event) => {
                  console.log(event.target.value)
                  setSearch(event.target.value)}} type="button">Search</button>
              </form>
            </div>
          </nav>
        </div>
      </nav >
      
      <div className="card mb-3"  >
        <div className="row g-0">
        <h2>{city.name}</h2>
          <div className="temp">
            <div className="card-body">
              <h2 className="card-title">Todays Weather{console.log(city)}</h2>
              <h1>62.4^</h1>
            </div>
            <p className="card-title"></p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
      )
}
export default Card;