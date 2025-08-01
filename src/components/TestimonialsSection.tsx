import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Developer at TCS",
      photo: "👨‍💻",
      feedback: "IANT transformed my career completely. The Python course was comprehensive and the placement support was excellent. Got placed in TCS with 6 LPA package!",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Data Analyst at Wipro",
      photo: "👩‍💼",
      feedback: "The Data Science course at IANT gave me practical skills with real datasets. The instructors were amazing and always available for doubt clearing. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Full Stack Developer at Infosys",
      photo: "👨‍🎓",
      feedback: "Best decision I made was joining IANT for Full Stack Development. The curriculum is industry-relevant and the live projects helped me build a strong portfolio.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from our alumni who are now working in top companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 absolute" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.feedback}"
                  </p>
                </div>
                
                <div className="flex items-center pt-4 border-t border-border">
                  <div className="text-3xl mr-4">{testimonial.photo}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-success/10 rounded-full px-6 py-3">
            <span className="text-success font-medium">🎉 Join 10,000+ successful professionals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;