import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "NLP Sentiment Analyzer",
      description: "Complete sentiment analysis system with BERT implementation, training scripts, and deployment guide.",
      price: "$49",
      level: "Intermediate",
      category: "NLP",
    },
    {
      title: "Computer Vision Object Detector",
      description: "YOLOv8-based object detection with custom dataset training and real-time inference code.",
      price: "$59",
      level: "Advanced",
      category: "Computer Vision",
    },
    {
      title: "Recommendation System",
      description: "Collaborative filtering recommendation engine with user-item matrix and deployment setup.",
      price: "$39",
      level: "Beginner",
      category: "ML",
    },
  ];

  return (
    <section className="py-20 gradient-light relative">
      <div className="absolute inset-0 bg-gradient-silver opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Project Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-made AI/ML projects with complete code, documentation, and video tutorials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col shadow-smooth hover:shadow-lg transition-smooth">
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <Badge variant="secondary">{project.level}</Badge>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-3xl font-bold text-accent">{project.price}</p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://wa.me/919959100901?text=Hello!%20I%20want%20to%20buy%20the%20project:%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="cta" className="w-full">
                    Buy Now
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
