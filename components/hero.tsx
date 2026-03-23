interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section
      className="relative w-full h-96 md:h-[500px] bg-black bg-cover bg-center overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 text-balance">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
