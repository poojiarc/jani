import { Link } from "react-router-dom";
import { Home, Info, Wrench, Phone, Mail, MapPin, Leaf, ShieldCheck, Tractor, Package, Users, Facebook, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Social Media */}
      <div className="border-b border-muted-foreground/20 py-6">
        <div className="container-narrow mx-auto px-4 flex justify-center gap-4">
          <a href="#" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors duration-200" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors duration-200" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors duration-200" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                <li key={item.label} className="flex items-center gap-2 text-sm opacity-80">
                  <item.icon className="w-4 h-4" /> {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4" /> 7019481058
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Mail className="w-4 h-4" /> janicaagro@gmail.com
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Indiranagar, Bangalore
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
