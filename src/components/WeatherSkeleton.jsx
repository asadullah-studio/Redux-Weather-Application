const WeatherSkeleton = () => (
  <div className="w-full animate-pulse space-y-6">
    <div className="h-8 w-48 rounded-lg bg-slate-200" />

    <div className="rounded-3xl bg-slate-200 p-8">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="h-6 w-32 rounded bg-slate-300" />
          <div className="h-20 w-40 rounded bg-slate-300" />
          <div className="h-5 w-36 rounded bg-slate-300" />
        </div>
        <div className="h-24 w-24 rounded-full bg-slate-300" />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="h-32 rounded-2xl bg-slate-200"
        />
      ))}
    </div>
  </div>
);

export default WeatherSkeleton;