import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Rocket, Users } from "lucide-react";

const WorkWithUs = () => {
  const benefits = [
    {
      icon: <Handshake className="w-8 h-8 text-accent" />,
      title: "Professional Partnership",
      description: "Join our team of expert contributors and collaborators",
    },
    {
      icon: <Rocket className="w-8 h-8 text-accent" />,
      title: "Grow Your Portfolio",
      description: "Showcase your AI expertise and build credibility",
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Community Impact",
      description: "Help others learn and contribute to the AI ecosystem",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work With Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you an AI enthusiast, researcher, or developer? Join our team and make an impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-smooth border-2 hover:border-accent transition-smooth">
              <CardHeader>
                <div className="flex justify-center mb-3">{benefit.icon}</div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd3uhmOgHXaNW0-mobZ53QdGokB0tOpL87w94DYb-4vab_d4w/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg" className="text-lg px-8">
              Apply to Work With Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
