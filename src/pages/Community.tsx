import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

const Community = () => {
  const feature = {
    icon: <PenTool className="w-12 h-12 text-accent" />,
    title: "Share Your Work",
    description: "Share your AI projects, research, and tutorials with the community.",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our AI Community</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with AI enthusiasts, share your work, collaborate on projects, and grow together
            </p>
          </div>
        </section>

        {/* Feature */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="shadow-smooth hover:shadow-lg transition-smooth border-2 hover:border-accent">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary rounded-lg">{feature.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base mb-4">{feature.description}</CardDescription>
                      <a
                        href="https://wa.me/919959100901?text=Hello!%20I%20would%20like%20to%20share%20my%20AI%20work%20on%20WisdomCore.ai."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="cta" className="w-full sm:w-auto">
                          Get Started
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-lg text-muted-foreground">Active Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">200+</p>
                <p className="text-lg text-muted-foreground">Published Articles</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">50+</p>
                <p className="text-lg text-muted-foreground">Collaborative Projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Start publishing your work, collaborating with others, and building your AI portfolio today
            </p>
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20would%20like%20to%20join%20the%20WisdomCore.ai%20community."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
                Get Started
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
