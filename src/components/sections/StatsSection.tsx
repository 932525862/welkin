const StatsSection = () => {
  const stats = [
    { value: "15 000 +", label: "проданных единиц" },
    { value: "20 +", label: "сервисных точек" },
    { value: "18 месяцев", label: "гарантии" },
    { value: "Фильтры", label: "всегда в наличии" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-block bg-primary px-4 py-2 rounded-lg">
            <span className="text-primary-foreground font-bold text-xl">welkin.</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary italic mb-16">
          Почему Welkin — выбор №1 в Узбекистане
        </h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-primary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Delivery banner */}
        <div className="bg-card rounded-2xl p-8 border border-border text-center">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Бесплатная доставка по всему Узбекистану
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
