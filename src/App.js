import { useRef, useState } from 'react';


function App() {
  let inputvalues = useRef(null);

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const apiKey = "2629cb07f801fedceda63abc5f4d1c51";
  // const apiKey = "37cae642547b29a2c59ddc57317a9c71";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  

  function getWeather() {
   
    fetch(url).then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (data.cod === 200) {
          setWeather(data);
        } else {
          setWeather(null);
          alert("Wrong city name");
        }
      })
      .catch((error) => console.log(error));
      // inputvalues.current.value("");
      
  }

function handlChange(e){
  setCity(e.target.value);
}

  return (
    <div className="App">
      <input type="text" value={city} onChange={handlChange}  ref={inputvalues}/>
      <button onClick={getWeather}>Get weather</button>
      <h1>weather in {city}:</h1>
      {(weather !== null) && <p>Temp {Math.floor(weather.main.temp - 273.15)}</p> }
      {(weather === null) && <p>No data</p>}
   </div>
  );
}

export default App;
