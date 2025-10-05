import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="AL-AqCore.ai" className="h-10 w-10" />
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              AL-AqCore.ai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}>
                <Button variant="ghost" className="text-base">
                  {link.name}
                </Button>
              </Link>
            ))}
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20your%20AI%20Hub%20services.%0A%0A1.%20Buy%20a%20Pre-made%20Project%0A2.%20Mentor%20Me%20%E2%80%93%20Assistance%20and%20guidance%20from%20idea%20to%20implementation%0A3.%20Custom%20ML%20Model%20Development%0A4.%20Idea%20Generation%20Service%0A5.%20I%20want%20to%20share%20my%20work%0A6.%20General%20Query%0A%0APlease%20select%20a%20number%20from%20the%20above%20options."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" className="ml-4">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-base">
                  {link.name}
                </Button>
              </Link>
            ))}
            <a
              href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20your%20AI%20Hub%20services.%0A%0A1.%20Buy%20a%20Pre-made%20Project%0A2.%20Mentor%20Me%20%E2%80%93%20Assistance%20and%20guidance%20from%20idea%20to%20implementation%0A3.%20Custom%20ML%20Model%20Development%0A4.%20Idea%20Generation%20Service%0A5.%20I%20want%20to%20share%20my%20work%0A6.%20General%20Query%0A%0APlease%20select%20a%20number%20from%20the%20above%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2"
            >
              <Button variant="cta" className="w-full">
                Get Started
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
