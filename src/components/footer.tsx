import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bala-murugan29", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/balamurugan-r/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:r.balamurugan.dev@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Balamurugan</h3>
            <p className="text-muted-foreground">
              Creating exceptional digital experiences
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 glass-card flex items-center justify-center hover:bg-primary/10 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            {currentYear} Balamurugan R. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};