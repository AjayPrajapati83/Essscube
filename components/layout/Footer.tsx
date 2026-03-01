import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-textDark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
              ESSSqube
            </h3>
            <p className="text-gray-300">
              Pocket friendly sophistication for curating events filled with smiles.
            </p>
          </div>

          <div>
            <h4 className="font-accent font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Shimpoli, Borivali West, Mumbai 400092</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 73043 83036</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@esssqube.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-accent font-semibold mb-4">Founders</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Shree Pillay</li>
              <li>Sarvambh Churmure</li>
              <li>Sachin Tiwari</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ESSSqube Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
