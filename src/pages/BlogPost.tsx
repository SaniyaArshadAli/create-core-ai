import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { getBlogPost } from "@/lib/blogContent";
import ReactMarkdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button variant="cta">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Back Button */}
            <Link to="/blog" className="inline-flex items-center text-accent hover:text-hover transition-smooth mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="secondary" className="text-sm">{post.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate-fade-in">
              {post.title}
            </h1>

            {/* Author & Date */}
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none animate-fade-in">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-primary" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-primary" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-primary" {...props} />,
                  h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2 text-primary" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-foreground" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-foreground" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground" {...props} />,
                  li: ({node, ...props}) => <li className="ml-4" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-semibold text-primary" {...props} />,
                  a: ({node, ...props}) => <a className="text-accent hover:text-hover underline" {...props} />,
                  code: ({node, ...props}) => <code className="bg-secondary px-2 py-1 rounded text-sm" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* CTA at bottom */}
            <div className="mt-12 pt-8 border-t">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Want to Learn More?</h3>
                <p className="text-muted-foreground mb-6">
                  Get personalized AI mentorship and guidance from idea to implementation
                </p>
                <a
                  href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20your%20AI%20Hub%20services.%0A%0A1.%20Buy%20a%20Pre-made%20Project%0A2.%20Mentor%20Me%20%E2%80%93%20Assistance%20and%20guidance%20from%20idea%20to%20implementation%0A3.%20Custom%20ML%20Model%20Development%0A4.%20Idea%20Generation%20Service%0A5.%20I%20want%20to%20share%20my%20work%0A6.%20General%20Query%0A%0APlease%20select%20a%20number%20from%20the%20above%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="cta" size="lg">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
