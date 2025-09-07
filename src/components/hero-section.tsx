import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ["Full-Stack Developer", "UI/UX Designer", "Creative Technologist"];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    const interval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="block gradient-text glow-text">Balamurugan</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-8">
            <h2 className="text-2xl md:text-4xl font-medium text-muted-foreground">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with cutting-edge technology and creative design. 
            Passionate about building the future of web.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hero-glow px-8 py-4 text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 px-8 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: "https://github.com/Bala-murugan29", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/bala-murugan-r-4ba525330/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:r.balamurugan.dev@gmail.com ", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="glass-card p-4 hover:bg-primary/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};