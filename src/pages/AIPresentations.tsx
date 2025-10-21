import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { isAuthenticated } from "@/lib/googleSheets";
import { FileText, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIPresentations = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const isLoggedIn = isAuthenticated();

  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access AI presentations.",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [isLoggedIn, navigate, toast]);

  // Placeholder for PPT links - will be provided by user later
  const presentations = [
    {
      id: 1,
      title: "Introduction to Machine Learning",
      description: "Comprehensive overview of ML fundamentals and algorithms",
      category: "Machine Learning",
      link: "#", // To be updated with actual link
    },
    {
      id: 2,
      title: "Deep Learning Architectures",
      description: "Explore CNNs, RNNs, and Transformer models",
      category: "Deep Learning",
      link: "#", // To be updated with actual link
    },
    {
      id: 3,
      title: "Natural Language Processing",
      description: "NLP techniques and applications in modern AI",
      category: "NLP",
      link: "#", // To be updated with actual link
    },
    {
      id: 4,
      title: "Computer Vision Fundamentals",
      description: "Image processing and object detection techniques",
      category: "Computer Vision",
      link: "#", // To be updated with actual link
    },
  ];

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FileText className="w-16 h-16 mx-auto mb-4 text-accent" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Presentations Library</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive PowerPoint presentations on various AI topics and subfields. 
              Designed for students, professors, lecturers, and AI enthusiasts.
            </p>
          </div>
        </section>

        {/* Presentations Grid */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {presentations.map((ppt) => (
                <Card key={ppt.id} className="hover-scale border-silver shadow-silver">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{ppt.title}</CardTitle>
                        <CardDescription>{ppt.description}</CardDescription>
                      </div>
                      <FileText className="w-8 h-8 text-accent ml-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {ppt.category}
                      </span>
                      <Button 
                        variant="cta" 
                        size="sm"
                        onClick={() => window.open(ppt.link, '_blank')}
                        disabled={ppt.link === "#"}
                      >
                        {ppt.link === "#" ? "Coming Soon" : "View PPT"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Info Box */}
            <Card className="mt-12 border-accent/20 bg-gradient-light">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Member-Only Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These presentations are exclusively available to registered members. 
                  New presentations are added regularly covering the latest developments in AI and machine learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIPresentations;
