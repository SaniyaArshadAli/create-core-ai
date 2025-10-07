import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectIdeas, domains, levels } from "@/lib/projectIdeas";
import { Lightbulb, Target, Users, TrendingUp } from "lucide-react";

const ProjectIdeas = () => {
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const filteredProjects = projectIdeas.filter((project) => {
    const domainMatch = selectedDomain === "All" || project.domain === selectedDomain;
    const levelMatch = selectedLevel === "All" || project.level === selectedLevel;
    return domainMatch && levelMatch;
  });

  const getDomainColor = (domain: string) => {
    const colors: Record<string, string> = {
      MedTech: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
      EdTech: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      FinTech: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
      AgroTech: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    };
    return colors[domain] || "bg-primary/10 text-primary";
  };

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      Beginner: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
      Intermediate: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
      Advanced: "bg-rose-500/10 text-rose-700 dark:text-rose-400",
    };
    return colors[level] || "bg-secondary";
  };

  return (
    <>
      <Helmet>
        <title>AI & ML Project Ideas by Domain | Innovative Data Science Projects</title>
        <meta 
          name="description" 
          content="Explore 20+ innovative AI, machine learning, and data science project ideas across MedTech, EdTech, FinTech, and AgroTech domains. Find beginner to advanced projects with detailed descriptions and target audiences." 
        />
        <meta 
          name="keywords" 
          content="AI project ideas, machine learning projects, data science projects, MedTech AI, EdTech innovation, FinTech solutions, AgroTech projects, student projects, ML portfolio, data analytics projects" 
        />
        <link rel="canonical" href="https://yoursite.com/project-ideas" />
        <meta property="og:title" content="Explore AI & ML Project Ideas by Domain" />
        <meta property="og:description" content="Discover innovative project ideas in AI, ML, and data science across healthcare, education, finance, and agriculture sectors." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="gradient-primary py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
                Explore Project Ideas by Domain
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
                Discover innovative AI, machine learning, and data science project ideas across cutting-edge domains. 
                Perfect for students, developers, and tech enthusiasts looking to build impactful solutions.
              </p>
            </div>
          </section>

          {/* Domain Overview */}
          <section className="py-12 px-4 bg-background/50">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="hover-scale transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">MedTech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Healthcare AI solutions for diagnostics, patient care, and medical research
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">EdTech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Educational technology projects for learning, skill development, and student success
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">FinTech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Financial technology solutions for banking, payments, and wealth management
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover-scale transition-smooth">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">AgroTech</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Agricultural innovations for sustainable farming and crop optimization
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Filter Section */}
          <section className="py-8 px-4 bg-background">
            <div className="container mx-auto">
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-lg font-semibold mb-3">Filter by Domain</h2>
                  <div className="flex flex-wrap gap-2">
                    {domains.map((domain) => (
                      <Button
                        key={domain}
                        variant={selectedDomain === domain ? "default" : "outline"}
                        onClick={() => setSelectedDomain(domain)}
                        className="transition-smooth"
                      >
                        {domain}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">Filter by Difficulty Level</h2>
                  <div className="flex flex-wrap gap-2">
                    {levels.map((level) => (
                      <Button
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        onClick={() => setSelectedLevel(level)}
                        className="transition-smooth"
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-12 px-4">
            <div className="container mx-auto">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="hover-scale transition-smooth shadow-smooth flex flex-col h-full animate-fade-in"
                  >
                    <CardHeader>
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <Badge className={`${getDomainColor(project.domain)} border`}>
                          {project.domain}
                        </Badge>
                        <Badge className={getLevelColor(project.level)}>
                          {project.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="mb-4 flex-1">
                        <h4 className="font-semibold text-sm mb-2">The Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{project.challenge}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-2">Target Audience:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.targetAudience.slice(0, 2).map((audience, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{audience}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto">
                        <h4 className="font-semibold text-sm mb-2">Key Topics:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.keywords.slice(0, 4).map((keyword, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-muted-foreground">
                    No projects found matching your filters. Try adjusting your selection.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 gradient-light">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                These project ideas are perfect for building your portfolio, learning new skills, 
                and creating impactful solutions. Need guidance or want to collaborate?
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="/community">Join Our Community</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/services">Explore Our Services</a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProjectIdeas;
