import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { services } from "@/data/services";

const ServiceDetailPage = () => {
  useScrollReveal();
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="section-padding text-center">
        <h1 className="text-2xl font-serif font-bold">Service not found</h1>
        <Link to="/services" className="text-primary hover:underline mt-4 inline-block">
          ← Back to Services
        </Link>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main>
      <PageBanner title={service.title} subtitle={service.shortDesc} bgImage={service.image} />

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start scroll-reveal">
            {/* Image */}
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 lg:h-96 object-cover"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="font-serif text-xl font-semibold text-primary-foreground drop-shadow-lg">
                  {service.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                {service.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          </div>

          {/* Detail items */}
          <div className="mt-12 scroll-reveal">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.items.map((item, j) => {
                const [label, ...rest] = item.split(":");
                const detail = rest.join(":");
                return (
                  <div
                    key={j}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover-card-effect"
                    style={{ transitionDelay: `${j * 50}ms` }}
                  >
                    <span className="text-accent mt-1 font-bold text-lg">•</span>
                    <div>
                      <strong className="text-foreground">{label}</strong>
                      {detail && <span className="text-muted-foreground">:{detail}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-narrow mx-auto text-center scroll-reveal">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-accent-foreground mb-4">
            Interested in {service.title}?
          </h2>
          <p className="text-accent-foreground/80 mb-8">
            Get in touch with our experts for personalized guidance and solutions.
          </p>
          <a
            href="https://wa.me/917019481058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" /> Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
