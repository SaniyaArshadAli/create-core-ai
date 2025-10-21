import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Sparkles, Target, Network } from "lucide-react";

const Collaboration = () => {
  const expertiseAreas = [
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: "Medical & Healthcare",
      description: "Doctors, nurses, and healthcare professionals bringing domain expertise to AI-driven diagnostics and treatment solutions.",
      fields: ["Radiology", "Pathology", "Clinical Research", "Patient Care"]
    },
    {
      icon: <Sparkles className="w-12 h-12 text-accent" />,
      title: "Legal & Compliance",
      description: "Lawyers and legal experts collaborating on AI systems for contract analysis, legal research, and compliance automation.",
      fields: ["Corporate Law", "IP Rights", "Regulatory Compliance", "Legal Tech"]
    },
    {
      icon: <Network className="w-12 h-12 text-accent" />,
      title: "Finance & Accounting",
      description: "Chartered accountants and financial experts working on AI solutions for auditing, fraud detection, and financial modeling.",
      fields: ["Auditing", "Risk Management", "Financial Analysis", "Tax Automation"]
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Engineering & Architecture",
      description: "Civil engineers, architects, and construction professionals developing AI tools for design optimization and project management.",
      fields: ["Structural Design", "Urban Planning", "Construction Tech", "CAD Automation"]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-accent py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              AI Collaboration & Expertise Exchange
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Bridging domain expertise with AI innovation. Connect with AI developers to build 
              interdisciplinary solutions that transform industries and solve real-world problems.
            </p>
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20want%20to%20collaborate%20on%20AI%20projects.%20My%20expertise%20area%20is:%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
                Start Collaborating
              </Button>
            </a>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple three-step process to connect domain experts with AI professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-silver shadow-silver">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <CardTitle>Share Your Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tell us about your professional domain, challenges you face, and problems that need AI solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-silver shadow-silver">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <CardTitle>Get Matched</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We connect you with AI developers and researchers who specialize in your domain area.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-silver shadow-silver">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <CardTitle>Build Together</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Collaborate to create innovative AI solutions that make a real-world impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Expertise Areas We Connect</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From healthcare to finance, we bridge AI with every professional domain
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {expertiseAreas.map((area, index) => (
                <Card key={index} className="border-silver shadow-silver">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{area.icon}</div>
                      <div>
                        <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                        <CardDescription className="text-base">{area.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {area.fields.map((field, idx) => (
                        <span 
                          key={idx}
                          className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-gradient-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Collaborate?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-silver shadow-silver">
                <CardHeader>
                  <CardTitle>Innovation at Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Combine deep domain knowledge with cutting-edge AI to create solutions that truly understand and solve industry problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-silver shadow-silver">
                <CardHeader>
                  <CardTitle>Mutual Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Domain experts learn AI capabilities while AI developers gain invaluable industry insights and practical applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-silver shadow-silver">
                <CardHeader>
                  <CardTitle>Real-World Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build AI systems that address actual challenges, improving efficiency, accuracy, and outcomes in your field.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Bridge AI with Your Expertise?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're a domain expert looking to leverage AI or an AI developer seeking real-world applications, 
              let's create innovative solutions together.
            </p>
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20want%20to%20collaborate%20on%20AI%20projects.%20My%20expertise%20area%20is:%20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90">
                Connect With Us
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collaboration;
