import { Target, Eye, Leaf, Users, TrendingUp } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import aboutBg from "@/assets/about-bg.jpg";
import fieldAdvisory from "@/assets/field-advisory.jpg";

const AboutPage = () => {
  useScrollReveal();

  return (
    <main>
      <PageBanner title="About Janicaa Agro Solutions" subtitle="Committed to empowering farmers across India" bgImage={aboutBg} />

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Janicaa Agro Solutions Private Limited is a farmer-focused agricultural retail business committed to delivering quality inputs and practical solutions for modern farming.
              </p>
              <p>
                We provide a wide range of agricultural products including pesticides, fungicides, fertilizers, seeds, and cattle feed along with expert guidance tailored to crop and soil conditions.
              </p>
              <p>
                Our approach goes beyond selling products. We actively engage with farmers through field visits, follow-ups, and personalized crop advisory services.
              </p>
              <p>
                By understanding real-time farm challenges we recommend the right crop protection products and bulk fertilizers to improve yield and sustainability.
              </p>
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: "200ms" }}>
              <img src={fieldAdvisory} alt="Field advisory" className="rounded-xl shadow-lg w-full object-cover h-80" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <div className="scroll-reveal max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our mission is to support farmers with reliable products, informed decisions, and continuous guidance to achieve better productivity and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 scroll-reveal">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Farmer First", desc: "Every decision centered around farmer needs" },
              { icon: Eye, title: "Transparency", desc: "Honest advice and genuine products" },
              { icon: Leaf, title: "Sustainability", desc: "Eco-friendly farming practices" },
              { icon: TrendingUp, title: "Growth", desc: "Focused on improving yield outcomes" },
            ].map((v, i) => (
              <div key={i} className="scroll-reveal bg-card rounded-xl p-6 text-center hover-card-effect border border-border" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
