interface PageBannerProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const PageBanner = ({ title, subtitle, bgImage }: PageBannerProps) => {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground hero-fade-in">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg text-primary-foreground/80 hero-fade-in-delay">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
