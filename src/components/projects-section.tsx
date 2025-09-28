import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/hungerlink-screenshot.png";
import project2 from "@/assets/project2.jpg"; 
import project3 from "@/assets/project3.jpg";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Hungerlink",
      description: "A MERN-based food donation platform with React and Tailwind, featuring donor and recipient dashboards, NGO verification, and an AI-powered freshness checker for safe food sharing.",
      image: project1,
      technologies: ["React", "TypeScript",  "Node.js", "Mongodb"],
      githubUrl: "https://github.com/Bala-murugan29/Hungerlink",
      featured: true
    },
    {
      id: 2,
      title: "Parental + Study app",
      description: "Cross-platform mobile app that is used to parental+studing purposes .",
      image: project2,
      technologies: ["flutter"],
      githubUrl: "https://github.com/Bala-murugan29/Study-Buddy",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of my latest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl transition-all duration-500 hover:scale-105 ${
                project.featured ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] md:aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                
                {/* Overlay on hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ zIndex: 2 }}
                >
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" style={{ zIndex: 1 }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 2 }}>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-sm md:text-base"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info - static on mobile, absolute on desktop */}
              <div className="p-4 md:p-8 md:absolute md:bottom-0 md:left-0 md:right-0">
                <div className="glass-card p-4 md:p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};