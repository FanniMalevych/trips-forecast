import axios from "axios";
import { YOUR_API_KEY } from ".";

export const getTripForecast = (city, startDate, endDate, func) => {
  axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate.toISOString().slice(0, 10)}/${endDate.toISOString().slice(0, 10)}?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
    .then(res => {
      func(res.data)
    })
    .catch(error => console.log(error))
}

export const getTodayForecast = (city, func) => {
  axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
    .then(res => {
       func(res.data)
    })
    .catch(error => console.log(error))
}