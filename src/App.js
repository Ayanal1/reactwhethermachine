import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,ButtonGroup,DropdownButton,Dropdown } from 'react-bootstrap';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  const [, setDate] = useState([])
  const [search, setsearch] = useState("Islamabad");
  const [country, setcountry] = useState("PK");
  const getDatacovid = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search},${country}&appid=5013ded2810970e421f078609ba5a11e`)
      console.log(res)
      const dataa = await res.json();
      console.log(dataa)
      console.log(Math.floor(dataa.main.temp - 273.15) + "°C")
      // setData(dataa[0].actuals)
      setData(Math.floor(dataa.main.temp - 273.15) + "°C")

    }
    catch (err) {
      console.log(err)

    }

  }

  useEffect(() => {
    getDatacovid();
  }, [search,country]);

  return (
    <div className="App" style={{zIndex: "0.5"}}>

<div className="aligningwhether"> 
<ButtonGroup className="aligningwhether ">
  <DropdownButton  as={ButtonGroup} className='myDropDown' title={"city"} id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1" style={{color: "green"}} > Pakistan</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Lahore")}> Lahore</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Faisalabad")}> Faisalabad</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Rawalpindi")}> 	Rawalpindi</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Peshawar")}> Peshawar </Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Sukkur")}> Sukkur </Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Karachi")}> Karachi</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Mardan")}> Mardan</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Mirpur Khas")}> 	Mirpur Khas</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Hafizabad")}> Hafizabad</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Abbottabad")}> 	Abbottabad</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Hyderabad")}> 	Hyderabad</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Blue"}} >India</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Mumbai")}> Mumbai</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Delhi")}> Delhi</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Bangalore")}>Bangalore</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Kolkata")}> Kolkata</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Chennai")}> Chennai</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Jaipur")}> Jaipur</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Agra")}> Agra</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Hyderabad")}> Hyderabad</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Lucknow")}> Lucknow</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Red"}} >England</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Liverpool")}> Liverpool</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Manchester")}> Manchester</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Birmingham")}> 	Birmingham</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Cambridge")}> 	Cambridge</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("London")}> 	London</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Nottingham")}> Nottingham</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Oxford")}> 	Oxford</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Red"}} >USA</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("California")}> California</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Los Angeles")}> Los Angeles</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Colorado")}> Colorado</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Florida")}> Florida</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Georgia")}> Georgia</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Indiana")}> Indiana</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Kansas")}> Kansas</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Red"}} >Afghanistan</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Kabul")}> Kabul</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Jalalabad")}> Jalalabad</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Kandahar")}> Kandahar</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Kunduz")}> Kunduz</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Red"}} >Bangladesh</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Dhaka")}> Dhaka</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Chattogram")}> Chattogram</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Comilla")}> Comilla</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Mymensingh")}> Mymensingh</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Red"}} >Oman</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Seeb")}> Seeb</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Muscat")}> Muscat</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Salalah")}> Salalah</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Sohar")}> Sohar</Dropdown.Item>
    <Dropdown.Item eventKey="1" style={{color: "Red"}} >Japan</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Tokyo")}> Tokyo</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Sapporo")}> Sapporo</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Yokohama")}> Yokohama</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Nagoya")}> Nagoya</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setsearch("Kobe")}> Kobe</Dropdown.Item>
    
  </DropdownButton>
</ButtonGroup>
<ButtonGroup className="aligningwhether ">
  <DropdownButton as={ButtonGroup} className='myDropDown1' title={"country"} id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1" onClick={() => setcountry("PK")}>Pakistan</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("IN")}>India</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("UK")}>England</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("US")}>USA</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("AF")}>Afghanistan</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("BD")}>Bangladesh</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("OM")}>Oman</Dropdown.Item>
    <Dropdown.Item eventKey="1" onClick={() => setcountry("JP")}>Japan</Dropdown.Item>
  
  </DropdownButton>
</ButtonGroup>
</div>
{/* <div>
</div> */}
<div>

<h1 className='temp'>{data}</h1>
</div>
    </div>
  );
}

export default App;
