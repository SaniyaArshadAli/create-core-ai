import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, Code, GraduationCap } from "lucide-react";

const ServicesSnapshot = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: "Custom ML Model Development",
      description: "Build tailored machine learning solutions for your specific business needs.",
    },
    {
      icon: <Brain className="w-10 h-10 text-accent" />,
      title: "AI Consulting Packages",
      description: "Expert guidance for chatbots, NLP pipelines, recommendation systems, and more.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-accent" />,
      title: "Student Project Assistance",
      description: "End-to-end mentoring from idea to implementation with debugging support.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-accent" />,
      title: "Idea Generation & Research",
      description: "Get curated project ideas with roadmaps, datasets, and references.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional AI Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consulting to complete project delivery, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-smooth border-2 hover:border-accent">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20your%20AI%20services.%20I%20would%20like%20to%20request%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg">
              Request a Quote
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSnapshot;
