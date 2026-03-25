import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import servicesBg from "@/assets/services-bg.jpg";
import { services } from "@/data/services";

const ServicesPage = () => {
  useScrollReveal();

  return (
    <main>
      <PageBanner title="🌿 Our Services" subtitle="Comprehensive agricultural solutions for modern farming" bgImage={servicesBg} />

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="scroll-reveal group rounded-xl overflow-hidden bg-card shadow-sm hover-card-effect border border-border block"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-narrow mx-auto text-center scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent-foreground mb-4">
            🌟 Need expert guidance for your farm?
          </h2>
          <p className="text-accent-foreground/80 mb-8 text-lg">
            Contact us today for personalized agricultural solutions.
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

export default ServicesPage;
