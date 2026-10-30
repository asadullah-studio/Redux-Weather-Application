const ForecastSkeleton = () => (
  <div className="space-y-8 animate-pulse">

    <div className="space-y-2">
      <div className="h-7 w-48 rounded-lg bg-base-300" />
      <div className="h-4 w-64 rounded bg-base-300" />
    </div>

    {/* Hourly skeleton */}
    <div className="space-y-4">
      <div className="h-5 w-40 rounded bg-base-300" />

      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-52 min-w-32 flex-1 rounded-2xl bg-base-300"
          />
        ))}
      </div>
    </div>

    {/* Daily skeleton */}
    <div className="space-y-4">
      <div className="h-5 w-40 rounded bg-base-300" />

      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-20 rounded-2xl bg-base-300"
          />
        ))}
      </div>
    </div>

  </div>
);

export default ForecastSkeleton;