import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "NLP Sentiment Analyzer",
      description: "Complete sentiment analysis system with BERT implementation, training scripts, and deployment guide.",
      price: "₹4,100",
      level: "Intermediate",
      category: "NLP",
      features: ["BERT Model", "Training Scripts", "REST API", "Docker Setup"],
    },
    {
      title: "Computer Vision Object Detector",
      description: "YOLOv8-based object detection with custom dataset training and real-time inference code.",
      price: "₹4,950",
      level: "Advanced",
      category: "Computer Vision",
      features: ["YOLOv8", "Custom Training", "Real-time Detection", "Model Export"],
    },
    {
      title: "Recommendation System",
      description: "Collaborative filtering recommendation engine with user-item matrix and deployment setup.",
      price: "₹3,270",
      level: "Beginner",
      category: "ML",
      features: ["Collaborative Filtering", "Matrix Factorization", "Flask API", "Database Schema"],
    },
    {
      title: "Chatbot with RAG",
      description: "Retrieval-Augmented Generation chatbot using LangChain and vector databases.",
      price: "₹5,780",
      level: "Advanced",
      category: "GenAI",
      features: ["LangChain", "Vector DB", "Context Retrieval", "Deployment Guide"],
    },
    {
      title: "Image Classification CNN",
      description: "Convolutional neural network for image classification with transfer learning options.",
      price: "₹2,930",
      level: "Beginner",
      category: "Computer Vision",
      features: ["CNN Architecture", "Transfer Learning", "Data Augmentation", "Model Evaluation"],
    },
    {
      title: "Time Series Forecasting",
      description: "LSTM-based time series prediction with feature engineering and visualization.",
      price: "₹3,770",
      level: "Intermediate",
      category: "ML",
      features: ["LSTM Model", "Feature Engineering", "Visualizations", "Model Comparison"],
    },
  ];

  const filters = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Project Packages</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-made AI/ML projects with complete code, documentation, and video tutorials
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Badge key={filter} variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-smooth text-sm px-4 py-2">
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col shadow-smooth hover:shadow-lg transition-smooth border-2 hover:border-accent">
                  <CardHeader>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="secondary">{project.level}</Badge>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-3xl font-bold text-accent mb-4">{project.price}</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={`https://wa.me/919959100901?text=Hello!%20I%20want%20to%20buy%20the%20project:%20${encodeURIComponent(project.title)}`}
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
