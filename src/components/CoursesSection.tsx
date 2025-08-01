import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Award, MessageCircle } from "lucide-react";

const CoursesSection = () => {
  const whatsappLink = "https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20your%20courses";

  const courses = [
    {
      title: "Python Programming",
      description: "Master Python from basics to advanced concepts with real-world projects",
      duration: "3 Months",
      students: "2000+",
      icon: "🐍",
      features: ["Core Python", "Django/Flask", "Data Structures", "Live Projects"]
    },
    {
      title: "Full Stack Development", 
      description: "Complete web development with React, Node.js, and modern technologies",
      duration: "6 Months",
      students: "1500+",
      icon: "⚛️",
      features: ["React.js", "Node.js", "MongoDB", "Portfolio Projects"]
    },
    {
      title: "Data Science & Analytics",
      description: "Learn data analysis, machine learning, and AI with hands-on practice",
      duration: "4 Months",
      students: "1200+",
      icon: "📊",
      features: ["Python for Data", "Machine Learning", "Data Visualization", "Real Datasets"]
    },
    {
      title: "Ethical Hacking",
      description: "Cybersecurity fundamentals and ethical hacking techniques",
      duration: "3 Months",
      students: "800+",
      icon: "🔒",
      features: ["Network Security", "Penetration Testing", "Digital Forensics", "Certifications"]
    },
    {
      title: "Tally with GST",
      description: "Complete accounting software training with GST compliance",
      duration: "2 Months",
      students: "3000+",
      icon: "📈",
      features: ["Tally Prime", "GST Filing", "Inventory Management", "Financial Reports"]
    },
    {
      title: "Digital Marketing",
      description: "Master online marketing strategies and tools for business growth",
      duration: "3 Months",
      students: "1000+",
      icon: "📱",
      features: ["SEO/SEM", "Social Media", "Google Ads", "Analytics"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our industry-relevant courses designed by experts and trusted by leading companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-b from-card to-secondary">
              <CardHeader>
                <div className="text-4xl mb-4">{course.icon}</div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <Award className="w-3 h-3 mr-2 text-success" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary-dark shadow-lg"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enquire Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;