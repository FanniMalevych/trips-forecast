import axios from "axios";
import { YOUR_API_KEY } from ".";

export const getTripForecast = (city, startDate, endDate, func) => {
  axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
    .then(res => {
      func(res.data.days)
    })
    .catch(error => console.log(error))
}

export const getTodayForecast = (city, func) => {
  axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${YOUR_API_KEY}&contentType=json`)
    .then(res => {
       func(res.data.days[0])
    })
    .catch(error => console.log(error))
}