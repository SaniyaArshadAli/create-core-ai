import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "Understanding Transformer Architecture in NLP",
      description: "A deep dive into how transformers revolutionized natural language processing and enabled models like GPT and BERT.",
      author: "Dr. Sarah Chen",
      date: "Jan 15, 2025",
      category: "NLP",
      readTime: "8 min read",
    },
    {
      title: "Computer Vision: From CNNs to Vision Transformers",
      description: "Exploring the evolution of computer vision models and the latest breakthroughs in image recognition.",
      author: "Michael Rodriguez",
      date: "Jan 12, 2025",
      category: "Computer Vision",
      readTime: "10 min read",
    },
    {
      title: "Building Production-Ready ML Pipelines",
      description: "Best practices for deploying machine learning models at scale with proper monitoring and maintenance.",
      author: "Alex Kumar",
      date: "Jan 10, 2025",
      category: "MLOps",
      readTime: "12 min read",
    },
    {
      title: "Generative AI: Beyond Text and Images",
      description: "Exploring new frontiers in generative AI including audio, video, and multimodal applications.",
      author: "Dr. Emily Watson",
      date: "Jan 8, 2025",
      category: "GenAI",
      readTime: "15 min read",
    },
    {
      title: "Reinforcement Learning in Real-World Applications",
      description: "How RL is being used in robotics, gaming, and autonomous systems with practical examples.",
      author: "James Park",
      date: "Jan 5, 2025",
      category: "RL",
      readTime: "11 min read",
    },
    {
      title: "Ethics in AI: Building Responsible Systems",
      description: "Addressing bias, fairness, and transparency in artificial intelligence development.",
      author: "Dr. Priya Sharma",
      date: "Jan 3, 2025",
      category: "AI Ethics",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", "NLP", "Computer Vision", "MLOps", "GenAI", "RL", "AI Ethics"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Blog & Research</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore tutorials, articles, and simplified research summaries from experts and community contributors
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-smooth text-sm px-4 py-2">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-smooth cursor-pointer border-2 hover:border-accent">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-accent transition-smooth">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </CardContent>
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

export default Blog;
