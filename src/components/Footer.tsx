import { Link } from "react-router-dom";
import { Mail, MessageCircle, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="AL-AqCore.ai" className="h-10 w-10" />
              <span className="text-xl font-bold text-white">AL-AqCore.ai</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Where AI Knowledge Meets Action. Your one-stop hub for AI learning, projects, and services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-hover transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-hover transition-smooth">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-hover transition-smooth">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/AL-Aql-Ai" target="_blank" rel="noopener noreferrer" className="hover:text-hover transition-smooth">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="hover:text-hover transition-smooth">
                  Blog & Research
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-hover transition-smooth">
                  Project Packages
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-hover transition-smooth">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-hover transition-smooth">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-hover transition-smooth">Custom ML Models</li>
              <li className="hover:text-hover transition-smooth">AI Consulting</li>
              <li className="hover:text-hover transition-smooth">Project Assistance</li>
              <li className="hover:text-hover transition-smooth">Idea Generation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/919959100901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-hover transition-smooth"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact.alaql.ai@gmail.com"
                  className="flex items-center space-x-2 hover:text-hover transition-smooth"
                >
                  <Mail size={16} />
                  <span>Email Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} AL-AqCore.ai. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-hover transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-hover transition-smooth">
              Terms of Service
            </Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScxHAm7wVCaY_TJHlAMK75K27IYzYQQVXVOJtxvy38hxtwrpA/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-hover transition-smooth"
            >
              Feedback & Payment
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
