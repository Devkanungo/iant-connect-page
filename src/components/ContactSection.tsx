import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  const whatsappLink = "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20your%20courses";

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your IT career journey? Contact us today for course details and enrollment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visit Our Campus</h3>
                    <p className="text-muted-foreground">
                      123 IT Park, Scheme No. 54,<br />
                      Vijay Nagar, Indore, MP 452010
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      +91 87654 32109
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@iant.edu.in<br />
                      admissions@iant.edu.in
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-success to-success/90 text-white">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Enquiry</h3>
                <p className="mb-4 text-white/90">
                  Get instant responses to your questions on WhatsApp
                </p>
                <Button 
                  asChild
                  variant="outline"
                  className="bg-white text-success hover:bg-white/90 border-white"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Find us easily in the heart of Indore's IT hub
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <select className="w-full p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Select Course</option>
                    <option>Python Programming</option>
                    <option>Full Stack Development</option>
                    <option>Data Science</option>
                    <option>Ethical Hacking</option>
                    <option>Tally with GST</option>
                  </select>
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary-dark shadow-lg"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Send Enquiry via WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;