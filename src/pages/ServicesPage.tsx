import { Leaf, ShieldCheck, Tractor, Package, Users, TrendingUp } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import servicesBg from "@/assets/services-bg.jpg";
import agriInputs from "@/assets/agri-inputs.jpg";
import cattleFeed from "@/assets/cattle-feed.jpg";
import fieldAdvisory from "@/assets/field-advisory.jpg";
import cropProtectionImg from "@/assets/crop-protection-service.jpg";
import farmerSupport from "@/assets/farmer-support.jpg";
import demandSourcing from "@/assets/demand-sourcing.jpg";

const services = [
  {
    icon: Leaf,
    title: "Agricultural Inputs Supply",
    image: agriInputs,
    desc: "We provide a wide range of high-quality agricultural products including:",
    items: ["Pesticides", "Fungicides", "Fertilizers (including bulk supply)", "Seeds"],
  },
  {
    icon: Package,
    title: "Cattle Feed & Nutrition",
    image: cattleFeed,
    desc: "We supply essential cattle feed products such as:",
    items: ["Bhusa", "Chakke", "Nutritional feed", "Feed supplements for improved livestock health"],
  },
  {
    icon: Tractor,
    title: "Field Visits & Crop Advisory",
    image: fieldAdvisory,
    desc: "Our experts visit farms to:",
    items: ["Analyze crop conditions", "Identify pest and disease issues", "Provide practical and timely solutions"],
  },
  {
    icon: ShieldCheck,
    title: "Crop Protection Solutions",
    image: cropProtectionImg,
    desc: "We recommend the right:",
    items: ["Pesticides", "Fungicides"],
    extra: "Based on crop type, season, and field conditions.",
  },
  {
    icon: Users,
    title: "Farmer Follow-up & Support",
    image: farmerSupport,
    desc: "We believe in continuous engagement:",
    items: ["Regular follow-ups with farmers", "Monitoring crop progress", "Ongoing advisory for better yield"],
  },
  {
    icon: TrendingUp,
    title: "Demand-Based Sourcing",
    image: demandSourcing,
    desc: "We procure and supply products based on specific farmer requirements to ensure availability and efficiency.",
    items: [],
  },
];

const ServicesPage = () => {
  useScrollReveal();

  return (
    <main>
      <PageBanner title="🌿 Our Services" subtitle="Comprehensive agricultural solutions for modern farming" bgImage={servicesBg} />

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="scroll-reveal rounded-xl overflow-hidden shadow-sm hover-card-effect border border-border bg-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Background image with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-primary-foreground drop-shadow-lg">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-3">{service.desc}</p>
                  {service.items.length > 0 && (
                    <ul className="space-y-2">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="text-accent mt-0.5">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.extra && <p className="text-sm text-muted-foreground mt-3 italic">{service.extra}</p>}
                </div>
              </div>
            ))}
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
