import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blogContent";

const Blog = () => {
  const articles = getAllBlogPosts();
  const categories = ["All", "Computer Vision", "Neural Networks", "AI Architecture", "LLM & Prompting"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="gradient-light py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Blog & Research</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore advanced guides, in-depth articles, and simplified research summaries from our expert team
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Link key={index} to={`/blog/${article.slug}`} className="group">
                  <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-accent h-full flex flex-col hover-scale">
                    <CardHeader className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock size={14} />
                          <span className="text-xs">{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-accent transition-smooth mb-3">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          <span className="font-medium">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to Share Your AI Research or Projects?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join our community and contribute your knowledge. We welcome submissions from researchers, developers, and AI enthusiasts.
            </p>
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20your%20AI%20Hub%20services.%0A%0A1.%20Buy%20a%20Pre-made%20Project%0A2.%20Mentor%20Me%20%E2%80%93%20Assistance%20and%20guidance%20from%20idea%20to%20implementation%0A3.%20Custom%20ML%20Model%20Development%0A4.%20Idea%20Generation%20Service%0A5.%20I%20want%20to%20share%20my%20work%0A6.%20General%20Query%0A%0APlease%20select%20a%20number%20from%20the%20above%20options."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-accent px-8 py-3 rounded-md font-semibold hover:bg-white/90 transition-smooth">
                Share Your Work
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
