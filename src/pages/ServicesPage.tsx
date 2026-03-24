import { Leaf, ShieldCheck, Tractor, Package, Users, TrendingUp, MessageCircle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Leaf,
    emoji: "🌱",
    title: "Agricultural Inputs Supply",
    desc: "We provide a wide range of high-quality agricultural products including:",
    items: ["Pesticides", "Fungicides", "Fertilizers (including bulk supply)", "Seeds"],
  },
  {
    icon: Package,
    emoji: "🐄",
    title: "Cattle Feed & Nutrition",
    desc: "We supply essential cattle feed products such as:",
    items: ["Bhusa", "Chakke", "Nutritional feed", "Feed supplements for improved livestock health"],
  },
  {
    icon: Tractor,
    emoji: "🚜",
    title: "Field Visits & Crop Advisory",
    desc: "Our experts visit farms to:",
    items: ["Analyze crop conditions", "Identify pest and disease issues", "Provide practical and timely solutions"],
  },
  {
    icon: ShieldCheck,
    emoji: "🌾",
    title: "Crop Protection Solutions",
    desc: "We recommend the right:",
    items: ["Pesticides", "Fungicides"],
    extra: "Based on crop type, season, and field conditions.",
  },
  {
    icon: Users,
    emoji: "📊",
    title: "Farmer Follow-up & Support",
    desc: "We believe in continuous engagement:",
    items: ["Regular follow-ups with farmers", "Monitoring crop progress", "Ongoing advisory for better yield"],
  },
  {
    icon: TrendingUp,
    emoji: "📦",
    title: "Demand-Based Sourcing",
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
                className="scroll-reveal bg-card rounded-xl p-8 shadow-sm hover-card-effect border border-border"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                </div>
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
            <MessageCircle className="w-5 h-5" /> Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
