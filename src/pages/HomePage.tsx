import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Leaf, Package, Tractor, Users, TrendingUp, ShieldCheck, FlaskConical, Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import useScrollReveal from "@/hooks/useScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import cropProtection from "@/assets/crop-protection.jpg";
import cattleFeed from "@/assets/cattle-feed.jpg";
import fieldAdvisory from "@/assets/field-advisory.jpg";


const heroImages = [heroBg, heroBg2, heroBg3];

const offerings = [
  { icon: Leaf, title: "Agricultural Inputs", desc: "Pesticides, Fertilizers, Seeds" },
  { icon: Package, title: "Cattle Feed & Supplements", desc: "Quality nutrition for livestock" },
  { icon: Tractor, title: "Field Visits & Crop Advisory", desc: "On-site expert guidance" },
  { icon: Users, title: "Farmer Follow-up & Support", desc: "Continuous engagement & care" },
  { icon: TrendingUp, title: "Bulk Fertilizer Supply", desc: "Large-scale supply solutions" },
];

const whyChoose = [
  { icon: Users, title: "Farmer-Centric Approach", emoji: "🌾" },
  { icon: FlaskConical, title: "Expert Recommendations", emoji: "🧪" },
  { icon: Tractor, title: "On-Field Support & Visits", emoji: "🚜" },
  { icon: Package, title: "Demand-Based Product Supply", emoji: "📦" },
  { icon: TrendingUp, title: "Focus on Yield Improvement", emoji: "📈" },
];

const services = [
  { image: cropProtection, title: "Crop Protection", desc: "Effective solutions for pest and disease control." },
  { image: cattleFeed, title: "Cattle Nutrition", desc: "Quality feed including bhusa, chakke & supplements." },
  { image: fieldAdvisory, title: "Field Advisory", desc: "On-site visits and expert crop guidance." },
];

const HomePage = () => {
  useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <main>
      {/* Hero with slideshow */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Agricultural fields"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-primary-foreground scale-125" : "bg-primary-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground leading-tight hero-fade-in">
            🌱 Empowering Farmers with Smart Agricultural Solutions
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 hero-fade-in-delay">
            Quality Inputs • Expert Guidance • Field-Level Support
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hero-fade-in-delay-2"
          >
            <Phone className="w-5 h-5" /> Contact Us
          </Link>
        </div>
      </section>
{/* About Preview */}
<section className="section-padding">
  <div className="container-narrow mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div className="scroll-reveal">
        <img
          src={fieldAdvisory}
          alt="Janicaa Agro field advisory"
          className="rounded-xl shadow-lg w-full object-cover h-80"
        />
      </div>

      {/* Content */}
      <div className="scroll-reveal space-y-5 text-muted-foreground leading-relaxed">

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
          About Janicaa Agro
        </h2>

        <p>
          Janicaa Agro Solutions Private Limited is a farmer-focused agricultural
          business committed to delivering quality inputs and practical solutions
          for modern farming.
        </p>

        <p>
          We supply pesticides, fertilizers, seeds, cattle feed and provide
          expert crop advisory tailored to crop and soil conditions.
        </p>

        <p>
          Through field visits and continuous farmer support we help improve
          productivity, sustainability and yield outcomes.
        </p>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Learn More →
        </Link>

      </div>

    </div>
  </div>
</section>
{/* Services Preview */}
<section className="section-padding" style={{ background: "var(--section-gradient)" }}>
  <div className="container-narrow mx-auto">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 scroll-reveal">
      Our Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, i) => (
        <div
          key={i}
          className="scroll-reveal rounded-xl overflow-hidden bg-card shadow-sm hover-card-effect border border-border"
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          <div className="p-6">
            <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* View All Services Button */}
    <div className="text-center mt-12 scroll-reveal">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        View All Services <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</section>
      {/* Key Offerings */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 scroll-reveal">
            Our Key Offerings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <div
                key={i}
                className="scroll-reveal bg-card rounded-xl p-6 shadow-sm hover-card-effect border border-border"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-1 font-sans">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <CheckCircle className="w-5 h-5 text-accent mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Janicaa */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 scroll-reveal">
            Why Choose Janicaa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="scroll-reveal text-center p-6 rounded-xl border border-border hover-card-effect bg-background"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <p className="font-medium text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Highlight */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-8">
            Get In Touch
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Phone className="w-5 h-5" /> <span>7019481058</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <Mail className="w-5 h-5" /> <span>janicaagro@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <MapPin className="w-5 h-5" /> <span>Om Chambers, Indiranagar, Bangalore</span>
            </div>
          </div>
          <a
            href="https://wa.me/917019481058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
