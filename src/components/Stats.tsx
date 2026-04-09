export function Stats() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Done" },
    { value: "100%", label: "Satisfied Clients" },
  ];

  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-4">
                {stat.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
