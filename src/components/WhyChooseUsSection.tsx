import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Briefcase, Clock, Award, Target } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Trophy,
      title: "100% Placement Guarantee",
      description: "We ensure job placement for all our students with our extensive industry network"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Learn from industry professionals with 10+ years of real-world experience"
    },
    {
      icon: Briefcase,
      title: "Live Projects",
      description: "Work on real-time projects to build a strong portfolio for your career"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Choose from morning, evening, or weekend batches that fit your schedule"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Get recognized certifications that are valued by top companies"
    },
    {
      icon: Target,
      title: "Personalized Attention",
      description: "Small batch sizes ensure individual attention and better learning outcomes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose IANT?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to your success with proven methods and industry expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/90">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Hiring Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;