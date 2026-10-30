
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  CalendarDays,
  Clock3,
  Droplets,
  Wind,
  Cloud,
  CloudRain,
  Sunrise,
  Sunset,
  Thermometer,
} from "lucide-react";
import ForecastSkeleton from "./ForecastSkeleton";
import DailyCard from "./DailyCard";
import HourlyCard from "./HourlyCard";




const ForecustWeather = () => {
  const weatherDetails = useSelector(
    (state) => state.wheatherDetails.forecast
  );

  const loading = useSelector(
    (state) => state.wheatherDetails.loading
  );

  // Support both direct array and OpenWeatherMap response
  const forecastList = Array.isArray(weatherDetails)
    ? weatherDetails
    : weatherDetails?.list || [];

  // Group forecast data by local calendar day
  const dailyForecast = useMemo(() => {
    const groups = {};

    forecastList.forEach((item) => {
      const date = new Date(item.dt * 1000);

      const key = [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      ].join("-");

      if (!groups[key]) {
        groups[key] = {
          timestamp: item.dt,
          items: [],
        };
      }

      groups[key].items.push(item);
    });

    return Object.values(groups).slice(0, 5);
  }, [forecastList]);

  // Next 24 hours (8 entries × 3 hours)
  const hourlyForecast = forecastList.slice(0, 8);

  if (loading) {
    return <ForecastSkeleton />;
  }

  if (!forecastList.length) {
    return (
      <div className="card border border-base-300 bg-base-100">
        <div className="card-body items-center py-12 text-center">
          <Cloud size={48} className="text-base-content/30" />

          <h3 className="text-lg font-bold">
            No forecast available
          </h3>

          <p className="text-sm text-base-content/50">
            Search for a city to see its weather forecast.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full space-y-8">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">
          Weather Forecast
        </h2>

        <p className="mt-1 text-sm text-base-content/50">
          Stay updated with upcoming weather conditions
        </p>
      </div>

      {/* Hourly Forecast */}
      <div className="space-y-4">

        <div className="flex items-center gap-2">
          <Clock3 size={20} className="text-primary" />

          <h3 className="text-lg font-bold">
            Next 24 Hours
          </h3>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {hourlyForecast.map((item, index) => (
            <HourlyCard
              key={item.dt}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>

      {/* Daily Forecast */}
      <div className="space-y-4">

        <div className="flex items-center gap-2">
          <CalendarDays size={20} className="text-primary" />

          <h3 className="text-lg font-bold">
            5 Days Forecast
          </h3>
        </div>

        <div className="space-y-3">
          {dailyForecast.map((day, index) => (
            <DailyCard
              key={day.timestamp}
              day={day}
              index={index}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default ForecustWeather;
