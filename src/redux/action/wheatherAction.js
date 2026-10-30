import axiosInstance from "../../config/axiosInstance";

export const fetchWeatherPending = () => {
  return {
    type: "FETCH_WEATHER_PENDING",
  };
};

export const fetchCurrentSuccess = (data) => {
  return {
    type: "FETCH_CURRENT_SUCCESS",
    payload: data,
  };
};

export const fetchForecastSuccess = (data) => {
  return {
    type: "FETCH_FORECAST_SUCCESS",
    payload: data,
  };
};

export const fetchWeatherError = (error) => {
  return {
    type: "FETCH_WEATHER_ERROR",
    payload: error,
  };
};

export const setCity = (city) => {
  return {
    type: "SET_CITY",
    payload: city,
  };
};

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherPending());
    try {
      const currentWeather = await axiosInstance.get(
        `/data/2.5/weather?q=${city}&appid=${apiKey}`,
      );

      const forecastWeather = await axiosInstance.get(
        `/data/2.5/forecast?q=${city}&appid=${apiKey}`,
      );

      dispatch(fetchCurrentSuccess(currentWeather.data));
      dispatch(fetchForecastSuccess(forecastWeather.data.list));
    } catch (error) {
        dispatch(fetchWeatherError("Something went wrong while fetching weather data."));
    }
  };
};
