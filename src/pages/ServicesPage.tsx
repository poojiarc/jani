import { Leaf, ShieldCheck, Tractor, Package, Users } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import servicesBg from "@/assets/services-bg.jpg";
import agriInputsImg from "@/assets/serv-agri-inputs.png";
import cattleFeedImg from "@/assets/serv-cattle-feed.png";
import cropProtectionImg from "@/assets/serv-crop-protection.png";
import fieldAdvisory from "@/assets/field-advisory.jpg";
import farmerSupport from "@/assets/farmer-support.jpg";

const services = [
  {
    icon: Leaf,
    title: "Agricultural Inputs Supply",
    image: agriInputsImg,
    desc: "We provide a complete range of high-quality agricultural inputs to support farmers at every stage:",
    items: [
      "Pesticides: Effective solutions for controlling insects, pests, and crop damage",
      "Fungicides: Preventive and curative products to manage fungal diseases",
      "Bulk Fertilizers: NPK and customized nutrient solutions in large quantities",
      "Water Soluble Fertilizers (WSF): High-efficiency nutrients for drip irrigation and foliar application",
      "Seeds: High-yielding and certified seeds suited for local conditions",
      "Micronutrients & Growth Promoters: Zinc, Boron, Humic Acid, Amino Acids, etc.",
      "Quality Assurance: Only trusted brands and tested products supplied",
    ],
  },
  {
    icon: Package,
    title: "Cattle Feed & Nutrition",
    image: cattleFeedImg,
    desc: "We support livestock farmers with reliable and nutritious feed solutions:",
    items: [
      "Bhusa (Dry Fodder): Clean and quality wheat straw for daily feeding",
      "Chakke (Oil Cakes): Protein-rich supplements like groundnut cake, cottonseed cake",
      "Balanced Cattle Feed: Scientifically formulated feed for milk yield and health",
      "Mineral Mixtures: Essential nutrients for improved immunity and reproduction",
      "Feed Supplements: Calcium, vitamins, and digestive enhancers",
      "Customized Feed Guidance: Based on cattle type, age, and production goals",
      "Consistent Supply: Regular availability in bulk quantities",
    ],
  },
  {
    icon: Tractor,
    title: "Field Visits & Crop Advisory",
    image: fieldAdvisory,
    desc: "Our expert team provides on-ground support to farmers:",
    items: [
      "Crop Health Analysis: Regular inspection of crop condition and growth stage",
      "Soil & Nutrient Assessment: Recommendations based on soil condition",
      "Pest & Disease Identification: Early detection to prevent crop loss",
      "Stage-wise Advisory: Guidance from sowing to harvesting",
      "On-field Demonstrations: Proper usage of fertilizers and chemicals",
      "Weather-based Recommendations: Adjusting practices based on climate conditions",
      "Personalized Solutions: Tailored advice for each farmer's field",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Crop Protection Solutions",
    image: cropProtectionImg,
    desc: "We provide scientifically backed crop protection strategies:",
    items: [
      "Pesticide Recommendations: Based on pest type and infestation level",
      "Fungicide Planning: Preventive and curative spray schedules",
      "Herbicide Usage: Effective weed control solutions",
      "Integrated Pest Management (IPM): Sustainable and balanced approach",
      "Correct Dosage Guidance: Avoid overuse and ensure safety",
      "Application Techniques: Spraying methods for maximum effectiveness",
      "Seasonal Planning: Crop protection calendar for better yield",
    ],
  },
  {
    icon: Users,
    title: "Farmer Follow-up & Support",
    image: farmerSupport,
    desc: "We ensure continuous support beyond product supply:",
    items: [
      "Regular Follow-ups: Stay connected with farmers throughout crop cycle",
      "Progress Monitoring: Track crop performance and improvement",
      "Problem Resolution: Immediate support for pest, disease, or nutrient issues",
      "Yield Improvement Guidance: Continuous advisory for better productivity",
      "Relationship Building: Long-term trust and farmer engagement",
      "Feedback Collection: Understanding farmer challenges and improving services",
      "On-call Support: Quick assistance whenever needed",
    ],
  },
];

const ServicesPage = () => {
  useScrollReveal();

  return (
    <main>
      <PageBanner title="🌿 Our Services" subtitle="Comprehensive agricultural solutions for modern farming" bgImage={servicesBg} />

      <section className="section-padding">
        <div className="container-narrow mx-auto space-y-12">
          {services.map((service, i) => (
            <div
              key={i}
              className={`scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-xl shadow-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 lg:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground drop-shadow-lg">{service.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="text-2xl font-serif font-bold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-0.5 font-bold">•</span>
                      <span><strong className="text-foreground">{item.split(":")[0]}:</strong>{item.includes(":") ? item.substring(item.indexOf(":") + 1) : ""}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
