import { useState, useEffect } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { etc_Css } from "../styles/etc_Css";

const Weather_information = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const lon = 126.723;
    const lat = 37.49;
    const API_KEY = "3af745e55c0152da567c5ffd089f9e00";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather } = weatherData;
  const feels_like = main.feels_like;
  const description = weather[0].description;

  return (
    <div style={etc_Css.weather_information}>
      <TiWeatherPartlySunny size={50} />
      <h1>현재 날씨</h1>
      <span>체감온도: {feels_like}°C</span>
      <span>날씨 상태: {description}</span>
    </div>
  );
};

export default Weather_information;
