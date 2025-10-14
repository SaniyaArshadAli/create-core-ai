import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Briefcase, Package, Users } from "lucide-react";
import { Link } from "react-router-dom";

const HighlightsSection = () => {
  const highlights = [
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: "AI Blog & Research",
      description: "Tutorials, articles, and simplified research summaries. Learn from experts and community contributors.",
      link: "/blog",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-accent" />,
      title: "AI Services",
      description: "Custom ML solutions, consulting, and student project assistance. From idea to implementation.",
      link: "/services",
    },
    {
      icon: <Package className="w-12 h-12 text-accent" />,
      title: "Project Packages",
      description: "Ready-made AI/ML projects with code, documentation, and video explanations. Start building today.",
      link: "/projects",
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Community",
      description: "Publish your work, collaborate with others, and grow together in our vibrant AI community.",
      link: "/community",
    },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-silver opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need for AI Success</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive platform combining knowledge, services, products, and community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Link key={index} to={highlight.link}>
              <Card className="h-full hover:shadow-lg transition-smooth hover:scale-105 cursor-pointer border-2 hover:border-accent">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
