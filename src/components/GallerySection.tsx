import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      title: "Modern Computer Lab",
      description: "State-of-the-art computer lab with latest hardware and software",
      emoji: "💻"
    },
    {
      title: "Interactive Classrooms",
      description: "Smart classrooms equipped with projectors and interactive boards",
      emoji: "🏫"
    },
    {
      title: "Industry Workshops",
      description: "Regular workshops conducted by industry experts and professionals",
      emoji: "👥"
    },
    {
      title: "Placement Drive",
      description: "Regular placement drives with top companies visiting our campus",
      emoji: "🎯"
    },
    {
      title: "Student Projects",
      description: "Students working on live projects and innovative solutions",
      emoji: "🚀"
    },
    {
      title: "Achievement Ceremony",
      description: "Celebrating our students' success and achievements",
      emoji: "🏆"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Campus & Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a glimpse into our modern facilities and celebrate the success of our students
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary to-accent h-96 flex items-center justify-center relative">
                    <div className="text-center text-white p-8">
                      <div className="text-8xl mb-6">{item.emoji}</div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-lg text-white/90 max-w-md mx-auto">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;