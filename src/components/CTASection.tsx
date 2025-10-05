import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 gradient-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start Your AI Journey?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join our community of AI enthusiasts, learners, and professionals. Publish your work, collaborate on projects, and grow together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/community">
            <Button variant="hero" size="lg" className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto">
              Join Community
            </Button>
          </a>
          <a
            href="https://wa.me/919959100901?text=Hello!%20I%20am%20interested%20in%20your%20AI%20Hub%20services.%0A%0A1.%20Buy%20a%20Pre-made%20Project%0A2.%20Mentor%20Me%20%E2%80%93%20Assistance%20and%20guidance%20from%20idea%20to%20implementation%0A3.%20Custom%20ML%20Model%20Development%0A4.%20Idea%20Generation%20Service%0A5.%20I%20want%20to%20share%20my%20work%0A6.%20General%20Query%0A%0APlease%20select%20a%20number%20from%20the%20above%20options."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
