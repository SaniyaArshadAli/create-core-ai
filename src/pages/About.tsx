import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: "Our Mission",
      description: "To democratize AI education and empower individuals and organizations to harness the power of artificial intelligence.",
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Innovation First",
      description: "We stay at the cutting edge of AI technology, constantly updating our content and services with the latest advancements.",
    },
    {
      icon: <Heart className="w-12 h-12 text-accent" />,
      title: "Community Driven",
      description: "We believe in the power of collaboration and community-driven knowledge sharing to accelerate AI learning.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About WisdomCore.ai</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Where AI Knowledge Meets Action
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                WisdomCore.ai was founded with a simple yet powerful vision: to create a comprehensive platform where AI knowledge, 
                practical implementation, and community collaboration come together seamlessly.
              </p>
              <p className="text-muted-foreground mb-4">
                We recognized a gap in the AI ecosystem - while there was plenty of scattered information and isolated services, 
                there wasn't a unified platform that combined high-quality educational content, ready-to-use project packages, 
                professional AI services, and a thriving community all in one place.
              </p>
              <p className="text-muted-foreground">
                Today, WisdomCore.ai serves students, professionals, and organizations looking to leverage AI technology. Whether 
                you're learning the basics, building your first project, or scaling AI solutions for your business, we're here to 
                support your journey every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-smooth border-2 hover:border-accent transition-smooth">
                  <CardHeader>
                    <div className="flex justify-center mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
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
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of learners and professionals who trust WisdomCore.ai for their AI education and project needs
            </p>
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20WisdomCore.ai."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
                Get in Touch
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
