import { Link } from "react-router-dom";
import { Home, Info, Wrench, Phone, Mail, MapPin, Leaf, ShieldCheck, Tractor, Package, Users, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import logo from "@/assets/logo-new.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Janicaa Agro" className="h-12 w-auto object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold">Janicaa Agro</span>
                <span className="text-xs opacity-70 tracking-wide">Solutions Pvt. Ltd.</span>
              </div>
            </Link>
            <p className="text-sm opacity-70 mb-4">
              Supporting farmers with quality agricultural inputs, expert crop advisory, cattle feed supply, and field-level support to improve productivity and sustainability.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary transition" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", icon: Home, label: "Home" },
                { to: "/about", icon: Info, label: "About" },
                { to: "/services", icon: Wrench, label: "Services" },
                { to: "/contact", icon: Phone, label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                    <item.icon className="w-4 h-4" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { icon: Leaf, label: "Agricultural Inputs" },
                { icon: Package, label: "Cattle Feed" },
                { icon: Tractor, label: "Crop Advisory" },
                { icon: ShieldCheck, label: "Crop Protection" },
                { icon: Users, label: "Farmer Support" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to="/services" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                    <item.icon className="w-4 h-4" /> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+917019481058" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                  <Phone className="w-4 h-4" /> 7019481058
                </a>
              </li>
              <li>
                <a href="mailto:janicaagro@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100">
                  <Mail className="w-4 h-4" /> janicaagro@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Om+Chambers+Indiranagar+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm opacity-80 hover:opacity-100"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    Registered Address:<br />
                    Om Chambers, 648/A,<br />
                    4th Floor, Binnamangala 1st Stage,<br />
                    Indiranagar, Bengaluru - 560038
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-muted-foreground/20 py-6">
        <div className="container-narrow mx-auto px-4 text-center space-y-2">
          <div className="flex justify-center items-center gap-1 text-sm opacity-70">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
          <p className="text-xs opacity-50">
            Copyright © Janicaa Agro Solutions Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
