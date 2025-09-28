import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bala-murugan29", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bala-murugan-r-4ba525330", label: "LinkedIn" },
    { icon: Mail, href: "mailto:r.balamurugan.dev@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-8 sm:py-16 border-t border-border/50">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0">
          <div className="mb-6 sm:mb-0 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-2">Balamurugan</h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Creating exceptional digital experiences
            </p>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-9 h-9 sm:w-12 sm:h-12 glass-card flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-border/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-base text-muted-foreground">
            {currentYear} Balamurugan R. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};