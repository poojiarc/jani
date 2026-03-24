import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import PageBanner from "@/components/PageBanner";
import servicesBg from "@/assets/services-bg.jpg";

const ContactPage = () => {
  useScrollReveal();

  return (
    <main>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you" bgImage={servicesBg} />

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="scroll-reveal space-y-8">
              <h2 className="text-2xl font-serif font-bold">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:7019481058" className="text-muted-foreground hover:text-primary transition-colors">7019481058</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:janicaagro@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">janicaagro@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">
                      Om Chambers, 648/A<br />
                      4th Floor<br />
                      Binnamangala 1st Stage<br />
                      Indiranagar<br />
                      Bangalore - 560038
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday to Saturday: 8 AM – 7 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="scroll-reveal flex flex-col items-center justify-center bg-accent/5 rounded-2xl p-10 border border-border" style={{ transitionDelay: "200ms" }}>
              <MessageCircle className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-2xl font-serif font-bold mb-4 text-center">Chat with us on WhatsApp</h2>
              <p className="text-muted-foreground text-center mb-8">
                Get instant support and personalized agricultural solutions. We're just a message away!
              </p>
              <a
                href="https://wa.me/917019481058"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent text-accent-foreground font-bold text-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
