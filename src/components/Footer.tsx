import { Facebook, Twitter, Instagram, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20your%20courses";

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold">IANT</span>
            </div>
            <p className="text-white/80 mb-4">
              Leading IT training institute in Indore, transforming careers with industry-relevant courses and 100% placement assistance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="text-white/80 hover:text-primary transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                  Python Programming
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                  Full Stack Development
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                  Data Science
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                  Ethical Hacking
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                  Tally with GST
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/80">info@iant.edu.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 text-primary mt-1" />
                <span className="text-white/80">
                  123 IT Park, Scheme No. 54,<br />
                  Vijay Nagar, Indore, MP
                </span>
              </div>
            </div>
            
            <div className="mt-4">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-success hover:bg-success/90 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            © 2024 IANT (Indian Academy of New Technology). All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/80 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-white/80 hover:text-primary transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;