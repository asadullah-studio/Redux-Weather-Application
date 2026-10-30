import {
  Droplets,
  Cloud,
} from "lucide-react";

const DailyCard = ({ day, index }) => {
  const { items, timestamp } = day;

  const maxTemp = Math.max(
    ...items.map((item) => item.main?.temp_max ?? -Infinity),
  );

  const minTemp = Math.min(
    ...items.map((item) => item.main?.temp_min ?? Infinity),
  );

  const validMax = Number.isFinite(maxTemp) ? maxTemp : null;
  const validMin = Number.isFinite(minTemp) ? minTemp : null;

  const maxPop = Math.max(...items.map((item) => item.pop ?? 0));

  const representative = items[Math.floor(items.length / 2)];
  const weather = representative?.weather?.[0];

  const getWeatherIcon = (icon) => {
    return icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;
  };

  // Kelvin to Celsius
  const toCelsius = (temp) => {
    if (temp == null) return "--";
    return Math.round(temp - 273.15);
  };

  // Format day
  const formatDay = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-base-300 bg-base-100 p-3 transition-colors hover:bg-base-200 sm:p-4">
      {/* Day */}
      <div className="min-w-0 flex-1">
        <p className="font-semibold">
          {index === 0 ? "Today" : formatDay(timestamp)}
        </p>
        <p className="mt-1 text-xs capitalize text-base-content/50">
          {weather?.description || "Unknown"}
        </p>
      </div>

      {/* Weather Icon */}
      {getWeatherIcon(weather?.icon) ? (
        <img
          src={getWeatherIcon(weather.icon)}
          alt={weather?.description || "Weather"}
          className="h-12 w-12 shrink-0 object-contain"
          loading="lazy"
        />
      ) : (
        <Cloud className="shrink-0 text-base-content/40" />
      )}

      {/* Rain probability */}
      <div className="hidden items-center gap-1 text-sm text-info sm:flex">
        <Droplets size={15} />
        {Math.round(maxPop * 100)}%
      </div>

      {/* Temperature */}
      <div className="flex shrink-0 items-center gap-2">
        <span className="text-base font-bold">
          {validMax != null ? toCelsius(validMax) : "--"}°
        </span>

        <span className="text-base-content/40">
          {validMin != null ? toCelsius(validMin) : "--"}°
        </span>
      </div>
    </div>
  );
};

export default DailyCard;
