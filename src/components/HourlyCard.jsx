import {
  Droplets,
  Cloud
} from "lucide-react";

const HourlyCard = ({ item, index }) => {
  const weather = item.weather?.[0];

  const getWeatherIcon = (icon) => {
    return icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;
  };

  // Kelvin to Celsius
  const toCelsius = (temp) => {
    if (temp == null) return "--";
    return Math.round(temp - 273.15);
  };

  // Format time
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`card min-w-32 border border-base-300 bg-base-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
        index === 0 ? "border-primary/50 bg-primary/5" : ""
      }`}
    >
      <div className="card-body items-center gap-2 p-4">
        <p className="text-sm font-medium text-base-content/60">
          {index === 0 ? "Now" : formatTime(item.dt)}
        </p>

        {getWeatherIcon(weather?.icon) ? (
          <img
            src={getWeatherIcon(weather.icon)}
            alt={weather?.description || "Weather"}
            className="h-16 w-16 object-contain"
            loading="lazy"
          />
        ) : (
          <Cloud size={40} className="text-base-content/40" />
        )}

        <h3 className="text-2xl font-bold">{toCelsius(item.main?.temp)}°</h3>

        <p className="max-w-24 truncate text-xs capitalize text-base-content/60">
          {weather?.description || "Unknown"}
        </p>

        <div className="flex items-center gap-1 text-xs text-info">
          <Droplets size={13} />
          {Math.round((item.pop || 0) * 100)}%
        </div>
      </div>
    </div>
  );
};

export default HourlyCard;
