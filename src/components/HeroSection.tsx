import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Play } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/917415176611?text=Hi%20I%20am%20interested%20in%20your%20courses";

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary via-primary-light to-accent flex items-center pt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-bounce-gentle">
              <span className="text-white text-sm font-medium">🎯 100% Placement Guarantee</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start Your Career in
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                IT with India's
              </span>
              Leading Institute!
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your future with industry-relevant courses in Python, Full Stack Development, 
              Data Science, and more. Join 10,000+ successful professionals who started their IT journey with IANT.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6 rounded-xl"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enquire Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-white/80 text-sm">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Visual */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🐍</div>
                  <div className="text-white font-medium">Python</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⚛️</div>
                  <div className="text-white font-medium">Full Stack</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-white font-medium">Data Science</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="text-white font-medium">Cyber Security</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;