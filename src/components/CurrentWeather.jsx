import { useSelector } from "react-redux";
import {
  MapPin,
  Droplets,
  Wind,
  Gauge,
  Eye,
  Cloud,
  Sunrise,
  Sunset,
  Thermometer,
  Compass,
} from "lucide-react";
import WeatherSkeleton from "./WeatherSkeleton";
import WeatherInfoCard from "./WeatherInfoCard";

// Convert Kelvin to Celsius
const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

// Convert Unix timestamp to local time using timezone offset
const formatTime = (timestamp, timezone) => {
  if (!timestamp) return "--:--";

  return new Date((timestamp + timezone) * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
};

// Wind direction
const getWindDirection = (degree) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

  return directions[Math.round(degree / 45) % 8];
};

const CurrentWeather = () => {
  const weatherDetails = useSelector((state) => state.wheatherDetails.current);

  const loading = useSelector((state) => state.wheatherDetails.loading);

  if (loading) {
    return <WeatherSkeleton />;
  }

  if (!weatherDetails) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
        <Cloud size={40} className="mx-auto mb-3 text-slate-400" />
        <h3 className="text-lg font-semibold text-slate-700">
          No weather data available
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Search for a city to see current weather.
        </p>
      </div>
    );
  }

  const { name, sys, main, weather, wind, clouds, visibility, timezone } =
    weatherDetails;

  const condition = weather?.[0];

  const weatherIcon = condition?.icon;

  const weatherIconUrl = weatherIcon
    ? `https://openweathermap.org/img/wn/${weatherIcon}@4x.png`
    : null;

  const weatherCards = [
    {
      icon: Thermometer,
      title: "Feels Like",
      value: `${kelvinToCelsius(main?.feels_like)}°C`,
      description: "Perceived temperature",
    },
    {
      icon: Droplets,
      title: "Humidity",
      value: `${main?.humidity ?? "--"}%`,
      description: "Relative humidity",
    },
    {
      icon: Wind,
      title: "Wind Speed",
      value: `${wind?.speed ?? "--"} m/s`,
      description: `Direction: ${wind?.deg != null ? getWindDirection(wind.deg) : "--"}`,
    },
    {
      icon: Gauge,
      title: "Pressure",
      value: `${main?.pressure ?? "--"} hPa`,
      description: "Atmospheric pressure",
    },
    {
      icon: Eye,
      title: "Visibility",
      value: `${visibility != null ? (visibility / 1000).toFixed(1) : "--"} km`,
      description: "Current visibility range",
    },
    {
      icon: Cloud,
      title: "Cloud Coverage",
      value: `${clouds?.all ?? "--"}%`,
      description: "Sky cloud coverage",
    },
  ];

  return (
    <section className="w-full space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Current Weather</h2>

        <p className="mt-1 text-sm text-slate-500">
          Real-time weather conditions
        </p>
      </div>

      {/* Main Weather Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-6 text-white shadow-xl md:p-10">
        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="absolute -bottom-28 -left-10 h-64 w-64 rounded-full bg-white/10" />

        <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Location and temperature */}
          <div>
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin size={18} />

              <span className="text-sm font-medium">
                {name}, {sys?.country}
              </span>
            </div>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-8xl">
              {main?.temp != null ? kelvinToCelsius(main.temp) : "--"}°
            </h1>

            <p className="mt-3 text-xl font-medium capitalize text-blue-50">
              {condition?.description ?? "Unknown"}
            </p>

            <div className="mt-4 flex gap-4 text-sm text-blue-100">
              <span>
                H:{" "}
                {main?.temp_max != null ? kelvinToCelsius(main.temp_max) : "--"}
                °
              </span>

              <span>
                L:{" "}
                {main?.temp_min != null ? kelvinToCelsius(main.temp_min) : "--"}
                °
              </span>
            </div>
          </div>

          {/* Weather Icon */}
          <div className="flex flex-col items-center">
            {weatherIconUrl && (
              <img
                src={weatherIconUrl}
                alt={condition?.description ?? "Weather"}
                className="h-36 w-36 object-contain drop-shadow-lg md:h-48 md:w-48"
              />
            )}

            <p className="text-sm font-medium text-blue-100">
              {condition?.main ?? "Weather"}
            </p>
          </div>
        </div>
      </div>

      {/* Weather Details */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-slate-800">
          Weather Details
        </h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {weatherCards.map((item) => (
            <WeatherInfoCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      {/* Sun Information */}
      <div>
        <h3 className="mb-4 text-lg font-bold text-slate-800">Sun Schedule</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
              <Sunrise size={28} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Sunrise</p>
              <h3 className="text-xl font-bold text-slate-800">
                {formatTime(sys?.sunrise, timezone)}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="rounded-xl bg-indigo-50 p-3 text-indigo-500">
              <Sunset size={28} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Sunset</p>
              <h3 className="text-xl font-bold text-slate-800">
                {formatTime(sys?.sunset, timezone)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
