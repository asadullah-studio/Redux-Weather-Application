const WeatherInfoCard = ({
  icon: Icon,
  title,
  value,
  description,
}) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
    <div className="mb-4 flex items-center justify-between">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
        <Icon size={20} />
      </div>
    </div>

    <h3 className="text-2xl font-bold text-slate-800">
      {value}
    </h3>

    <p className="mt-2 text-xs text-slate-500">
      {description}
    </p>
  </div>
);

export default WeatherInfoCard;