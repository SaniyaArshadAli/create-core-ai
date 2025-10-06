import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Brain, GraduationCap, Lightbulb, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-accent" />,
      title: "Custom ML Model Development",
      description: "We build customized machine learning solutions that fit your specific business needs and use cases.",
      features: [
        "End-to-end model development",
        "Custom architecture design",
        "Model optimization & tuning",
        "Production deployment support",
      ],
      pricing: "Starting at ₹42,000",
    },
    {
      icon: <Brain className="w-12 h-12 text-accent" />,
      title: "AI Consulting Packages",
      description: "Expert guidance for implementing chatbots, NLP pipelines, recommendation systems, and more.",
      features: [
        "Technology stack selection",
        "Architecture planning",
        "Implementation roadmap",
        "Best practices guidance",
      ],
      pricing: "From ₹16,800/session",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-accent" />,
      title: "Student Project Assistance",
      description: "Comprehensive mentoring from idea to implementation with debugging and deployment support.",
      features: [
        "Idea refinement & scoping",
        "Code review & debugging",
        "Implementation guidance",
        "Documentation help",
      ],
      pricing: "Starting at ₹4,200",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-accent" />,
      title: "Idea Generation & Research",
      description: "Get curated, original project ideas with complete roadmaps, datasets, and references.",
      features: [
        "Custom project ideas",
        "Implementation roadmap",
        "Dataset recommendations",
        "Reference materials",
      ],
      pricing: "From ₹2,500/idea",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Professional AI Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consulting to complete project delivery, we provide expert AI/ML services customized to your needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-smooth hover:shadow-lg transition-smooth border-2 hover:border-accent">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary rounded-lg">{service.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-accent">{service.pricing}</p>
                      <a
                        href={`https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in:%20${encodeURIComponent(service.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="cta">Get Quote</Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Contact us for a free consultation, and we'll help you choose the right solution. We also provide 1-hour foundational AI basics sessions with all services.
            </p>
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20would%20like%20to%20discuss%20my%20AI%20project%20needs."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
